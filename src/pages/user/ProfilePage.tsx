import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import Profile from "@/features/user/Profile";

type ProfilePageProps = {};
const ProfilePage: React.FC<ProfilePageProps> = ({}) => {
  return (
    <CenterOnLgScreen className="lg:py-16">
      <Profile />
    </CenterOnLgScreen>
  );
};

export default ProfilePage;
