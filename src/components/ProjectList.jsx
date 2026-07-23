import ProjectItem from "./ProjectItem.jsx";
import ProjectInput from "./ProjectInput.jsx";



function ProjectList ({projects, onAddProject, onSelectProject, selectedProjectId}) {


  return (

    <div className="space-y-4">
    {/* <div className = "w-48 h-screen bg-amber-100"> */}
     
      <h3 className="text-3xl font-bold tracking-widest text-red-700 mb-6">
    PROJECTS
</h3>


    <ProjectInput onAdd={onAddProject} />



    <div
    onClick={() => onSelectProject(null)}
    className={`cursor-pointer rounded-lg px-3 py-3 mb-3 transition font-semibold border ${
        selectedProjectId === null
            ? "bg-red-700 border-red-500 text-white"
            : "bg-zinc-900 border-red-900 text-zinc-300 hover:bg-red-950 hover:border-red-700 hover:text-white"
    }`}
>
    ✠ All Tasks
</div>


{projects.length === 0 && (
   <p className="text-sm italic text-zinc-500">
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
