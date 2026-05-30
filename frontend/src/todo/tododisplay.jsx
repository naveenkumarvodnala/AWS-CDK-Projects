import { useSelector } from "react-redux"

export const TodoDisplay = () =>{

    const items = useSelector((state)=>state.todo.item)

    console.log("DADADAAS", items)

    return (
        <div>
            <ul>
                {items.map((item,i)=>(
                    <li key={i}>{item}</li>
            ))}
            </ul>
        </div>
    )
}