import SVGIcon, { SVGIconProps } from "../SVGIcon";

type UserOutlineProps = Partial<SVGIconProps>;
const UserOutline: React.FC<UserOutlineProps> = ({ ...props }) => {
  return (
    <SVGIcon width="42" height="54" viewBox="0 0 42 54" fill="none" {...props}>
      <path
        d="M32.3334 12.8333C32.3334 19.0926 27.2593 24.1667 21.0001 24.1667C14.7409 24.1667 9.66675 19.0926 9.66675 12.8333C9.66675 6.57411 14.7409 1.5 21.0001 1.5C27.2593 1.5 32.3334 6.57411 32.3334 12.8333Z"
        stroke="#F2F2F2"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.0001 32.6667C10.0464 32.6667 1.16675 41.5464 1.16675 52.5H40.8334C40.8334 41.5464 31.9537 32.6667 21.0001 32.6667Z"
        stroke={props.stroke ? props.stroke : "#F2F2F2"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default UserOutline;
