import { useState } from "react"

export default function Todo({ todo, completeTodo, editTodoText, deleteTodo}){
  const [showInput, setShowInput] = useState(false)
  return (
    <li>
      {console.log("<Todo> component returns a list item (<li>)")}
      {console.log("<li>")}
      <div className="left">
        {console.log("<div> className='left'")}
        <h2
          onClick={(e) => {
            setShowInput(!showInput) /// toggles the state
            console.log("list item clicked")
            console.log("toggle show input box that allows you to change the name of the list item")
          }}
        >
          {console.log("todo.text == ", todo.text)}
          {todo.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
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
    </li>
  )
}