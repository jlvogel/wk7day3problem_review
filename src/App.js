import "./styles.css";
import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"

export default function App() {

  const [todos, setTodos] = useState([])
  /// todos is the state
  /// setTodos is the function that will update the state
  /// initial state value is blank array

  const addTodo = (e) => {
  /// addTodo is a function that takes in a parameter e

    const newTodo = { text: e.target.value, id: Date.now(), completed: false }
    /// newTodo is an object with 3 key-value pairs (text, id, and completed properties)

    setTodos([newTodo, ...todos])
    /// from before setTodos is the function that updates the state todos.  


  }

  return (
    <div className="App">
      <TodoList/>
    </div>
  )
}