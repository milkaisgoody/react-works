import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 }

//액션과 리듀서를 생성
const counterSlice = createSlice({
    //필수 속성 : name, initialState, reducers
    name: 'counter',
    initialState,
    reducers: {
        //1 증가
        increment: (state) => { state.count = state.count + 1}, 
        decrement: (state) => { state.count = state.count - 1}, 
        //입력값만큼 증가
        incrementByAmount : (state, action) => {
            //state.count = state.count + action.payload
            state.count += action.payload
        }
    }
})

//애견과 리듀서 내보내기
export const { 
                increment, 
                decrement,
                incrementByAmount
} = counterSlice.actions;
export default counterSlice.reducer;