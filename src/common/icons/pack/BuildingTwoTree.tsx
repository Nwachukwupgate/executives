import SVGIcon, { SVGIconProps } from "../SVGIcon";

type BuildingTwoTreeProps = Partial<SVGIconProps>;

const BuildingTwoTree: React.FC<BuildingTwoTreeProps> = ({ ...props }) => {
  return (
    <SVGIcon width="29" height="29" viewBox="0 0 29 29" fill="none" {...props}>
      {/* <path
        d="M20 18H0V16H1V1C1 0.734784 1.10536 0.48043 1.29289 0.292893C1.48043 0.105357 1.73478 0 2 0H16C16.2652 0 16.5196 0.105357 16.7071 0.292893C16.8946 0.48043 17 0.734784 17 1V6H19V16H20V18ZM15 16H17V8H11V16H13V10H15V16ZM15 6V2H3V16H9V6H15ZM5 8H7V10H5V8ZM5 12H7V14H5V12ZM5 4H7V6H5V4Z"
        fill={props.fill ? props.fill : "#595959"}
      /> */}

      <path
        d="M25.8641 27.1546V8.42389C25.8641 7.00699 25.8641 6.29982 25.4563 5.70106C25.0498 5.10359 24.3001 4.71129 22.7993 3.92541L20.8894 2.92661C18.5357 1.69295 17.3575 1.07612 16.4503 1.45809C15.5406 1.84006 15.5406 2.95242 15.5406 5.17456V10.3789M27.1545 27.1546H1.3457M25.8641 9.08847H23.2832M25.8641 12.9598H23.2832M25.8641 16.8311H23.2832"
        stroke={props.stroke ? props.stroke : "#008CDB"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.93566"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6049 15.5407H14.8954M13.6049 19.412H14.8954M9.08838 15.5407C9.08838 13.1069 9.08838 11.8913 9.84458 11.1351C10.6008 10.3789 11.8164 10.3789 14.2501 10.3789C16.6839 10.3789 17.8995 10.3789 18.6557 11.1351C19.4119 11.8913 19.4119 13.1069 19.4119 15.5407V27.1546H9.08838V15.5407Z"
        stroke={props.stroke ? props.stroke : "#008CDB"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.93566"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.28136 19.4118C4.3504 19.4118 5.21703 18.2563 5.21703 16.8309C5.21703 15.4055 4.3504 14.25 3.28136 14.25C2.21233 14.25 1.3457 15.4055 1.3457 16.8309C1.3457 18.2563 2.21233 19.4118 3.28136 19.4118Z"
        stroke={props.stroke ? props.stroke : "#008CDB"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.93566"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.28125 19.4121V27.1548"
        stroke={props.stroke ? props.stroke : "#008CDB"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.93566"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default BuildingTwoTree;
