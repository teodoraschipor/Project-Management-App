import React from 'react';
import { useReducer } from "react";

// we export a plain function from this file that's why we named this file  with a lower case leading character

export default (reducer, actions, initialState) => {

    // actions: { addBlogPost: (dispatch) => { return () => {} } }

    const Context =  React.createContext();

    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};

        for(let key in actions) {
            boundActions[key] = actions[key](dispatch); // boundActions.addBlogPost = a reference to (dispatch) => { return () => {} }
        }

        return(
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    }

    return { Context, Provider };
}
