
// const TodoList = () => {
//   return (
//     <div>
//       <h1>Todo List</h1>
//     </div>
//   )
// }


function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.id}>
          <div>{index + 1}</div>
          <div>{todo.text}</div>
          <button onClick={() => onUpdate(todo.id)}>Update</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}



export default TodoList
