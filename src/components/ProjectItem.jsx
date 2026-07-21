function ProjectItem({ project, onSelectProject, selectedProjectId }) {

  const isActive = project.id === selectedProjectId;

  const handleClick = () => {
    onSelectProject(project.id);
  };

  return (
    <div onClick={handleClick}
    className={`cursor-pointer p-2 ${isActive ? 'bg-gray-200' : ''}`}>
      {project.name}
    </div>
  );
}

export default ProjectItem
