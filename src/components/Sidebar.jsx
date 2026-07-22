import ProjectList from "./ProjectList";

const Sidebar = ({ project, onAddProject, onSelectProject, selectedProjectId }) => {
  return (
    <aside className="w-64 bg-amber-100 h-screen">
      <ProjectList
        project={project}
        onAddProject={onAddProject}
        onSelectProject={onSelectProject}
        selectedProjectId={selectedProjectId}
      />
    </aside>
  )
}

export default Sidebar