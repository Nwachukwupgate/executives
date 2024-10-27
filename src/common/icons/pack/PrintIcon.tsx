import SVGIcon, { SVGIconProps } from "../SVGIcon";

type PrintIconProps = Partial<SVGIconProps>;

const PrintIcon: React.FC<PrintIconProps> = ({ ...props }) => {
  return (
    <SVGIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M3.5 5.5H12.5C13.0523 5.5 13.5 5.94772 13.5 6.5V10.5H2.5V6.5C2.5 5.94772 2.94772 5.5 3.5 5.5Z"
        stroke={props.stroke ? props.stroke : "#292D32"}
        strokeWidth="1"
      />
      <rect
        x="5.5"
        y="10.5"
        width="5"
        height="2"
        stroke={props.stroke ? props.stroke : "#292D32"}
        strokeWidth="1"
      />
      <rect
        x="4.5"
        y="2.5"
        width="7"
        height="2"
        stroke={props.stroke ? props.stroke : "#292D32"}
        strokeWidth="1"
      />
      <rect
        x="4.5"
        y="12.5"
        width="7"
        height="2"
        stroke={props.stroke ? props.stroke : "#292D32"}
        strokeWidth="1"
      />
      <path
        d="M12.5 3.5H3.5C2.67157 3.5 2 4.17157 2 5V9.5H14V5C14 4.17157 13.3284 3.5 12.5 3.5Z"
        stroke={props.stroke ? props.stroke : "#292D32"}
        strokeWidth="1"
      />
    </SVGIcon>
  );
};

export default PrintIcon;
