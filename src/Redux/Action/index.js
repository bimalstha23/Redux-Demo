import { actiontype } from "../ActionTypes/CounterActionType";
export const increment = (payload) => {
    return {
        type: actiontype.INCREMENT,
        payload,
    };
}

export const decrement = (payload) => {
    return {
        type: actiontype.DECREMENT,
        payload,
    };
}

// export default { increament, decreament };