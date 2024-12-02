import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import ContractorList from "@/features/projects/ContractorList";


type ContractorProps = {};
const Contractor: React.FC<ContractorProps> = ({}) => {
  return (
    <CenterOnLgScreen className="py-8">
      <div className="bg-white min-h-[84svh] rounded-lg p-5">
        <section>
          <h1 className="font-bold text-xl py-2">Contractor</h1>
        </section>

        <div className="py-4">
          <ContractorList /> 
        </div>
      </div>
    </CenterOnLgScreen>
  );
};

export default Contractor;
