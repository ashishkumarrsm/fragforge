import { useDispatch, useSelector } from "react-redux";
import { selectFilteredTemplates, setCategory } from "../features/templates/templatesSlice";
import useEditorNav from "../hooks/useEditorNav";
import CategoryTabs from "../components/templates/CategoryTabs";
import TemplateCard from "../components/templates/TemplateCard";
import SectionHead from "../components/ui/SectionHead";
import EmptyState from "../components/ui/EmptyState";

export default function TemplatesPage() {
  const dispatch = useDispatch();
  const category = useSelector((s) => s.templates.category);
  const list = useSelector(selectFilteredTemplates);
  const { startWithTemplate } = useEditorNav();

  return (
    <>
      <CategoryTabs active={category} onChange={(c) => dispatch(setCategory(c))} />
      <SectionHead title={category === "All designs" ? "Popular this week" : category} />
      <p className="-mt-3 mb-4 text-right text-[11px] text-muted">{list.length} templates</p>
      {list.length === 0 ? (
        <EmptyState>No templates match your search.</EmptyState>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {list.map((t) => (
            <TemplateCard key={t.id} template={t} onUse={startWithTemplate} />
          ))}
        </div>
      )}
    </>
  );
}
