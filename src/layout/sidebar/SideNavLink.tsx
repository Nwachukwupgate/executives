import IconComponent from "@/common/icons/Icon";
import { navLinkProps } from "@/types/general";
import { matchPath, NavLink, useLocation } from "react-router-dom";

type props = navLinkProps;

const SideNavLink: React.FC<props> = ({ link, icon, text, iconSize }) => {
  const defaultStyles = "flex items-center px-4 rounded-lg py-[0.85rem] my-2 ";
  const { pathname } = useLocation();
  const isActive = matchPath(
    {
      path: pathname,
    },
    link
  );

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? `${defaultStyles} bg-primaryColorLight text-primaryColor`
          : `${defaultStyles} text-primaryTextHighlight hover:bg-primaryColorDark`
      }
    >
      <span>
        <IconComponent
          name={icon}
          size={iconSize ? iconSize : 20}
          fill={isActive ? "#008CDB" : "#E6F4FB"}
        />
      </span>
      <span className="ml-4">{text}</span>
    </NavLink>
  );
};

export default SideNavLink;
