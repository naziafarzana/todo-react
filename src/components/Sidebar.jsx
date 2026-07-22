import ProjectList from "./ProjectList";

const Sidebar = ({ projects, onAddProject, onSelectProject, selectedProjectId }) => {
  
  
    return (

    <aside className="w-72 bg-green-50 border-r p-6 shadow-sm">

        
     
      <ProjectList
        projects={projects}
        onAddProject={onAddProject}
        onSelectProject={onSelectProject}
        selectedProjectId={selectedProjectId}
      />
    </aside>


  )
}

export default Sidebar