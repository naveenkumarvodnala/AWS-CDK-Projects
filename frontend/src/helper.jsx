
import axios from "axios"

export const UploadData = async (payload) =>{
    try {
        const response = await axios.post ("http://localhost:3000/UpdateTodolist",payload,{
            headers :{
                "Content-type":"application/json"
            }
        })

        console.log("response",response)
        return response.data;
    } catch(error) {
        console.log("error",error)
    }
} 



export const getStudentData =() =>{
    
}