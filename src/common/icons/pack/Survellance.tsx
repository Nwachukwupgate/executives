import SVGIcon, { SVGIconProps } from "../SVGIcon";

type SurveillanceProps = Partial<SVGIconProps>;

const Surveillance: React.FC<SurveillanceProps> = ({ ...props }) => {
  return (
    <SVGIcon width="19" height="19" viewBox="0 0 19 19" fill="none" {...props}>
      <path
        d="M7.62725 10.3485V14.37H2.375M16.4825 8.45062L15.0339 8.0625L13.5328 10.7662L15.7062 11.3486L16.4825 8.45062Z"
        stroke={props.stroke || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0339 8.06262L13.5328 10.7664L12.8795 11.756L2.375 8.94124L3.73363 3.87012L15.6875 7.07299L15.0339 8.06262Z"
        fill={props.fill || "white"}
        stroke={props.stroke || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default Surveillance;
