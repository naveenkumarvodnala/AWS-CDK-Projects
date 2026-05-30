import { useState } from "react"
import { getStudentData } from "../helper";

export const StudentForm =()=>{

    const [name, setName] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [hallTicket, setHallTicket] = useState('');
    const [status, setStatus] = useState('pass');

    const handleSubmit = async() =>{

        const studentdata = {
            id:Math.floor(Math.random()*100000),
            name,
            studentClass,
            hallTicket,
            status
        }

        const payload = studentdata

        console.log("studetdata", studentdata)

        const response = await getStudentData(payload)

        console.log("sadad",response)


        // setName('');
        // setStudentClass('')
        // setHallTicket('')
        // setStatus('pass')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <label htmlFor="name">Student Name: </label>
                    <input name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="name"/><br></br><br></br>
                </div>
                <div>
                    <label htmlFor="class">Student Class: </label>
                    <input name="class" id="class" value={studentClass} onChange={(e)=>setStudentClass(e.target.value)} autoComplete="off"/><br></br><br></br>
                </div>
                <div>
                    <label htmlFor="hallticket">Student HallTicket: </label>
                    <input name="hallticket" id="hallticket" value={hallTicket} onChange={(e)=>setHallTicket(e.target.value)} autoComplete="off"/><br></br><br></br>
                </div>
                <div>
                    <label htmlFor="status">Student Status: </label>
                    <select id="status" name="status" value={status} onChange={(e) =>setStatus(e.target.value)}>
                        <option value='pass'>pass</option>
                        <option value='faile'>faile</option>
                    </select>
                </div><br></br><br></br>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}