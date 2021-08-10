import { GET_EVENT_LIST_ERROR, GET_EVENT_LIST_START, GET_EVENT_LIST_SUCCESS } from "../actionTypes";
import { IAction, IEvents } from "../interface";
import initialState from "../store/initialState";

export default function (state: IEvents = initialState.events, action: IAction<any>) {
    switch (action.type) {
        case GET_EVENT_LIST_START:
            return {
                ...state,
                loading: true,
                error: undefined
            }
        case GET_EVENT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data
            }
        case GET_EVENT_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}