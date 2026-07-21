import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([]);
  // const [editingId, setEditingId] = useState("");
  // const [editingText, setEditingText] = useState("");

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text: text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    // setEditingId(id)
    
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );

  };

  // const [editingId, setEditingId] = useState(null)

  // const [editingText, setEditingText] = useState("")


  console.log(todos);



  return (
    <div>
      <h1 className="font-bold text-4xl">Todo List</h1>
      <TodoInput onAdd={addTodo} />
      {/* <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} /> */}
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
        // editingId={editingId}
        // editingText={editingText}
        // setEditingId={setEditingId}
        // setEditingText={setEditingText}
      />
    </div>
  );
};

export default App;
