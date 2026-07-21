import { useState } from 'react'

function TodoItem({ todo, onDelete, onUpdate, index }) {
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
    <li className="flex gap-4">
        <div>{index + 1}</div>
      {isEditing ? (
        <>
          <input
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            className="border-black border-2 rounded"
            />
          <button type="button" onClick={handleToggle} className="bg-blue-500 text-white px-4 py-1 rounded">Update</button>
          </>
      ) : (
        <>
          <div>{todo.text}</div>
          {/* <button type="button" onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-1 rounded">Update</button> */}
        <button type="button" onClick={handleToggle} className="bg-blue-500 text-white px-4 py-1 rounded">Update</button>
        </>
      )}
      <button type="button" onClick={() => onDelete(todo.id)} className= "bg-blue-500 text-white px-4 py-1 rounded">Delete</button>
    </li>
  )
}

export default TodoItem