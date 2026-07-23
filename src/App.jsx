import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
// import ProjectList from "./components/ProjectList";
import Sidebar from "./components/Sidebar";



const App = () => {
  const [todos, setTodos] = useState([]);
  // const [editingId, setEditingId] = useState("");
  // const [editingText, setEditingText] = useState("");


  const addTodo = (text) => {
  
  const newTodo = { 
      id: uuidv4(),
      text: text,
      projectId: null,
      dueDate: "" ,
  };
    setTodos([...todos, newTodo]);
};



      const updateDueDate = (id, dueDate) => {
      setTodos(
        todos.map(todo =>
          todo.id === id
            ? { ...todo, dueDate }
            : todo
        )
      );
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


  const [projects, setProjects] = useState([]);




  const addProject = (text) => {

  setProjects([...projects, { id: uuidv4(), name: text }]);
  };


  const [selectedProjectId, setSelectedProjectId] = useState(null); 




  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
  };



  const filteredTodos = selectedProjectId === null
  ? todos
  : todos.filter(todo => todo.projectId === selectedProjectId);



  const handleAssignProject = (todoId, newProjectId) => {
  setTodos(

    todos.map(todo => {

      if (todo.id === todoId) {

        const projectId = newProjectId === "" ? null : newProjectId;

        return { ...todo, projectId: projectId };
      }
      return todo;
    })
  );
};





  // console.log(todos);



  return (

    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">


      <Sidebar
        projects={projects}
        onAddProject={addProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={selectedProjectId}
      />



      <div className="flex-1 p-10">



    <h1 className="mb-2 text-5xl font-black tracking-wider text-red-700">
  {selectedProjectId === null
    ? "All Todos"
    : projects.find(project => project.id === selectedProjectId)?.name}
</h1>


<p className="mb-8 text-zinc-400">
  {filteredTodos.length} 
  {" "}
  {filteredTodos.length === 1 ? "Task" : "Tasks"}
</p>





      <TodoInput onAdd={addTodo} />

      {/* <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} /> */}
      



      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
        projects={projects}         
        onAssignProject={handleAssignProject}
        onUpdateDueDate={updateDueDate}
        // editingId={editingId}
        // editingText={editingText}
        // setEditingId={setEditingId}
        // setEditingText={setEditingText}

        />
        </div>
{/*      


      <aside className="w-64 bg-amber-100 h-screen">
      <ProjectList 
      project={project}
      onAddProject={addProject}
      onSelectProject={handleSelectProject} 
      selectedProjectId={selectedProjectId}
      />
      </aside> */}
    </div>


  );
};





export default App;
