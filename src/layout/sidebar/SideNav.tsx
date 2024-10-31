import AppLogo from "@/common/icons/AppLogo";
import Navs from "./Navs";

type SideNavProps = {};
const SideNav: React.FC<SideNavProps> = ({}) => {
  const isActive = false; //for mobile
  return (
    <aside
      aria-label="sidebar"
      className={`fixed top-0 z-[100] h-full w-[288px] overflow-auto bg-primaryColor px-[20px] py-[55px] transition-[left] ${isActive ? "left-0" : "-left-[300px]"} lg:!left-0`}
    >
      <div className="flex mb-4 justify-center">
        <AppLogo />
      </div>
      <Navs />
    </aside>
  );
};

export default SideNav;
