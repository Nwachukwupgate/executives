import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import Project from "@/features/projects/Project";

type ProjectPageProps = {};
const ProjectPage: React.FC<ProjectPageProps> = ({}) => {
  return (
    <CenterOnLgScreen className="py-8">
      <div className="bg-white min-h-[84svh] rounded-lg p-5">
        <section>
          <h1 className="font-bold text-xl py-2">Projects</h1>
        </section>

        <div className="py-4">
          <Project />
        </div>
      </div>
    </CenterOnLgScreen>
  );
};

export default ProjectPage;
