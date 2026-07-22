import ProjectItem from "./ProjectItem.jsx";
import ProjectInput from "./ProjectInput.jsx";



function ProjectList ({projects, onAddProject, onSelectProject, selectedProjectId}) {


  return (

    <div className="space-y-3">
    {/* <div className = "w-48 h-screen bg-amber-100"> */}
      
      <h3 className="font-medium text-2xl text-green-900 mb-5">📁 Projects</h3> 
   


    <ProjectInput onAdd={onAddProject} />



    <div
    onClick={() => onSelectProject(null)}
    className={`cursor-pointer rounded-lg px-3 py-2 mb-3 transition font-medium ${
    selectedProjectId === null
        ? "bg-green-700 text-white"
        : "hover:bg-green-100"
}`}
>
    🏠 All Todos
</div>


{projects.length === 0 && (
    <p className="text-sm text-gray-500">
        No projects yet.
    </p>
)}

    {projects.map((project) => (


      <ProjectItem
      key={project.id}
      project={project}
      // onAddProject={onAddProject} 
      onSelectProject={onSelectProject}
      selectedProjectId={selectedProjectId}
        />



      ))}
    </div>
    // </div>
  );
}




export default ProjectList
