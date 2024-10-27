import SVGIcon, { SVGIconProps } from "../SVGIcon";

type PlayButtonBlueProps = Partial<SVGIconProps>;

const PlayButtonBlue: React.FC<PlayButtonBlueProps> = ({ ...props }) => {
  return (
    <SVGIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM7.25 10.25C7.25 10.6625 6.9125 11 6.5 11C6.0875 11 5.75 10.6625 5.75 10.25V5.75C5.75 5.3375 6.0875 5 6.5 5C6.9125 5 7.25 5.3375 7.25 5.75V10.25ZM11.015 8.585L9.215 10.025C9.10486 10.1128 8.97218 10.1677 8.83222 10.1835C8.69226 10.1992 8.55069 10.1752 8.42379 10.1141C8.29689 10.053 8.1898 9.95729 8.11483 9.83805C8.03987 9.71881 8.00007 9.58084 8 9.44V6.56C8 5.93 8.7275 5.585 9.215 5.975L11.015 7.415C11.39 7.715 11.39 8.285 11.015 8.585Z"
        fill={props.fill || "#008CDB"}
      />
    </SVGIcon>
  );
};

export default PlayButtonBlue;
