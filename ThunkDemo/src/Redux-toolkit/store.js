import { configureStore } from "@reduxjs/toolkit";

import slice from "./index";

export const store = configureStore({
    reducer:  slice.reducer,
});
