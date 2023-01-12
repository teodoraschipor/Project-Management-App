import { DEFINED } from "../constants";
import { Sprints, Tasks } from "../mockups";
import createDataContext from "./createDataContext";

const sprintReducer = (state, action) => {
    switch(action.type) {
        case "add_sprint":
            return { ...state, sprints: [...state.sprints, { id: state.sprints.length + 1, title: `Sprint ${state.sprints.length + 1}` }]};
        case "add_task":
            return {...state, tasks: [...state.tasks, action.payload]};
        case "delete_task":
            return {...state, tasks: state.tasks.filter((item) => item.id !== action.payload)}
        case "edit_task":
            return {...state, tasks: state.tasks.map((item) => { return item.id === action.payload.id ? action.payload : item })}
        default:
            return state;
    }
};

const addSprint = (dispatch) => {
    return (callback) => {
        dispatch({ type: "add_sprint"});
        if(callback)
            callback();
    }
};

const editTask = (dispatch) => {
    return(sprintId, id, title, assignee, details, status, callback) => {
        dispatch({ type: "edit_task", payload: { sprintId, id, title, assignee, details, status } })
        if(callback) {
            callback();
        }
    }
}

const addTask = (dispatch) => {
    return (sprintId, id, title, assignee, details, status, callback) => {
        dispatch({ type: "add_task", payload: { id, sprintId, title, assignee, details, status: DEFINED } });
        if(callback) {
            callback();
        }
    }
};

const deleteTask = (dispatch) =>  {
    return (id) => {
        dispatch({ type: "delete_task", payload: id })
    }
}

export const { Context, Provider } = createDataContext(sprintReducer, { addSprint, addTask, editTask, deleteTask }, { sprints: Sprints, tasks: Tasks });