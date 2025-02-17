import SVGIcon, { SVGIconProps } from "../SVGIcon";

type BuildingOutlineProps = Partial<SVGIconProps>;

const BuildingOutline: React.FC<BuildingOutlineProps> = ({ ...props }) => {
  return (
    <SVGIcon width="20" height="18" viewBox="0 0 20 18" fill="none" {...props}>
      <path
        d="M20 18H0V16H1V1C1 0.734784 1.10536 0.48043 1.29289 0.292893C1.48043 0.105357 1.73478 0 2 0H16C16.2652 0 16.5196 0.105357 16.7071 0.292893C16.8946 0.48043 17 0.734784 17 1V6H19V16H20V18ZM15 16H17V8H11V16H13V10H15V16ZM15 6V2H3V16H9V6H15ZM5 8H7V10H5V8ZM5 12H7V14H5V12ZM5 4H7V6H5V4Z"
        fill={props.fill ? props.fill : "#595959"}
      />
    </SVGIcon>
  );
};

export default BuildingOutline;
