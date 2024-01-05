console.log("START index.js")

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root .render(
  // <StrictMode> // Note commenting out these StrictMode tags
                  // gets rid of duplicate console logs.  Not exactly
                  // sure why at them moment - something to look into 
                  // later.
  <>
    {console.log("  START root.render(<></>)")}
    {console.log("    <h1>Basic Todo List Evelyn</h1>")}
    <h1>Basic Todo List Evelyn</h1>
    {console.log("    <App />")}
    <App />
    {console.log("  END root.render(<></>)")}
  </>
  // </StrictMode>
)

console.log("END index.js")