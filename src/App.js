import "./styles.css";
import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"

export default function App() {
  return (
    <div className="app">
      <TodoList/>
    </div>
  )
}