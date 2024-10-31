import SVGIcon, { SVGIconProps } from "../SVGIcon";

type WalletOutlineProps = Partial<SVGIconProps>;
const WalletOutline: React.FC<WalletOutlineProps> = ({ ...props }) => {
  return (
    <SVGIcon width="23" height="21" viewBox="0 0 23 21" fill="none" {...props}>
      <rect
        x="1.5"
        y="1.5"
        width="20"
        height="18"
        rx="5"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
      />
      <path
        d="M16.5 10C16.5 8.61929 17.6193 7.5 19 7.5H21.0283C21.2888 7.5 21.5 7.71119 21.5 7.9717V12.398C21.5 12.4543 21.4543 12.5 21.398 12.5H19C17.6193 12.5 16.5 11.3807 16.5 10V10Z"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
      />
      <line
        x1="6.2"
        y1="14.8"
        x2="8.8"
        y2="14.8"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        stroke-linecap="round"
      />
    </SVGIcon>
  );
};

export default WalletOutline;
