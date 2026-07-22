import { useState } from "react";



function ProjectInput({ onAdd }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text, dueDate);
    setText("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-black border-2 rounded"
      />


      <input
  type="datetime-local"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>


      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Submit
      </button>
      
    </form>
  );
}
export default ProjectInput;
