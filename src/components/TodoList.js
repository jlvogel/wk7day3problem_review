import Todo from "./Todo"

export default function TodoList({
  todos,
  addTodo,
  completeTodo,
  editTodoText,
  deleteTodo
}) {
  return (
    <>
      <h1>Create Todo</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          e.key === "Enter" && addTodo(e)
          /// this is conditional rendering in react.
          /// same as saying if e.key === "Enter" then call function addTodo(e)  looks like a simpler way of writing an if statement

          // if (e.key === "Enter") {
          //   addTodo(e)
          // }

          // this appears to do the same thing!  
          // yes it does and it works in plain old js
          // true && function calls function.
          // took me long enough to realize this - so simple!!!
        }}
      />
      {todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => !i.completed)
              .map((todo) => {
                return (
                  <Todo
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
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
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