import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../navigation/slice"

export default configureStore({
    reducer: {
        navigationSlice: navigationReducer
    }
})