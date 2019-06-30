import {ACTION_PLANES_LIST, ACTION_SEARCH} from "./AppActionsNames";

let appData = {
    planesList: [],
    search: ''
};

export default function appReducer(state = appData, action) {
    switch(action.type) {
        case ACTION_PLANES_LIST:
            return {
                ...state,
                planesList: action.payload
            };
        case ACTION_SEARCH:
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
};