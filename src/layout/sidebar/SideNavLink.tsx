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
          ? `${defaultStyles} font-[600] bg-primaryColorDark text-primaryTextHighlight capitalize`
          : `${defaultStyles} text-primaryTextHighlight capitalize hover:bg-[#5B5B5B1F]`
      }
    >
      <span>
        <IconComponent
          name={icon}
          size={iconSize ? iconSize : 22}
          {...(isActive
            ? {
                fill: "white",
                strokeWidth: "0",
              }
            : {
                stroke: "white",
              })}
        />
      </span>
      <span className="ml-4">{text}</span>
    </NavLink>
  );
};

export default SideNavLink;
