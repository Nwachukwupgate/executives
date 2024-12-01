import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import SubscriberList from "@/features/projects/SubscribersList";

type ContractorsProps = {};
const Subscriber: React.FC<ContractorsProps> = ({}) => {
  return (
    <CenterOnLgScreen className="py-8">
      <div className="bg-white min-h-[84svh] rounded-lg p-5">
        <section>
          <h1 className="font-bold text-xl py-2">Subscribers</h1>
        </section>

        <div className="py-4">
          <SubscriberList />
        </div>
      </div>
    </CenterOnLgScreen>
  );
};

export default Subscriber;
