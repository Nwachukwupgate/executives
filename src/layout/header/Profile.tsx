import dummy from "@/assets/image/profilesmall.png";
import AngleRight from "@/common/icons/pack/AngleRight";

type ProfileProps = {};
const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <div className="relative">
      <div className="flex cursor-pointer items-center gap-2">
        <img
          src={dummy}
          className="w-11 h-11 rounded-full cursor-pointer"
          alt="profile image"
        />
        <div className="hidden md:block">
          <span className="font-[500] text-xl">Ola</span>
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
