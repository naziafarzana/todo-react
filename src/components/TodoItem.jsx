import { useState } from 'react'
import Button from '../utils/Button'
import DeadlineCounter from "./DeadlineCounter";




function TodoItem({ 
  todo,
        onDelete,
          onUpdate,
          index,
            projects,
            onAssignProject,
        onUpdateDueDate }) {
  
  
  const [isEditing, setIsEditing] = useState(false)
  const [draftText, setDraftText] = useState(todo.text)
  const [showProjects, setShowProjects] = useState(false);



  // const handleSave = () => {
  //   onUpdate(todo.id, draftText)
  //   setIsEditing(false)
  // }
  


  // const handleToggle = () => {
  //   if (isEditing) {
  //     handleSave()
  //   } else {
  //     setIsEditing(true)
  //   }
  // }



   const handleToggle = () => {
    if (isEditing) {
      onUpdate(todo.id, draftText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };
  

  const currentProject =
    projects.find((project) => project.id === todo.projectId)?.name ??
    "Unassigned";


  // const formattedDate = todo.dueDate
  // ? new Date(todo.dueDate).toLocaleString([], {

  //     weekday: "long",
  //     month: "short",
  //     day: "numeric",
  //     year: "numeric",
  //     hour: "numeric",
  //     minute: "2-digit",
  //   })
  // : "";




  return (

    <div className='flex-1 p-4'>

    <li className="bg-zinc-900 border border-red-900 rounded-xl shadow-lg p-4 flex items-center justify-between">
      
      
      
      <div className="flex items-center gap-4">


      <div className="text-zinc-400 font-semibold">
        {index + 1}
        </div>

    
    
    {/* <select
    value={todo.projectId ?? ""}
    onChange={(e) => onAssignProject(todo.id, e.target.value)}
    className="
      bg-zinc-900
      border
      border-red-900
      text-zinc-200
      rounded-sm
      px-3 
      py-2
      text-sm
      focus:outline-none
      focus:ring-2
      focus:ring-red-700
      ">

    <option value="">Unassigned</option>

    {projects.map((proj) => (
      <option key={proj.id} value={proj.id}>
        {proj.name}
      </option>
    ))}
  </select> */}




<div className="relative">


  <button
    type="button"
    onClick={() => setShowProjects(!showProjects)}
    className="
        w-44
        bg-zinc-950
        border
        border-red-900
        rounded-md
        px-3
        py-2
        flex
        justify-between
        items-center
        text-zinc-200
        hover:border-red-600
    ">


     <span>⚔ {currentProject}</span>
              <span>▾</span>
            </button>





{showProjects && (
  <div
className="
absolute
top-full
left-0
mt-2
w-44
bg-zinc-950
border
border-red-900
rounded-lg
overflow-hidden
shadow-2xl
z-50
">




<div
onClick={()=>{
onAssignProject(todo.id,"");
setShowProjects(false);
}}
className="
px-4
py-3
cursor-pointer
hover:bg-red-900
transition
"
>
Unassigned
</div>




{projects.map((project)=>(
<div
key={project.id}
onClick={()=>{
onAssignProject(todo.id,project.id);
setShowProjects(false);
}}
className="
px-4
py-3
cursor-pointer
hover:bg-red-900
transition
"
>
{project.name}
</div>
))}

</div>
)}

</div>





    <div>
      {isEditing ? (
        <>
          <input
            id={`todo-${todo.id}`}
            name="todoText"
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
                  className="
                  bg-zinc-950
                  border
                  border-red-900
                  rounded-md
                  px-3
                  py-2
                  text-zinc-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-700
                "/>
          {/* <button type="button" onClick={handleToggle} className="bg-blue-500 text-white px-4 py-1 rounded">Update</button> */}
          
          {/* <div className="flex gap-2">
          <Button label="Update" onClick={handleToggle} className="bg-red-700 hover:bg-red-800" />
          </div> */}
          </>

      ) : (
        <>

          <div className="text-zinc-100 font-medium">
            {todo.text}
            </div>



    <DeadlineCounter
        todo={todo}
        onUpdateDueDate={onUpdateDueDate}
    />
          {/* <button type="button" onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-1 rounded">Update</button> */}
        {/* <button type="button" onClick={handleToggle} className="bg-blue-500 text-white px-4 py-1 rounded">Update</button>
        */}


        </>
      )}
      </div>





<div className="flex gap-2"> </div>
      {/* <button type="button" onClick={() => onDelete(todo.id)} className= "bg-blue-500 text-white px-4 py-1 rounded">Delete</button> */}
     
      <Button
  label={isEditing ? "Save" : "Update"}
  onClick={handleToggle}
  className="bg-red-700 hover:bg-red-800"
/>



<Button
    label="Delete"
    onClick={() => onDelete(todo.id)}
    className="bg-zinc-800 hover:bg-black border border-red-900"
/>


</div>


    </li>
    </div>

  );

}

export default TodoItem