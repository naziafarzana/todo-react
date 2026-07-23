import { useState } from "react";
import Button from "../utils/Button";
// export default function TodoInput() {
//   return (
//     <div>
//       <input value={"some text"} />
//       <button>Submit</button>
//     </div>
//   )
// }

function TodoInput({ onAdd }) {

  const [text, setText] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
    // setDueDate("");
    // values = {text}
    // onChange = {(e)=>setText(e.target.value)}
    // <button onClick = {handleSubmit}>SubmitBtn</button>
  };


  // const [dueDate, setDueDate] = useState("");


  return (


    <form onSubmit={(e) => handleSubmit(e)}
    className="flex gap-3 mb-8">


      <input
      id="todo-input"
      name="todo"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Write your task..."
      className="
        flex-1
        rounded-md
        border
        border-red-900
        bg-zinc-900
        px-4
        py-3
        text-zinc-100
        placeholder:text-zinc-600
        focus:outline-none
        focus:ring-2
        focus:ring-red-700
    "
/>


      {/* <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border rounded px-3 py-2"
      /> */}


     <Button
    type="submit"
    label="＋ Add Task"
    className="
        bg-red-700
        hover:bg-red-800
        text-white
        px-6
    "
/>

    </form>
  );
}



export default TodoInput;
