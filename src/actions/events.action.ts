
import axios from "axios";
import { GET_EVENT_LIST_ERROR, GET_EVENT_LIST_START, GET_EVENT_LIST_SUCCESS } from "../actionTypes";


export function getEventList() {
    return async (dispatch: any) => {
        dispatch({ type: GET_EVENT_LIST_START })
        try {
            const response = await axios.get('https://api.github.com/events', { params: { page: 1, per_page: 25 } })
            dispatch({ type: GET_EVENT_LIST_SUCCESS, payload: response })
        } catch (error) {
            dispatch({ type: GET_EVENT_LIST_ERROR, payload: error })
        }
    }
}