import { _getUsers, _getQuestions } from "../database/_DATA";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

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