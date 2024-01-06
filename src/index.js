console.log("")
console.log("START OF FILE index.js")

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

console.log("  START root .render(<></>)") // <> and </> are opening and
                                           // closing fragment tags.
root .render(
  // <StrictMode> // Note commenting out these StrictMode tags
                  // gets rid of duplicate console logs.  Not exactly
                  // sure why at them moment - something to look into 
                  // later.
  <>
  {console.log("    <>")}

    {console.log("      <h1>Basic Todo List Evelyn</h1>")}
    <h1>Basic Todo List Evelyn</h1>

    {console.log("      <App />")}
    <App />

  {console.log("    </>")}
  </>
  // </StrictMode>
)
console.log("  END root .render(<></>)")

console.log("END OF FILE index.js")