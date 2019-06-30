import {ACTION_PLANES_LIST, ACTION_SEARCH} from "./AppActionsNames";

export function setPlanesList(planesList = []) {
    return {
        type: ACTION_PLANES_LIST,
        payload: planesList
    }
}

export function setSearch(search = '') {
    return {
        type: ACTION_SEARCH,
        payload: search
    }
};