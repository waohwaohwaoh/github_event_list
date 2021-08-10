import { IRootState } from "../interface";

const initialState: IRootState = {
    events: {
        data:[],
        loading: false,
        error: false
    }
}

export default initialState