import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import ReportList from "@/features/projects/ReportList";

type ReportProps = {};
const Report: React.FC<ReportProps> = ({}) => {
  return (
    <CenterOnLgScreen className="py-8">
      <div className="bg-white min-h-[84svh] rounded-lg p-5">
        <section>
          <h1 className="font-bold text-xl py-2">Report</h1>
        </section>

        <div className="py-4">
          <ReportList />
        </div>
      </div>
    </CenterOnLgScreen>
  );
};

export default Report;
