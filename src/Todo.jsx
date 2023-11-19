import dummy from '../src/db/data.json'  
import {useState} from "react"

export default function Todo(){

  // const[isDone, setIsDone] = useState(false)
  // console.log(dummy)

  const [todos, setTodos] = useState(dummy.todolist);
  
  function count () {
    console.log(1)
  }

  function toggleIsDone(todoId) {
    const updatedTodos = dummy.todolist.map((todo) =>
      todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  }
  
  return (
    <table className="todoTable">
    <thead>
      <tr>
        <th>Complete</th><th>ToDo</th><th>Del</th>
      </tr>
    </thead>
    <tbody>
        {dummy.todolist.map(todo => (
          <tr key ={todo.id} className={todo.isDone ? 'off' : ""}>
            <td>
              <input type="checkbox" checked={todo.isDone} onChange={() => toggleIsDone(todo.id)} />
            </td>
            <td>
              {todo.input}
            </td>
            <td><button className ="delButton" onClick={count}>Del</button></td>
          </tr>
        ))}
      
    </tbody>
    </table>
  )
}