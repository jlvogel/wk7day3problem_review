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
    /// from before setTodos is the function that updates the state todos.  Best I can tell right now the state that setTodos will set todos to will be an array with 2 elemnents: newTodo, and ...todos.  todos is the state before setTodos updates it.   ... is the spread operator, which takes the elements in an array and pulls them out individually so the 2nd element could actually be more than one element.  We can see that initially todos is a blank array.   I am creating a test.js to understand this better.  Yep!  That's exactly what it does!

    e.target.value = "" /// sets the target to empty string

  }

  const editTodoText = (id, e) => {
    const todosCopy = [...todos]
    /// Hmmm since todos is an array isn't this unnecessary?  could we just set todosCopy = todos instead?  Think about it and try it later!!  Undertstand this!!!!

    /// quick google search seems this is a way to make a copy of array so that any changes to orginal array will not affect copy.  interesting.  Experiment and understand!!

    ///... yep sure enough that's it!  


  }

  return (
    <div className="App">
      <TodoList/>
    </div>
  )
}