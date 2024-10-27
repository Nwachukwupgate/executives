import SVGIcon, { SVGIconProps } from "../SVGIcon";

type AngleRightProps = Partial<SVGIconProps>;

const AngleRight: React.FC<AngleRightProps> = ({ ...props }) => {
  return (
    <SVGIcon width="7" height="11" viewBox="0 0 7 11" fill="none" {...props}>
      <path
        d="M1.25 0.996094L5.75 5.49609L1.25 9.99609"
        stroke={props.stroke ? props.stroke : "#999999"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default AngleRight;
