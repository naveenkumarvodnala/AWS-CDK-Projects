import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../slice/Todoslice";

export const store = configureStore ({
    reducer:{
        todo:TodoReducer
    }
});