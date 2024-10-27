import SVGIcon, { SVGIconProps } from "../SVGIcon";

type StockStatFillProps = Partial<SVGIconProps>;

const StockStatFill: React.FC<StockStatFillProps> = ({ ...props }) => {
  return (
    <SVGIcon width="21" height="18" viewBox="0 0 21 18" fill="none" {...props}>
      <path
        d="M0.5 16.0303L4.25 12.2803V17.4951H0.5V16.0303ZM5.5 11.0303L9.25 7.28027V17.4951H5.5V11.0303ZM18 6.24512H19.25V17.4951H15.5V8.53027L18 6.24512ZM13.625 10.4053L14.25 9.78027V17.4951H10.5V7.28027L13.625 10.4053ZM20.5 -0.00488281V4.99512H19.25V2.13379L13.625 7.74902L9.875 3.99902L0.5 13.3838V11.6064L9.875 2.24121L13.625 5.99121L18.3613 1.24512H15.5V-0.00488281H20.5Z"
        fill={props.fill ? props.fill : "#E6F4FB"}
      />
    </SVGIcon>
  );
};

export default StockStatFill;
