import SVGIcon, { SVGIconProps } from "../SVGIcon";

type AngleLeftProps = Partial<SVGIconProps>;

const AngleLeft: React.FC<AngleLeftProps> = ({ ...props }) => {
  return (
    <SVGIcon width="6" height="10" viewBox="0 0 6 10" fill="none" {...props}>
      <path
        d="M2.21859 5.00048L5.51858 8.30048L4.57592 9.24315L0.333252 5.00048L4.57592 0.757812L5.51858 1.70048L2.21859 5.00048Z"
        fill={props.fill ? props.fill : "#595959"}
      />
    </SVGIcon>
  );
};

export default AngleLeft;
