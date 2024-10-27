import { iconNames } from "@/common/icons";
import AppLogo from "@/common/icons/AppLogo";
import IconComponent from "@/common/icons/Icon";
import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import { appToast } from "@/utilities/appToast";
import { Typography } from "@mui/material";

type DevIconsPageProps = {};
const DevIconsPage: React.FC<DevIconsPageProps> = ({}) => {
  function copyHandler(name: string) {
    navigator.clipboard.writeText(name);
    appToast.Success("copied!");
  }
  return (
    <section className="">
      <section className="px-4 py-7 md:px-8 lg:px-16">
        <AppLogo />
      </section>
      <CenterOnLgScreen className="!px-4">
        <section className="py-4">
          <Typography variant={"h1"} sx={{ fontWeight: "bold" }}>
            Icons Pack
          </Typography>
        </section>
        <section className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(100px,1fr))]">
          {iconNames.map((iconName) => (
            <div
              onClick={() => copyHandler(iconName)}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="rounded-xl border-2 border-primaryColor p-4 hover:shadow-xl">
                <IconComponent name={iconName} fill="#000" size={25} />
              </div>
              <div className="text-xs font-medium">{iconName}</div>
            </div>
          ))}
        </section>
      </CenterOnLgScreen>
    </section>
  );
};

export default DevIconsPage;
