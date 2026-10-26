import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"

// store 생성
export const store = configureStore({
    reducer: {
        //counterSlice에서 내보내기한 reducer를 통해 
        counter: counterReducer, 
    }
});