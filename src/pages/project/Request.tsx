import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import RequestList from "@/features/projects/RequestList";


type ContractorProps = {};
const Request: React.FC<ContractorProps> = ({}) => {
  return (
    <CenterOnLgScreen className="py-8">
      <div className="bg-white min-h-[84svh] rounded-lg p-5">
        <section>
          <h1 className="font-bold text-xl py-2">Request</h1>
        </section>

        <div className="py-4">
          <RequestList />

        </div>
      </div>
    </CenterOnLgScreen>
  );
};

export default Request;
