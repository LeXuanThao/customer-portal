import * as ACTIONS from "../actionTypes";

const initialState = {
    loading: false,
    locate: "en"
}
export default function system(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.HIDE_LOADING:
            return {
                ...state,
                loading: false
            };
        case ACTIONS.SHOW_LOADING:
            return {
                ...state,
                loading: true
            };
        case ACTIONS.CHANGE_LANGUAGE:
            let lang = action.payload.lang;
            return {
                ...state,
                locate: lang
            }
        default:
            return state;
    }
}