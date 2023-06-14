import {configureStore} from "@reduxjs/toolkit"
import stateSlice from "./stateslice"

export const store=configureStore({
    reducer:{
        sample:stateSlice,

    }
})