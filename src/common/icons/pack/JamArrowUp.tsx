import SVGIcon, { SVGIconProps } from "../SVGIcon";

type JamArrowUpProps = Partial<SVGIconProps>;

const JamArrowUp: React.FC<JamArrowUpProps> = ({ ...props }) => {
  return (
    <SVGIcon viewBox="-5 -4.5 24 24" width="28" fill="currentColor" {...props}>
      <path d="M6 4.071l-3.95 3.95A1 1 0 0 1 .636 6.607L6.293.95a.997.997 0 0 1 1.414 0l5.657 5.657A1 1 0 0 1 11.95 8.02L8 4.07v9.586a1 1 0 1 1-2 0V4.07z"></path>
    </SVGIcon>
  );
};

export default JamArrowUp;
