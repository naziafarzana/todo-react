function ProjectList ({projects}) {


  return (
    <div>
    {projects.map((project) => (
        <projects
        key={project.id}
        projects={project}
        />
      ))}
    </div>
  )
}

export default ProjectList
