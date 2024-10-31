import { TIconPack } from "@/common/icons";
import SideNavLink from "./SideNavLink";

const normalBar: {
  icon: TIconPack;
  text: string;
  link: string;
  iconSize?: number;
}[] = [
  {
    icon: "OutilineProfileOne",
    text: "Profile",
    link: "/",
  },
  {
    icon: "RoundEdgeocument",
    text: "Project",
    link: "/12",
  },
  {
    icon: "ManInDocument",
    text: "Contractor",
    link: "/123",
  },
  {
    icon: "WalletOutline",
    text: "Supplier Payment",
    link: "/124",
  },
  {
    icon: "ThreeUsers",
    text: "StoreKeeper",
    link: "/15",
  },
  {
    icon: "ReportOutline",
    text: "Report",
    link: "/21",
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
