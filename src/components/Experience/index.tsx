import projects from "../../utils/projects";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../../context/languageContext";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full p-3 flex flex-col items-center">
      <h2 className="w-full col-start-1 col-end-3 tracking-wide text-4xl text-white text-center font-bold">
        {t.sections.projects}
      </h2>
      <br />
      <div className="flex flex-row flex-wrap justify-center min-h-min">
        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={project.title.replace(" ", "") + i}
              {...project}
            />
          );
        })}
      </div>
    </div>
  );
};
