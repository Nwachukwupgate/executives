import SVGIcon, { SVGIconProps } from "../SVGIcon";

type EditSquaredProps = Partial<SVGIconProps>;

const EditSquared: React.FC<EditSquaredProps> = ({ ...props }) => {
  return (
    <SVGIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M11.1713 2.00039L9.838 3.33372H3.33333V12.6671H12.6667V6.16239L14 4.82906V13.3337C14 13.5105 13.9298 13.6801 13.8047 13.8051C13.6797 13.9302 13.5101 14.0004 13.3333 14.0004H2.66667C2.48986 14.0004 2.32029 13.9302 2.19526 13.8051C2.07024 13.6801 2 13.5105 2 13.3337V2.66706C2 2.49025 2.07024 2.32068 2.19526 2.19565C2.32029 2.07063 2.48986 2.00039 2.66667 2.00039H11.1713ZM13.6567 1.40039L14.6 2.34439L8.472 8.47239L7.53067 8.47439L7.52933 7.52972L13.6567 1.40039Z"
        fill={props.fill ? props.fill : "#595959"}
      />
    </SVGIcon>
  );
};

export default EditSquared;
