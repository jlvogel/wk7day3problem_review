console.log(`%c%s %c%s %c%s`, `color:inherit`, `
START OF FILE index.js

  import { createRoot } from "react-dom/client"
  import App from "./App"

  const rootElement = document.getElementById("root")
  const root = createRoot(rootElement)

  root .render(
    <>
      <h1>Basic Todo List Evelyn</h1>
      `, `background-color:darkcyan`, `<App />`, `color:inherit`, `
    </>
  )

END OF FILE index.js
 `)

import { StrictMode } from "react" // currently not used because 
                                   // tags commented out to avoid duplicate
                                   // console logs

import { createRoot } from "react-dom/client"
import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root .render(
  // <StrictMode> // Note commenting out these StrictMode tags
                  // gets rid of duplicate console logs.  Not exactly
                  // sure why at them moment - something to look into 
                  // later.

  <>  {/*<> is a fragment tag*/}
    <h1>Basic Todo List Evelyn</h1>
    <App />
  </>

  // </StrictMode>
)