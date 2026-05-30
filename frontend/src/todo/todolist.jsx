import { useState } from "react"
import { UploadData } from "../helper"
import {useDispatch} from "react-redux"
import { addtodo } from "../slice/Todoslice"


export const TodoList = () =>{

    const [item,setItem] = useState('')
    const dispatch = useDispatch();

    const hadleSubmit= async()=>{
     const payload = { item }
     const response = await UploadData(payload)
     console.log("response",response)
     dispatch (addtodo(response?.todo?.item))
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input name="input" value={item} onChange={(e)=>setItem(e.target.value)}/>
            <button onClick={hadleSubmit}>Submit</button>
        </div>
    )
}