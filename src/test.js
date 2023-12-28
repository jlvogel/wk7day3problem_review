const todos = [1,2,3]

setTodos = () => {
  let value = 2
  return [{key:value}, ...todos]
}

console.dir(setTodos())