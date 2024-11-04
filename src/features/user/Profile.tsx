import img from "@/assets/image/estatehouseview.jpeg";
import profile from "@/assets/image/profile1.jpeg";
import OutlineCamera from "@/common/icons/pack/OutlineCamera";
import { Button, Typography } from "@mui/material";

type ProfileProps = {};
const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <div className="w-full">
      <div className="rounded-lg mx-auto bg-white max-w-[700px] lg:max-w-[100ch]">
        <div
          className="rounded-t-lg relative h-[220px] flex items-end p-4 justify-end"
          style={{
            background: `url('${img}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src={img} className="h-full w-full" alt="image cover" /> */}
          <Button
            type="button"
            className="flex items-center gap-2"
            sx={{ background: "#FFF", color: "black" }}
          >
            <OutlineCamera stroke="#000" />
            <div>Edit Cover Photo</div>
          </Button>
        </div>
        <div className="relative md:h-[70px] px-4  md:pl-44">
          <div className="absolute -top-[86px] md:-top-[120%] left-2 md:left-8">
            <div className="rounded-full bg-[#FFFFFF] w-28 h-28 md:w-32 md:h-32 overflow-hidden  p-1">
              <img
                src={profile}
                className="w-full rounded-full h-full object-cover"
                alt="profile"
              />
            </div>
            <div className="absolute cursor-pointer bg-[#0A3347] p-2 right-0 top-[75%] rounded-lg">
              <OutlineCamera stroke="#fff" />
            </div>
          </div>
          <div className="pt-8 pb-2 md:py-1">
            <h2 className="font-Roobert capitalize">lorem me</h2>
            <p>ICT Manager</p>
          </div>
        </div>

        <div className="px-4 py-4  md:px-10 md:pb-16">
          <Typography className="bg-[#D9D9D9] rounded-xl p-6 py-8 text-[#000000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            est facere adipisci rerum. Cumque temporibus autem, tempora aliquid
            cum deserunt corrupti exercitationem repellat similique fugiat
            distinctio qui nulla, eum vitae.
          </Typography>

          <h2 className="mt-8 py-2 font-bold">Other Roles</h2>

          <p className="bg-[#D9D9D9] rounded-xl p-6 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            voluptatum. Nulla quidem assumenda neque, magni rerum soluta.
            Dolorem delectus, ab dolorum veniam quasi atque minus ad corporis
            eaque quas unde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
