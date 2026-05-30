import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    item:[]
}

const todoslice = createSlice({
    name:"todolist",
    initialState,
    reducers : {
        addtodo :(state,action) =>{
            state.item.push (action.payload)
        }
    }
})

export const { addtodo } = todoslice.actions;
export default todoslice.reducer
