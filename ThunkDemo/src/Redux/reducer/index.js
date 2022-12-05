import { combineReducers } from "@reduxjs/toolkit";

import reducer from "./dataReducer";

export const rootReducer = combineReducers({
    data: reducer,
});