console.log(`
START OF FILE App.js`)

import "./styles.css";
import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"

export default function App() {
  
  const [todos, setTodos] = useState([])

console.log(`
START FUNCTION App()
  const [todos, setTodos] = useState([])
  todos == `, todos)

  /// todos is the state
  /// setTodos is the function that will update the state
  /// initial state value is blank array

  const addTodo = (e) => {
  /// addTodo is a function that takes in a parameter e
    console.log(`  START FUNCTION addTodo(e)`)
    console.log(`    const newTodo = { text: e.target.value, id: Date.now(), completed: false }`)
    const newTodo = { text: e.target.value, id: Date.now(), completed: false }
    /// newTodo is an object with 3 key-value pairs (text, id, and completed properties)
    console.log(`    newTodo == `, newTodo)
    console.log('    todos == ', todos)
    console.log(`    [newTodo, ...todos] == `,[newTodo, ...todos])
    console.log(`    setTodos([newTodo, ...todos]) // useState Hook!`)

    setTodos([newTodo, ...todos])
    /// from before setTodos is the function that updates the state todos.  Best I can tell right now the state that setTodos will set todos to will be an array with 2 elemnents: newTodo, and ...todos.  todos is the state before setTodos updates it.   ... is the spread operator, which takes the elements in an array and pulls them out individually so the 2nd element could actually be more than one element.  We can see that initially todos is a blank array.   I am creating a test.js to understand this better.  Yep!  That's exactly what it does!

    console.log("    todos == ", todos)

    console.log("    e.target.value = \"\"")
    e.target.value = "" /// sets the target to empty string

    console.log("  END FUNCTION addTodo(e)")
  }

  const completeTodo = (id, e) => {
    console.log("  BEGIN FUNCTION completeTodo(id, e)")
    const todosCopy = [...todos]
    /// Hmmm since todos is an array isn't this unnecessary?  could we just set todosCopy = todos instead?  Think about it and try it later!!  Undertstand this!!!!

    /// quick google search seems this is a way to make a copy of array so that any changes to orginal array will not affect copy.  interesting.  Experiment and understand!!

    ///... yep sure enough that's it!  

    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    /// todosCopy is an array of objects.  Best I understand each object in the array has 3 properties (text, id, and completed).  This will set indexOfTodo to the index value where the id is equal to the id sent as an argument to the id of editTodoText(id, e).  Phew!

    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    /// This would appear to be a toggle command.  If it is false, then it is set to true and vice versa.

    setTodos([...todosCopy])
    /// setTodos sets the state (todos) to be equal to a COPY of todosCopy array.  So todosCopy is alread a copy of todos so this would be a copy of a copy?  Best as I can tell....

    console.log("  END FUNCTION completeTodo(id, e)")
  }

  const editTodoText = (id, e) => {
    console.log("  BEGIN FUNCTION editTodoText(id, e)")
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].text = e.target.value
    setTodos([...todosCopy])
    e.target.value = ""
    console.log("  END FUNCTION editTodoText(id, e)")
  }

  const deleteTodo = (id) => {
    console.log("  BEGIN FUNCTION deleteTodo(id)")
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)

    todosCopy.splice(indexOfTodo, 1)
    /// this would remove todosCopy[indexOfTodo] from todosCopy array.
    
    setTodos([...todosCopy])
    console.log("  END FUNCTION deleteTodo(id)")
  }

  return (
    <div className="App">
    {console.log("  BEGIN App.js return (<div className=\"App\"></div>")}
      {console.log("    <TodoList and set props")}

      {console.log("    todos = ", todos)}
      {/* {console.log("addTodo = ", addTodo)}
      {console.log("completeTodo = ", completeTodo)}
      {console.log("editTodoText = ", editTodoText)}
      {console.log("deleteTodo = ", deleteTodo)} */}
        <TodoList
          todos={todos}
          addTodo={addTodo}
          completeTodo={completeTodo}
          editTodoText={editTodoText}
          deleteTodo={deleteTodo}
        />

    {console.log("  END App.js return (<div className=\"App\"></div>")}

{console.log(`END FUNCTION App()`)}
    </div>
  )
}

console.log("END OF FILE App.js")