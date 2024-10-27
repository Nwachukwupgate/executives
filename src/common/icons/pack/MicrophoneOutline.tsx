import SVGIcon, { SVGIconProps } from "../SVGIcon";

type MicrophoneOutlineProps = Partial<SVGIconProps>;

const MicrophoneOutline: React.FC<MicrophoneOutlineProps> = ({ ...props }) => {
  return (
    <SVGIcon width="16" height="22" viewBox="0 0 16 22" fill="none" {...props}>
      <path
        d="M15 10C15 13.866 11.866 17 8 17M8 17C4.13401 17 1 13.866 1 10M8 17V21M8 21H4M8 21H12M8 13C6.34315 13 5 11.6569 5 10V4C5 2.34315 6.34315 1 8 1C9.65685 1 11 2.34315 11 4V10C11 11.6569 9.65685 13 8 13Z"
        stroke={props.stroke ? props.stroke : "#111827"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default MicrophoneOutline;
