import SVGIcon, { SVGIconProps } from "../SVGIcon";

type ArrowNorthEastProps = Partial<SVGIconProps>;

const ArrowNorthEast: React.FC<ArrowNorthEastProps> = ({ ...props }) => {
  return (
    <SVGIcon width="8" height="9" viewBox="0 0 8 9" fill="none" {...props}>
      <path
        d="M6.02624 2.95414L0.883037 8.09734L0.0380859 7.25239L5.1807 2.10918H0.648196V0.914062H7.22137V7.48723H6.02624V2.95414V2.95414Z"
        fill={props.fill ? props.fill : "#E6F4FB"}
      />
    </SVGIcon>
  );
};

export default ArrowNorthEast;
