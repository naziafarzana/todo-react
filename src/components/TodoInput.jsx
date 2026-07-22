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
    // values = {text}
    // onChange = {(e)=>setText(e.target.value)}
    // <button onClick = {handleSubmit}>SubmitBtn</button>
  };



  return (


    <form onSubmit={(e) => handleSubmit(e)}
    className="flex gap-3 mb-6 
  
  ">


      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded px-3 py-2"
      />


     <Button
  type="submit"
  label="Add Todo"
  className="bg-green-600 hover:bg-green-700 text-white"
/>

    </form>
  );
}



export default TodoInput;
