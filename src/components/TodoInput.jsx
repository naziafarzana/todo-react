import { useState } from 'react'

// export default function TodoInput() {
//   return (
//     <div>
//       <input value={"some text"} />
//       <button>Submit</button>
//     </div>
//   )
// }

function TodoInput({ onAdd }) {
    const [text, setText] = useState("")

    const handleSubmit = () => {
        onAdd(text)
        setText('')
        // values = {text} 
        // onChange = {(e)=>setText(e.targer.value)}
        // <button onClick = {handleSubmit}>SubmitBtn</button>
    }

    return (
        <div>
      <input value={text} onChange={(e) => setText(e.target.value)} className='border-black border-2 rounded' />
      <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-1 rounded'>SubmitBtn</button>
    </div>
    )

}
export default TodoInput







