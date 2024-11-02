import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import StoreKeeperList from "@/features/projects/StoreKeeperList";

type StoreKeeperProps = {};
const StoreKeeper: React.FC<StoreKeeperProps> = ({}) => {
  return (
    <CenterOnLgScreen className="py-8">
      <div className="bg-white min-h-[84svh] rounded-lg p-5">
        <section>
          <h1 className="font-bold text-xl py-2">Store Keeper</h1>
        </section>

        <div className="py-4">
          <StoreKeeperList />
        </div>
      </div>
    </CenterOnLgScreen>
  );
};

export default StoreKeeper;
