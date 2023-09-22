import { _saveQuestionAnswer, _saveQuestion } from "../database/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION';

export function recieveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(saveQuestionAnswer(info))
        return _saveQuestionAnswer(info).catch((e) => {
            console.log(e)
        })
    }
}

export function saveNewQuestion(question) {
    return {
        type: SAVE_NEW_QUESTION,
        question: question
    }
}

export function handleSaveNewQuestion(info) {
    return (dispatch) => {
        return _saveQuestion(info).then(q => {
            dispatch(saveNewQuestion(q))
        })
    }
}