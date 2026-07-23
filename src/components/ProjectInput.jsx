import { useState } from "react";



function ProjectInput({ onAdd }) {
  const [text, setText] = useState("");
  // const [dueDate, setDueDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>

      <input
        id="todo-input"
        name="todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-md border border-red-900 bg-zinc-900 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-700"
      />


      {/* <input
  type="datetime-local"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/> */}


      <button
        type="submit"
        className="w-full mt-3 rounded-md bg-red-700 py-2 text-white transition hover:bg-red-800"
      >
        Submit
      </button>
      
    </form>
  );
}
export default ProjectInput;
