import { use } from "react";
import { useState } from "react";

function Todos (){

    const [Todo, setTodo] = useState([]);
    
    const [input, setInput] = useState('');

    const handleInput = (event)=>{
        setInput(event.target.value)
    }

    const addToDo = ()=>{
        if(input.trim() )
            setTodo([...Todo,input])
            setInput('')
    }

    const handleDelete = (index) =>{
        const updatedTodos = Todo.filter((_,i) => i !== index);
        setTodo(updatedTodos);
    }
    
    return(
        <div>
            <h1> To Do App </h1>
            <h2> Organize Your ToDos With This App</h2>
            <input type="text" placeholder="Enter your todos" value={input} onChange={handleInput}></input>
            <button className="Add" onClick={addToDo}> Add </button>
            <ul>
                {Todo.map((todo,index) => (
                    <li key={index}>
                        {todo}
                        <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                ))}
            </ul>
        </div>
    )
}
export default Todos;