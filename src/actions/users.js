import { _saveQuestionAnswer } from "../database/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';

export function recieveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveUserAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveUserAnswer(info) {
    return (dispatch) => {

        dispatch(saveUserAnswer(info))

        return _saveQuestionAnswer(info).catch((e) => {
            console.log(e)
        })
    }
}