import SVGIcon, { SVGIconProps } from "../SVGIcon";

type PlusIconProps = Partial<SVGIconProps>;

const PlusIcon: React.FC<PlusIconProps> = ({ ...props }) => {
  return (
    <SVGIcon width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M5.16675 5.16699V0.166992H6.83341V5.16699H11.8334V6.83366H6.83341V11.8337H5.16675V6.83366H0.166748V5.16699H5.16675Z"
        fill={props.fill ? props.fill : "#FEFEFE"}
      />
    </SVGIcon>
  );
};

export default PlusIcon;
