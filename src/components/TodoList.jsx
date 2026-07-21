import TodoItem from "./TodoItem";

function TodoList({  todos, onDelete, onUpdate, }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  )
}

export default TodoList













// import { useState } from "react";
// import TodoItem from "./TodoItem";
// import App from "../App";

// function TodoList({
//   todos,
//   onDelete,
//   onUpdate,
//   // editingId,
//   // editingText,
// }) {
  
//   // console.log(editingId);
//   // const [updateText, setUpdateText] = useState('')

//   return (
//     <ul>
//       {todos.map((todo, index) => (
//         <li key={todo.id} className="flex gap-4">
//           <div>{index + 1}</div>
//           {todo.id === editingId ? (
//             <input
//               value={updateText}
//               onChange={(e) => setUpdateText(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   onUpdate(todo.id, editingText);
//                 }
//               }}
//               className="border-2 border-green-900"
//             />
//           ) : (
//             <div>{todo.text}</div>
//           )}
//           <div>
//             <button
//               type="button"
//               onClick={() => onUpdate(todo.id, updateText)}
//               className="bg-blue-500 text-white px-4 py-1 rounded"
//             >
//               Update
//             </button>
//             <button
//               type="button"
//               onClick={() => onDelete(todo.id)}
//               className="bg-blue-500 text-white px-4 py-1 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;



