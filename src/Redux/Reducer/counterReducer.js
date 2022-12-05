import { actiontype } from "../ActionTypes/CounterActionType"
const initialstate = {
    counter: 0,
}


const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case actiontype.INCREMENT:
            return {
                ...state,
                counter:state.counter + action.payload,
                // counter: state.counter + action.payload,
            }
        case actiontype.DECREMENT:
            return {
                ...state,
                counter: state.counter - action.payload,
            }
        default:
            return state;
    }
}
export default reducer;