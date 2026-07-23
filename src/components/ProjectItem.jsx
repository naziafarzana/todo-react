function ProjectItem({ project, onSelectProject, selectedProjectId }) {



  const isActive = project.id === selectedProjectId;

  const handleClick = () => {
    onSelectProject(project.id);
  };



  return (

    <div onClick={handleClick}
    
    className={`cursor-pointer rounded-lg px-3 py-2 transition font-medium ${
    selectedProjectId === null
? "bg-red-700 text-white shadow-lg"
: "text-zinc-300 hover:bg-zinc-900 hover:text-white"}`}>

      
      {project.name}
    </div>
  );
}

export default ProjectItem
