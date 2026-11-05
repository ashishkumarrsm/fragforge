import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../features/templates/templatesSlice";
import { FORMATS } from "../data/formats";
import useEditorNav from "../hooks/useEditorNav";
import HeroBanner from "../components/dashboard/HeroBanner";
import FormatCard from "../components/dashboard/FormatCard";
import ProjectCard from "../components/projects/ProjectCard";
import NewProjectCard from "../components/projects/NewProjectCard";
import SectionHead from "../components/ui/SectionHead";

export default function DashboardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects = useSelector((s) => s.projects.items);
  const { createBlank, editProject } = useEditorNav();

  const openFormat = (category) => {
    dispatch(setCategory(category));
    navigate("/templates");
  };

  return (
    <>
      <HeroBanner onCreate={createBlank} />

      <SectionHead title="Start with a format" action="Browse all templates" onAction={() => navigate("/templates")} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {FORMATS.map((f) => (
          <FormatCard key={f.label} format={f} onClick={() => openFormat(f.category)} />
        ))}
      </div>

      <SectionHead title="Recent projects" action="View all projects" onAction={() => navigate("/projects")} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {projects.slice(0, 3).map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => editProject(p)} />
        ))}
        <NewProjectCard onClick={createBlank} />
      </div>
    </>
  );
}
