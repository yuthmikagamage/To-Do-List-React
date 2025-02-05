import { use } from "react";
import { useState } from "react";

function Todos (){

    const [Todo, setTodo] = useState(['ToDo 1 ','ToDo 2']);
    const [input, setInput] = useState('');

    const handleInput = (event)=>{
        setInput(event.target.value)
    }

    const addToDo = ()=>{
        if(input.trim() )
            setTodo([...Todo,input])
            setInput('')
    }
    return(
        <div>
            <h1> To Do App </h1>
            <h2> Organize Your ToDos With This App</h2>
            <input type="text" value={input} onChange={handleInput}></input>
            <button onClick={addToDo}> Add </button>
            <ul>
                {Todo.map((todo,index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
export default Todos;