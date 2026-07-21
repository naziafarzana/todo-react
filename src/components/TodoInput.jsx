import { useState } from "react";

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
    // values = {text}
    // onChange = {(e)=>setText(e.target.value)}
    // <button onClick = {handleSubmit}>SubmitBtn</button>
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-black border-2 rounded"
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
export default TodoInput;
