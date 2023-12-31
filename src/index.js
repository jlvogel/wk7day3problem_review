import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root .render(
  // <StrictMode>
  <>
    {console.log("<h1>Basic Todo List Evelyn</h1>")}
    <h1>Basic Todo List Evelyn</h1>
    {console.log("<App />")}
    <App />
  </>
  // </StrictMode>
)