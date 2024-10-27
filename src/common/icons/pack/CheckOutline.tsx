import SVGIcon, { SVGIconProps } from "../SVGIcon";

type CheckOutlineProps = Partial<SVGIconProps>;

const CheckOutline: React.FC<CheckOutlineProps> = ({ ...props }) => {
  return (
    <SVGIcon width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M0.765625 12.7646C0.765625 6.13724 6.13821 0.764648 12.7656 0.764648C19.3931 0.764648 24.7656 6.13724 24.7656 12.7646C24.7656 19.3921 19.3931 24.7646 12.7656 24.7646C6.13821 24.7646 0.765625 19.3921 0.765625 12.7646Z"
        stroke={props.stroke || "#008CDB"}
        strokeWidth={props.strokeWidth || "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.43359 12.7643L11.4336 16.7643L18.1003 10.0977"
        stroke={props.stroke || "#008CDB"}
        strokeWidth={props.strokeWidth || "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default CheckOutline;
