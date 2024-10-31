import SVGIcon, { SVGIconProps } from "../SVGIcon";

type ThreeUsersProps = Partial<SVGIconProps>;
const ThreeUsers: React.FC<ThreeUsersProps> = ({ ...props }) => {
  return (
    <SVGIcon width="23" height="20" viewBox="0 0 23 20" fill="none" {...props}>
      <path
        d="M5.27215 14.6899C5.30843 14.182 5.32656 13.9281 5.36619 13.7491C5.61712 12.6151 6.47957 11.8733 7.63837 11.7949C7.82136 11.7825 8.10682 11.8051 8.67775 11.8502C9.52326 11.9171 10.4433 11.9667 11.3122 11.9667C12.2806 11.9667 13.3621 11.9051 14.3467 11.8266C14.9049 11.7822 15.184 11.7599 15.3752 11.774C16.5091 11.8577 17.3755 12.6025 17.6286 13.7109C17.6713 13.8978 17.6895 14.1529 17.7259 14.6629V14.6629C17.767 15.2377 17.7875 15.525 17.7665 15.7635C17.6458 17.1323 16.6105 18.2441 15.2538 18.462C15.0175 18.5 14.7293 18.5 14.1531 18.5H11.3122H8.81986C8.26857 18.5 7.99293 18.5 7.76658 18.4652C6.39315 18.2543 5.3443 17.1279 5.23178 15.7429C5.21324 15.5147 5.23288 15.2397 5.27215 14.6899V14.6899Z"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
      />
      <path
        d="M8 5C8 3.067 9.567 1.5 11.5 1.5V1.5C13.433 1.5 15 3.067 15 5V5.5C15 7.15685 13.6569 8.5 12 8.5V8.5H11V8.5C9.34315 8.5 8 7.15685 8 5.5V5Z"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
      />
      <path
        d="M20 11.5C20 11.5 21.5 12.1176 21.5 14C21.5 15.8824 20 16.5 20 16.5"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 11.5C3 11.5 1.5 12 1.5 14C1.5 16 3 16.5 3 16.5"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 2C17.5 2 19.5 2.41455 19.5 4.5C19.5 6.58545 17.5 7 17.5 7"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 2C5.5 2 3.5 2.33423 3.5 4.5C3.5 6.66576 5.5 7 5.5 7"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVGIcon>
  );
};

export default ThreeUsers;
