import SVGIcon, { SVGIconProps } from "../SVGIcon";

type FilterIconProps = Partial<SVGIconProps>;

const FilterIcon: React.FC<FilterIconProps> = ({ ...props }) => {
  return (
    <SVGIcon width="16" height="10" viewBox="0 0 16 10" fill="none" {...props}>
      <path
        d="M6.33333 10H9.66667V8.33333H6.33333V10ZM0.5 0V1.66667H15.5V0H0.5ZM3 5.83333H13V4.16667H3V5.83333Z"
        fill={props.fill ? props.fill : "#595959"}
      />
    </SVGIcon>
  );
};

export default FilterIcon;
