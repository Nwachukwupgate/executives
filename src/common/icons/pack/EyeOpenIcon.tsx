import SVGIcon, { SVGIconProps } from "../SVGIcon";

type EyeOpenProps = Partial<SVGIconProps>;

const EyeOpen: React.FC<EyeOpenProps> = ({ ...props }) => {
  return (
    <SVGIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M10.5 8C10.5 9.38071 9.38071 10.5 8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5C9.38071 5.5 10.5 6.61929 10.5 8Z"
        fill={props.fill ? props.fill : "#292D32"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8C0 8 3 2.5 8 2.5C13 2.5 16 8 16 8C16 8 13 13.5 8 13.5C3 13.5 0 8 0 8ZM8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5Z"
        fill={props.fill ? props.fill : "#292D32"}
      />
    </SVGIcon>
  );
};

export default EyeOpen;
