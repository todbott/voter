import { SET_CURRENT_USER } from "../actions/shared";

export default function setCurrentUser(state = {}, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                ...action.user,
            }
    default:
        return state;
    }
}