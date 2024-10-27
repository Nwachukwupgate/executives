import SVGIcon, { SVGIconProps } from "../SVGIcon";

type InsideFacilityProps = Partial<SVGIconProps>;

const InsideFacility: React.FC<InsideFacilityProps> = ({ ...props }) => {
  return (
    <SVGIcon width="19" height="19" viewBox="0 0 19 19" fill="none" {...props}>
    <path d="M4.51562 17.2646V6.76465C4.51562 4.64365 4.51563 3.5824 5.17488 2.9239C5.83338 2.26465 6.89462 2.26465 9.01562 2.26465H10.5156C12.6366 2.26465 13.6979 2.26465 14.3564 2.9239C15.0156 3.5824 15.0156 4.64365 15.0156 6.76465V17.2646H4.51562Z"  stroke={props.stroke ? props.stroke : "#222222"} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.01562 17.2646H16.5156M9.76562 4.51465V10.5146M12.7656 7.51465H6.76562M6.77163 13.5146H6.76488M6.76562 9.01465V6.01465C6.76562 4.7734 7.02438 4.51465 8.26562 4.51465H11.2656C12.5069 4.51465 12.7656 4.7734 12.7656 6.01465V9.01465C12.7656 10.2559 12.5069 10.5146 11.2656 10.5146H8.26562C7.02438 10.5146 6.76562 10.2559 6.76562 9.01465Z"  stroke={props.stroke ? props.stroke : "#222222"} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    </SVGIcon>
  );
};

export default InsideFacility;
