import { TIconPack } from "@/common/icons";
import SideNavLink from "./SideNavLink";

const normalBar: {
  icon: TIconPack;
  text: string;
  link: string;
  iconSize?: number;
}[] = [
  {
    icon: "DoorEntrance",
    text: "dashboard",
    link: "/",
    iconSize: 17,
  },
  {
    icon: "AccessIcon",
    text: "Facilities",
    link: "/",
  },
  {
    icon: "ArrowNorthEast",
    text: "Manage Users",
    link: "/",
  },
  {
    icon: "BinFill",
    text: "Facility Unit",
    link: "/",
  },
  {
    icon: "ArrowNorthEast",
    text: "Common Areas",
    link: "/",
  },
  {
    icon: "AngleLeft",
    text: "Communication",
    link: "/",
  },
];

const Navs: React.FC = () => {
  return (
    <>
      {...normalBar.map((props) => {
        return <SideNavLink key={props.text} {...props} />;
      })}
    </>
  );
};

export default Navs;
