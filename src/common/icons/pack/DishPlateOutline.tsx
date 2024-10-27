import SVGIcon, { SVGIconProps } from "../SVGIcon";

type DishPlateOutlineProps = Partial<SVGIconProps>;

const DishPlateOutline: React.FC<DishPlateOutlineProps> = ({ ...props }) => {
  return (
    <SVGIcon width="17" height="14" viewBox="0 0 17 14" fill="none" {...props}>
      <path
        d="M0.166504 13.3301V11.6634H16.8332V13.3301H0.166504ZM0.999837 10.8301V9.99675C0.999837 8.21897 1.54511 6.64952 2.63567 5.28841C3.72623 3.9273 5.12539 3.06619 6.83317 2.70508V2.49675C6.83317 2.03841 6.9965 1.64619 7.32317 1.32008C7.64984 0.993968 8.04206 0.830635 8.49984 0.83008C8.95761 0.829524 9.35011 0.992857 9.67734 1.32008C10.0046 1.6473 10.1676 2.03952 10.1665 2.49675V2.70508C11.8887 3.06619 13.2915 3.9273 14.3748 5.28841C15.4582 6.64952 15.9998 8.21897 15.9998 9.99675V10.8301H0.999837ZM2.70817 9.16341H14.2915C14.0971 7.71897 13.4512 6.52452 12.354 5.58008C11.2568 4.63564 9.97206 4.16341 8.49984 4.16341C7.02762 4.16341 5.7465 4.63564 4.6565 5.58008C3.5665 6.52452 2.91706 7.71897 2.70817 9.16341Z"
        fill={props.fill ? props.fill : "#fff"}
      />
    </SVGIcon>
  );
};

export default DishPlateOutline;
