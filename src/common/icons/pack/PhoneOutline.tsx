import SVGIcon, { SVGIconProps } from "../SVGIcon";

type PhoneOutlineProps = Partial<SVGIconProps>;

const PhoneOutline: React.FC<PhoneOutlineProps> = ({ ...props }) => {
  return (
    <SVGIcon width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M5.16675 5.16699V0.166992H6.83341V5.16699H11.8334V6.83366H6.83341V11.8337H5.16675V6.83366H0.166748V5.16699H5.16675Z"
        fill={props.fill ? props.fill : "#FEFEFE"}
      />
      <path
        d="M1 3C1 1.89543 1.89543 1 3 1H6.27924C6.70967 1 7.09181 1.27543 7.22792 1.68377L8.72574 6.17721C8.88311 6.64932 8.66938 7.16531 8.22427 7.38787L5.96701 8.5165C7.06925 10.9612 9.03878 12.9308 11.4835 14.033L12.6121 11.7757C12.8347 11.3306 13.3507 11.1169 13.8228 11.2743L18.3162 12.7721C18.7246 12.9082 19 13.2903 19 13.7208V17C19 18.1046 18.1046 19 17 19H16C7.71573 19 1 12.2843 1 4V3Z"
        stroke={props.stroke ? props.stroke : "#F2F2F2"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default PhoneOutline;
