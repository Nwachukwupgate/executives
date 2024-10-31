import SVGIcon, { SVGIconProps } from "../SVGIcon";

type RoundEdgeocumentProps = Partial<SVGIconProps>;
const RoundEdgeocument: React.FC<RoundEdgeocumentProps> = ({ ...props }) => {
  return (
    <SVGIcon width="21" height="23" viewBox="0 0 21 23" fill="none" {...props}>
      <rect
        x="1.5"
        y="1.5"
        width="18"
        height="20"
        rx="5.5"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
      />
      <line
        x1="13.8"
        y1="16.2"
        x2="6.2"
        y2="16.2"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        strokeLinecap="round"
      />
      <line
        x1="13.8"
        y1="12.2"
        x2="6.2"
        y2="12.2"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        strokeLinecap="round"
      />
      <line
        x1="9.8"
        y1="8.2"
        x2="6.2"
        y2="8.2"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        strokeLinecap="round"
      />
    </SVGIcon>
  );
};

export default RoundEdgeocument;
