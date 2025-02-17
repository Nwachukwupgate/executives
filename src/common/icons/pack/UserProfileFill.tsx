import SVGIcon, { SVGIconProps } from "../SVGIcon";

type UserProfileFillProps = Partial<SVGIconProps>;

const UserProfileFill: React.FC<UserProfileFillProps> = ({ ...props }) => {
  return (
    <SVGIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
        fill={props.fill ? props.fill : "#282828"}
      />
      <path
        opacity="0.5"
        d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z"
        fill={props.fill ? props.fill : "#282828"}
      />
    </SVGIcon>
  );
};

export default UserProfileFill;
