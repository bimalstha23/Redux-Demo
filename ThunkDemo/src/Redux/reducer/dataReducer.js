import { actiontype } from "../action/actionType";

const initialState = {
    data: null,
    laoding: false,
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontype.process:
            return {
                ...state,
                loading: true,
            };
        case actiontype.success:
            return {
                ...state,
                loading: false,
                data: action.payload,

            };
        case actiontype.failure:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
export default reducer;