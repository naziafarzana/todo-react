import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'






 const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text: text}
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <h1 className='font-bold text-4xl'>Hello</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}


export default App