import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root .render(
  <StrictMode>
  <>
    {console.log("index.js Basic Todo List Evelyn")}
    <h1>Basic Todo List Evelyn</h1>
    {console.log("index.js call App.js")}
    <App />
  </>
  </StrictMode>
)