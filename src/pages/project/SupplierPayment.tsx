import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import SupplierList from "@/features/projects/SupplierList";

type SupplierProps = {};
const Supplier: React.FC<SupplierProps> = ({}) => {
  return (
    <CenterOnLgScreen className="py-8">
      <div className="bg-white min-h-[84svh] rounded-lg p-5">
        <section>
          <h1 className="font-bold text-xl py-2">Supplier</h1>
        </section>

        <div className="py-4">
          <SupplierList />
        </div>
      </div>
    </CenterOnLgScreen>
  );
};

export default Supplier;
