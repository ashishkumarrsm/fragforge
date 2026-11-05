import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { deleteProject, renameProject, selectFilteredProjects } from "../features/projects/projectsSlice";
import useEditorNav from "../hooks/useEditorNav";
import ProjectCard from "../components/projects/ProjectCard";
import NewProjectCard from "../components/projects/NewProjectCard";
import EmptyState from "../components/ui/EmptyState";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector(selectFilteredProjects);
  const { createBlank, editProject } = useEditorNav();

  const rename = (p) => {
    const name = window.prompt("Rename project", p.name)?.trim();
    if (name) {
      dispatch(renameProject({ id: p.id, name }));
      toast.success("Project renamed");
    }
  };
  const remove = (p) => {
    if (window.confirm(`Delete "${p.name}"?`)) {
      dispatch(deleteProject(p.id));
      toast.success("Project deleted");
    }
  };

  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <NewProjectCard onClick={createBlank} />
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => editProject(p)} onRename={() => rename(p)} onDelete={() => remove(p)} />
        ))}
      </div>
      {projects.length === 0 && (
        <div className="mt-6">
          <EmptyState>No projects found. Create your first design!</EmptyState>
        </div>
      )}
    </>
  );
}
