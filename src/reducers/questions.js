import { RECEIVE_QUESTIONS, SAVE_NEW_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/questions";

export default function questions(state = [], action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case SAVE_QUESTION_ANSWER:
            console.log(state)
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                      ...state[action.qid][action.answer],
                      votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                  }
            }
        case SAVE_NEW_QUESTION:
            return {
                ...state
            }
    default:
        return state;
    }
}