import SVGIcon, { SVGIconProps } from "../SVGIcon";

type DoorLockProps = Partial<SVGIconProps>;

const DoorLock: React.FC<DoorLockProps> = ({ ...props }) => {
  return (
    <SVGIcon width="26" height="29" viewBox="0 0 26 29" fill="none" {...props}>
      <path
        d="M0.765625 28.0983H24.7656M2.09896 28.0983V6.76497C2.09896 2.35164 3.15229 1.43164 8.19363 1.43164H17.3376C22.379 1.43164 23.4323 2.35164 23.4323 6.76497V28.0983"
        stroke={props.stroke || "#008CDB"}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3256 14.4432V11.9032C15.3256 10.5405 14.179 9.43652 12.7656 9.43652C11.3523 9.43652 10.2056 10.5405 10.2056 11.9032V14.4432M16.7656 17.5432C16.7656 19.6912 14.9603 21.4365 12.7656 21.4365C10.571 21.4365 8.76562 19.6912 8.76562 17.5432C8.76562 15.2632 10.571 13.5299 12.7656 13.5299C14.9603 13.5299 16.7656 15.2632 16.7656 17.5432Z"
        stroke={props.stroke || "#008CDB"}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default DoorLock;
