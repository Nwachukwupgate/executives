import SVGIcon, { SVGIconProps } from "../SVGIcon";

type ReportOutlineProps = Partial<SVGIconProps>;
const ReportOutline: React.FC<ReportOutlineProps> = ({ ...props }) => {
  return (
    <SVGIcon width="21" height="23" viewBox="0 0 21 23" fill="none" {...props}>
      <path
        d="M9.73529 1.5V1.5C9.73529 4.30892 9.73529 5.71339 9.06117 6.72228C8.76934 7.15904 8.39434 7.53404 7.95758 7.82588C6.94868 8.5 5.54422 8.5 2.73529 8.5L1.5 8.5"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
      />
      <path
        d="M6.8484 3.05503L4.23074 5.12748L4.23074 5.12748C3.0407 6.06967 2.44568 6.54076 2.07055 7.16561C1.94678 7.37177 1.84186 7.58868 1.75705 7.81369C1.5 8.49566 1.5 9.25459 1.5 10.7725V14.3C1.5 17.2998 1.5 18.7997 2.26393 19.8511C2.51065 20.1907 2.80928 20.4893 3.14886 20.7361C4.20032 21.5 5.70021 21.5 8.7 21.5H12.3C15.2998 21.5 16.7997 21.5 17.8511 20.7361C18.1907 20.4893 18.4894 20.1907 18.7361 19.8511C19.5 18.7997 19.5 17.2998 19.5 14.3V8.7C19.5 5.70021 19.5 4.20032 18.7361 3.14886C18.4894 2.80928 18.1907 2.51065 17.8511 2.26393C16.7997 1.5 15.2998 1.5 12.3 1.5H11.3177C10.2161 1.5 9.66529 1.5 9.14554 1.64265C8.97327 1.68994 8.80435 1.74871 8.63993 1.81857C8.14389 2.02935 7.71206 2.37124 6.8484 3.05502L6.8484 3.05503Z"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
      />
      <path
        d="M6.5 17.5V15.5"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        stroke-linecap="round"
      />
      <path
        d="M10.5 17.5V11.5"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        stroke-linecap="round"
      />
      <path
        d="M14.5 17.5V13.5"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        stroke-linecap="round"
      />
    </SVGIcon>
  );
};

export default ReportOutline;
