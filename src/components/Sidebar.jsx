import ProjectList from "./ProjectList";

const Sidebar = ({ projects, onAddProject, onSelectProject, selectedProjectId }) => {
  
  
    return (

    <aside className="w-72 min-h-screen bg-black border-r border-red-900 p-6">

        
     
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