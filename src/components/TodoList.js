console.log(`
START OF FILE TodoList.js

    import Todo from "./Todo"

                    _______________
 __________________/ FUNCTION LIST \\___________________
|                                                      |
|   export default function TodoList({                 |
|       todos,                                         |
|       addTodo,                                       |
|       completeTodo,                                  |
|       editTodoText,                                  |
|       deleteTodo                                     |
|   }) {                                               |
|       return (                                       |
|           <>...........</>                           |
|       )                                              |
|   }                                                  |
|______________________________________________________|

END OF FILE TodoList.js
 `)

import Todo from "./Todo"

export default function TodoList({
  parent,
  consoleLog,
  todos,
  addTodo,
  completeTodo,
  editTodoText,
  deleteTodo
}) {

console.log(`%c%s %c%s %c%s %s %c%s %c%s %c%s %c%s %o %c%s %c%s %o %c%s %c%s %o %c%s %c%s %c%s %c%s %c%s %c%s %c%s %c%s %c%s`,`color: inherit`, `
export default function TodoList({
  todos,
  addTodo,
  completeTodo,
  editTodoText,
  deleteTodo
}) {`, `color:orangered`,`
             ________________
  __________/ VARIABLE VALUE \\__________`, `color:orangered; font-size:16px`,
  `
  
      todos == [`, consoleLog(todos),`color:orangered; font-size:16px`,`]`, `color:orangered`,`
  ______________________________________`, `color:inherit`, `

    return (
        <>
            <h1>Create Todo</h1>

            <input
                type="text"
                onKeyDown={(e) => {
                    e.key === "Enter" && addTodo(e)
                }}
            />

                    ________________
         __________/ VARIABLE VALUE \\__________
        |
        |   `, `background-color:orangered`, `todos == `, todos, `background-color:inherit`, `
        |   `, `background-color:orangered`, `todos.length == `, todos.length, `backrgound-color:inherit`, `
        |   `, `background-color:orangered`, `!!todos.length == `, !!todos.length, `background-color:inherit`, `
        |______________________________________

            {todos.length ? (
                <>
                    <h1>Todo Items</h1>

                    <ul class Name="todolist">
                        {todos

                            .filter((i) => !i.completed)

                            .map((todo) => {

                                return (
                                   `, `background-color:darkcyan`, `<Todo`, `background-color: inherit`, `
                                        key={todo.id}
                                        todo={todo}
                                        completeTodo={completeTodo}
                                        editTodoText={editTodoText}
                                        deleteTodo={deleteTodo}
                                   `, `background-color: darkcyan`, `/>`, `background-color: inherit`, `
                                )
                            })
                        }

                    </ul>

                    <h1>Completed Items</h1>

                    <ul class Name="todolist">

                        {todos

                            .filter((i) => i.completed)

                            .map((todo) => {

                                return (
                                   `, `background-color:darkcyan`, `<Todo`, `background-color: inherit`, `
                                        key={todo.id}
                                        todo={todo}
                                        completeTodo={completeTodo}
                                        editTodoText={editTodoText}
                                        deleteTodo={deleteTodo}
                                   `, `background-color: darkcyan`, `/>`, `background-color: inherit`, `
                                )
                            })
                        }

                    </ul>
                </>

            ) : (

                <h1>No Todos Added Yet</h1>
            )}
        </>
    )
}
 `)


  return (
    <>
      <h1>Create Todo</h1>
      <>
        <input
          type="text"
          onKeyDown={(e) => {
          console.log(`%c%s %o %c%s %c%s %c%s`, `color:inherit`, `
                onKeyDown={(e) => {
                    e === `, e, `background-color:inherit`,`
                   `,`background-color:orangered`,`e.key === `,`background-color:orangered`,e.key, `
                    (e.key === "Enter") === `, e.key === "Enter", `
                    e.key === "Enter" && addTodo(e)
                }}`)

            // e.key === "Enter" && addTodo(e)

            /// this is conditional rendering in react.
            /// same as saying if e.key === "Enter" then call function addTodo(e)  looks like a simpler way of writing an if statement

            if (e.key === "Enter") {
              console.log(`%c%s %s %s %s %s`, `color:limegreen`, `
                           Enter press detected.
                           addTodo(e) will run now.
                           addTodo is a parameter of TodoList.
                           The parent of TodoList is `,parent, `
                           so the function addTodo(e) of `, parent, `will run`)
              addTodo(e)
            }

            // this appears to do the same thing!  
            // yes it does and it works in plain old js
            // true && function calls function.
            // took me long enough to realize this - so simple!!!
          }}
        />
      </>
      {todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul className="todolist">
            {todos
              /// studying .filter and .map
              /// need to understand callback functions
              /// learning about callback functions

              /// From w3schools:

              /* "I will call back later!"

              A callback is a function passed as an argument to another function

              This technique allows a function to call another function

              A callback function can run after another function has finished

              */
              
              /// from mdn web docs:
              /// the filter method is a method of an array
              /// creates a SHALLOW copy of a portion of an array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

              // .filter((i) => !i.completed)
              // .filter((i) => {return !i.completed}) // same as above function
              .filter((i) => {
                return (
                  !i.completed
              )})
              /// for now just understand this gives an array of all elements where completed == false
              
              /// from mdn web docs:
              /// creates a NEW array populated with the results of calling a provided function on every element in the calling array.
              .map((todo) => {
                return (
                  <Todo
                    parent = "TodoList"
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
                )
              })}
          </ul>
          <h1>Completed Items </h1>
          <ul className="todolist">
            {todos
              .filter((i) => i.completed)
              .map((todo) => {
                return (
                  <>
                    <Todo
                      key={todo.id}
                      todo={todo}
                      completeTodo={completeTodo}
                      editTodoText={editTodoText}
                      deleteTodo={deleteTodo}
                    />
                  </>
                )
              })}
          </ul>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </>
  )
}