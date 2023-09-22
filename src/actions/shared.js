import { _getUsers, _getQuestions } from "../database/_DATA";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([_getUsers(), _getQuestions()]).then((usersAndQuestions) => {
            let users = usersAndQuestions[0];
            let questions = usersAndQuestions[1];
            dispatch(recieveUsers(users));
            dispatch(recieveQuestions(questions));
            dispatch(hideLoading());
        })
    }
}

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function handleLogin(user) {
    return (dispatch) => {
        dispatch(setCurrentUser(user))
    }
}