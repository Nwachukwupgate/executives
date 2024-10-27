import SVGIcon, { SVGIconProps } from "../SVGIcon";

type BellFillProps = Partial<SVGIconProps>;

const BellFill: React.FC<BellFillProps> = ({ ...props }) => {
  return (
    <SVGIcon width="18" height="22" viewBox="0 0 18 22" fill="none" {...props}>
      <path
        opacity="0.16"
        d="M3 9V18H15V9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9Z"
        fill={props.fill ? props.fill : "#282828"}
      />
      <path
        d="M3 18V9C3 7.4087 3.63214 5.88258 4.75736 4.75736C5.88258 3.63214 7.4087 3 9 3C10.5913 3 12.1174 3.63214 13.2426 4.75736C14.3679 5.88258 15 7.4087 15 9V18M3 18H15M3 18H1M15 18H17M8 21H10"
        stroke="#282828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z"
        stroke="#282828"
        strokeWidth="2"
      />
    </SVGIcon>
  );
};

export default BellFill;
