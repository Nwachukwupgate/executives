import SVGIcon, { SVGIconProps } from "../SVGIcon";

type HamburgerProps = Partial<SVGIconProps>;

const Hamburger: React.FC<HamburgerProps> = ({ ...props }) => {
  return (
    <SVGIcon width="24" height="20" viewBox="0 0 24 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.799805 1.9999C0.799805 1.57556 0.968376 1.16859 1.26843 0.868532C1.56849 0.568474 1.97546 0.399902 2.3998 0.399902H21.5998C22.0242 0.399902 22.4311 0.568474 22.7312 0.868532C23.0312 1.16859 23.1998 1.57556 23.1998 1.9999C23.1998 2.42425 23.0312 2.83121 22.7312 3.13127C22.4311 3.43133 22.0242 3.5999 21.5998 3.5999H2.3998C1.97546 3.5999 1.56849 3.43133 1.26843 3.13127C0.968376 2.83121 0.799805 2.42425 0.799805 1.9999ZM0.799805 9.9999C0.799805 9.57556 0.968376 9.16859 1.26843 8.86853C1.56849 8.56847 1.97546 8.3999 2.3998 8.3999H21.5998C22.0242 8.3999 22.4311 8.56847 22.7312 8.86853C23.0312 9.16859 23.1998 9.57556 23.1998 9.9999C23.1998 10.4242 23.0312 10.8312 22.7312 11.1313C22.4311 11.4313 22.0242 11.5999 21.5998 11.5999H2.3998C1.97546 11.5999 1.56849 11.4313 1.26843 11.1313C0.968376 10.8312 0.799805 10.4242 0.799805 9.9999ZM0.799805 17.9999C0.799805 17.5756 0.968376 17.1686 1.26843 16.8685C1.56849 16.5685 1.97546 16.3999 2.3998 16.3999H21.5998C22.0242 16.3999 22.4311 16.5685 22.7312 16.8685C23.0312 17.1686 23.1998 17.5756 23.1998 17.9999C23.1998 18.4242 23.0312 18.8312 22.7312 19.1313C22.4311 19.4313 22.0242 19.5999 21.5998 19.5999H2.3998C1.97546 19.5999 1.56849 19.4313 1.26843 19.1313C0.968376 18.8312 0.799805 18.4242 0.799805 17.9999Z"
        fill={props.fill ? props.fill : "#008CDB"}
      />
    </SVGIcon>
  );
};

export default Hamburger;
