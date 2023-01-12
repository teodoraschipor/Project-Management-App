import { signinMethod, signupMethod } from "../methods";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch(action.type) {
          case "signin":
            return action.payload.permission ?  action.payload : { isAuthenticated: action.payload.isAuthenticated }
          case "signout":
            return { isAuthenticated: action.payload, permission: null }
          default:
            return state;
    }
};


const signup = (dispatch) => {
    return ({email, password, callback}) => {
        const response = signupMethod(email, password);
        if(response) {
            dispatch({ type: "signin", payload: { isAuthenticated: true } });
            callback()
        } else {
            dispatch({
                type: "add_error",
                payload: "Something went wrong with sign up",
                });
        }
    }
}

const signin = (dispatch) => {
    return ({email, password, callback}) => {
        const response = signinMethod(email, password);
        if(response.signedin) {
            dispatch({ type: "signin", payload: { isAuthenticated: true, permission: response.permission } });
            callback()
          } else {
            dispatch({
              type: "add_error",
              payload: "Something went wrong with sign in",
            });
          }
    }
}

const signout = (dispatch) => {
  return (callback) => {
      dispatch({ type: "signout", payload: false });
  }
}

export const { Context, Provider } = createDataContext(authReducer, { signin, signup, signout }, { isAuthenticated: false, permission: null }); 