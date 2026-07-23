import TodoItem from "./TodoItem";



function TodoList({  todos, onDelete, onUpdate, projects, onAssignProject,  onUpdateDueDate }) {
  
  if (todos.length === 0) {
  return (
     <div className="flex flex-col items-center justify-center py-20 text-gray-500">
      <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-semibold">
              No Todos Yet
          </h2>

          <p className="mt-2">
              Create your first task.
          </p>
      </div>
  )
}
  return (
    

    // <div className="flex">
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onDelete={onDelete}
          onUpdate={onUpdate}
          projects={projects}   
          onAssignProject={onAssignProject}
          onUpdateDueDate={onUpdateDueDate}
        />
      ))}
    </ul>
    // </div>
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