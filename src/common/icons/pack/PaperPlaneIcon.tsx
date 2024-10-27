import SVGIcon, { SVGIconProps } from "../SVGIcon";

type PaperPlaneIconProps = Partial<SVGIconProps>;

const PaperPlaneIcon: React.FC<PaperPlaneIconProps> = ({ ...props }) => {
  return (
    <SVGIcon width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M13.1762 2.26542C13.5002 1.36917 12.6317 0.500672 11.7354 0.825422L0.78166 4.78692C-0.11759 5.11242 -0.226341 6.33942 0.600909 6.81867L4.09741 8.84292L7.21966 5.72067C7.36111 5.58405 7.55056 5.50846 7.74721 5.51017C7.94386 5.51188 8.13197 5.59075 8.27102 5.72981C8.41008 5.86886 8.48896 6.05697 8.49066 6.25362C8.49237 6.45027 8.41678 6.63972 8.28016 6.78117L5.15791 9.90342L7.18291 13.3999C7.66141 14.2272 8.88841 14.1177 9.21391 13.2192L13.1762 2.26542Z"
        fill={props.fill ? props.fill : "white"}
      />
    </SVGIcon>
  );
};

export default PaperPlaneIcon;
