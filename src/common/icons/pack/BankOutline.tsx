import SVGIcon, { SVGIconProps } from "../SVGIcon";

type BankOutlineProps = Partial<SVGIconProps>;

const BankOutline: React.FC<BankOutlineProps> = ({ ...props }) => {
  return (
    <SVGIcon width="16" height="17" viewBox="0 0 16 17" fill="none" {...props}>
      <path
        d="M3.9165 7.83008H2.24984V13.6634H3.9165V7.83008ZM8.9165 7.83008H7.24984V13.6634H8.9165V7.83008ZM15.9998 15.3301H0.166504V16.9967H15.9998V15.3301ZM13.9165 7.83008H12.2498V13.6634H13.9165V7.83008ZM8.08317 2.21341L12.4248 4.49674H3.7415L8.08317 2.21341ZM8.08317 0.330078L0.166504 4.49674V6.16341H15.9998V4.49674L8.08317 0.330078Z"
        fill={props.fill ? props.fill : "#fff"}
      />
    </SVGIcon>
  );
};

export default BankOutline;
