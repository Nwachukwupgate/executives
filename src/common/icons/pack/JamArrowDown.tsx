import SVGIcon, { SVGIconProps } from "../SVGIcon";

type JamArrowDownProps = Partial<SVGIconProps>;

const JamArrowDown: React.FC<JamArrowDownProps> = ({ ...props }) => {
  return (
    <SVGIcon viewBox="-5 -4.5 24 24" width="28" fill="currentColor" {...props}>
      <path d="M8 11.243l3.95-3.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a.997.997 0 0 1-1.414 0L.636 8.707A1 1 0 1 1 2.05 7.293L6 11.243V1.657a1 1 0 1 1 2 0v9.586z"></path>
    </SVGIcon>
  );
};

export default JamArrowDown;
