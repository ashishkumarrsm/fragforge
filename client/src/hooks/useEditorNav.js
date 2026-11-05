import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startBlank, startFromTemplate, openProject } from "../features/editor/editorSlice";
import { TEMPLATES, getTemplate } from "../data/templates";

/** Helpers that load something into the editor and then go to /editor. */
export default function useEditorNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return {
    createBlank() {
      dispatch(startBlank(TEMPLATES[0]));
      navigate("/editor");
    },
    startWithTemplate(tpl) {
      dispatch(startFromTemplate(tpl));
      navigate("/editor");
    },
    editProject(project) {
      dispatch(openProject({ project, tpl: getTemplate(project.templateId) }));
      navigate("/editor");
    },
  };
}
