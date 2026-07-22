import { useState } from 'react'
import Button from '../utils/Button'





function TodoItem({ todo, onDelete, onUpdate, index, projects, onAssignProject }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draftText, setDraftText] = useState(todo.text)

  const handleSave = () => {
    onUpdate(todo.id, draftText)
    setIsEditing(false)
  }
  
  const handleToggle = () => {
    if (isEditing) {
      handleSave()
    } else {
      setIsEditing(true)
    }
  }
  
  

  return (
    <div className='flex-1 p-6'>

    <li className="bg-white border rounded-xl shadow-sm p-4 mb-4 flex items-center justify-between">
       <div className="flex items-center gap-4">

      <div>{index + 1}</div>

    
    
    <select
    value={todo.projectId ?? ""}
    onChange={(e) => onAssignProject(todo.id, e.target.value)}
    className="border rounded-md px-2 py-1 text-sm"
  >
    <option value="">Unassigned</option>
    {projects.map((proj) => (
      <option key={proj.id} value={proj.id}>
        {proj.name}
      </option>
    ))}
  </select>

      {isEditing ? (
        <>
          <input
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          {/* <button type="button" onClick={handleToggle} className="bg-blue-500 text-white px-4 py-1 rounded">Update</button> */}
          
          <div className="flex gap-2"></div>
         
          <Button label="Update" onClick={handleToggle} bg-amber-500 hover:bg-amber-600 />
          </>
      ) : (
        <>
          <div>{todo.text}</div>
          {/* <button type="button" onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-1 rounded">Update</button> */}
        {/* <button type="button" onClick={handleToggle} className="bg-blue-500 text-white px-4 py-1 rounded">Update</button>
        */}


        </>
      )}
      </div>

<div className="flex gap-2">
      {/* <button type="button" onClick={() => onDelete(todo.id)} className= "bg-blue-500 text-white px-4 py-1 rounded">Delete</button> */}
     
      <Button
  label={isEditing ? "Save" : "Update"}
  onClick={handleToggle}
  className="bg-amber-500 hover:bg-amber-600 text-white"
/>



<Button
    label="Delete"
    onClick={() => onDelete(todo.id)}
    className="bg-red-500 hover:bg-red-600 text-white"
/>


</div>
    </li>
    </div>

  )
}

export default TodoItem