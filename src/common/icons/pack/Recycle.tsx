import SVGIcon, { SVGIconProps } from "../SVGIcon";

type RecycleProps = Partial<SVGIconProps>;
const Recycle: React.FC<RecycleProps> = ({ ...props }) => {
  return (
    <SVGIcon width="14" height="15" viewBox="0 0 14 15" fill="none" {...props}>
      <path
        d="M12.8125 3.0625H3.8125C3.01685 3.0625 2.25379 3.37857 1.69118 3.94118C1.12857 4.50379 0.8125 5.26685 0.8125 6.0625V7.5625M12.8125 6.8125V8.3125C12.8125 9.10815 12.4964 9.87121 11.9338 10.4338C11.3712 10.9964 10.6081 11.3125 9.8125 11.3125H0.8125"
        stroke={props.stroke ? props.stroke : "white"}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5625 5.3125L12.8125 3.0625L10.5625 0.8125M3.0625 9.0625L0.8125 11.3125L3.0625 13.5625"
        stroke={props.stroke ? props.stroke : "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default Recycle;
