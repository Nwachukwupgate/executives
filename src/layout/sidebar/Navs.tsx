import { TIconPack } from "@/common/icons";
import routes from "@/navigation/routes";
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
    link: routes.parentRoutes.PROJECT,
  },
  {
    icon: "ThreeUsers",
    text: "Staff",
    link: routes.parentRoutes.Employee,
  },
  {
    icon: "OutlineCamera",
    text: "Gallery",
    link: routes.parentRoutes.GALLERY,
  },
  {
    icon: "ManInDocument",
    text: "Create",
    link: routes.parentRoutes.Create,
  },
  {
    icon: "WalletOutline",
    text: "Supplier Payment",
    link: routes.parentRoutes.SUPPLIER_PAYMENT,
  },
  {
    icon: "ThreeUsers",
    text: "StoreKeeper",
    link: routes.parentRoutes.STORE_KEEPER,
  },
  {
    icon: "ReportOutline",
    text: "Report",
    link: routes.parentRoutes.REPORT,
  },
];

const Navs: React.FC = () => {
  return (
    <div className="grid gap-6">
      {...normalBar.map((props) => {
        return <SideNavLink key={props.text} {...props} />;
      })}
    </div>
  );
};

export default Navs;
