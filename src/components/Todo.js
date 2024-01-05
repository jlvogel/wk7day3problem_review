console.log("Todo.js Todo.js Todo.js  Todo.js")

import { useState } from "react"

export default function Todo({ todo, completeTodo, editTodoText, deleteTodo}){
  console.log("START COMPONENT Todo.js")
  console.log("todo == ", todo)

  console.log("const [showInput, setShowInput] = useState(false)")
  const [showInput, setShowInput] = useState(false)
  console.log("showInput == ", showInput)
  return (
    <li>
      {console.log("BEGIN COMPONENT Todo.js return")}
      {console.log("<Todo> component returns a list item (<li>)")}
      {console.log("<li>")}
      <div className="left">
        {console.log("<div> className='left'")}
        {console.log("<h2")}
        <h2
          onClick={(e) => {
            console.log("BEGIN FUNCTION onClick(e)")
            console.log("setShowInput(!showInput)")
            console.log("This toggles the state")
            setShowInput(!showInput) /// toggles the state
            console.log("list item clicked")
            console.log("toggle show input box that allows you to change the name of the list item")
            console.log("END FUNCTION onClick(e)")
          }}
        >
          {console.log("todo.text == ", todo.text)}
          {todo.text}
        </h2>
        {console.log("<input")}
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            console.log("onKeyDown event detected")
            if (e.key === "Enter") {
              console.log("Enter key press detected")
              console.log("todo.id == ", todo.id)
              console.log("e == ", e)
              console.log("editTodoText(todo.id, e")
              console.log("editTodoText is a prop.  look at the function that corresponds to prop in the file that called the Todo.js component.")
              editTodoText(todo.id, e)
              setShowInput(false)
            }
          }}
        />
      </div>
      <label className="middle">
        Complete
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            completeTodo(todo.id, e)
            console.log("completeTodo is a prop.  look at the function that corresponds to prop in the file that called the Todo.js component.")
          }}
        />
      </label>
      <button
        checked={todo.completed}
        onClick={(e) => {
          deleteTodo(todo.id)
        }}
      >
        Delete Todo
      </button>
      {console.log("END COMPONENT Todo.js")}
    </li>
  )
}