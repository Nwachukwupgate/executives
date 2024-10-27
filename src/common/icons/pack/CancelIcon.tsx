import SVGIcon, { SVGIconProps } from "../SVGIcon";

type CancelIconProps = Partial<SVGIconProps>;

const CancelIcon: React.FC<CancelIconProps> = ({ ...props }) => {
  return (
    <SVGIcon width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M7 5.58574L11.95 0.635742L13.364 2.04974L8.414 6.99974L13.364 11.9497L11.95 13.3637L7 8.41374L2.05 13.3637L0.636002 11.9497L5.586 6.99974L0.636002 2.04974L2.05 0.635742L7 5.58574Z"
        fill="#595959"
      />
    </SVGIcon>
  );
};

export default CancelIcon;
