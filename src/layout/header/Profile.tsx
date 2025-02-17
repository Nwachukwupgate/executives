import dummy from "@/assets/image/profilesmall.png";
import AngleRight from "@/common/icons/pack/AngleRight";
import { useAppStore } from "@/store";

type ProfileProps = {};
const Profile: React.FC<ProfileProps> = ({}) => {

  const user = useAppStore((state) => state.user);

  return (
    <div className="relative">
      <div className="flex cursor-pointer items-center gap-2">
        <img
          src={user?.photo}
          className="w-11 h-11 rounded-full cursor-pointer"
          alt="profile image"
        />
        <div className="hidden md:block">
          <span className="font-[500] text-xl">{user?.firstName}</span>
          <div className="flex items-center gap-1">
            <span className="text-sm">OlaPRM844</span>
            <span className="rotate-[90deg] ">
              <AngleRight strokeWidth="2.5" stroke="black" />
            </span>
          </div>
        </div>
      </div>
      <nav></nav>
    </div>
  );
};

export default Profile;
