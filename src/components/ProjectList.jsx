import ProjectItem from "./ProjectItem.jsx";
import ProjectInput from "./ProjectInput.jsx";



function ProjectList ({project, onAddProject, onSelectProject, selectedProjectId}) {


  return (
    <div>
    {/* <div className = "w-48 h-screen bg-amber-100"> */}
      
      <h3 className="font-medium text-4xl">Project List</h3> 
    {/* <ProjectInput onAdd={onAddProject} 
    // /> */}

    {project.map((project) => (

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
