import SVGIcon, { SVGIconProps } from "../SVGIcon";

type HousePlusProps = Partial<SVGIconProps>;

const HousePlus: React.FC<HousePlusProps> = ({ ...props }) => {
  return (
    <SVGIcon width="16" height="15" viewBox="0 0 16 15" fill="none" {...props}>
      <path
        d="M11.75 8.5H13.25V10.75H15.5V12.25H13.25V14.5H11.75V12.25H9.5V10.75H11.75V8.5ZM2.75 13V7H0.5L8 0.25L15.5 7H11.75V5.6425L8 2.2675L4.25 5.6425V11.5H8C8 12.025 8.09 12.5275 8.255 13H2.75Z"
        fill={props.fill ? props.fill : "#595959"}
      />
    </SVGIcon>
  );
};

export default HousePlus;
