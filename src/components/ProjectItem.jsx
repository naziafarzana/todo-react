function ProjectItem({ project, onSelectProject, selectedProjectId }) {



  const isActive = project.id === selectedProjectId;

  const handleClick = () => {
    onSelectProject(project.id);
  };



  return (

    <div onClick={handleClick}
    
    className={`cursor-pointer rounded-lg px-3 py-2 transition font-medium ${
    selectedProjectId === project.id
        ? "bg-green-700 text-white"
        : "hover:bg-green-100"}`}>

      
      {project.name}
    </div>
  );
}

export default ProjectItem
