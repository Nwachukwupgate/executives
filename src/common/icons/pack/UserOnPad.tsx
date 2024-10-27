import SVGIcon, { SVGIconProps } from "../SVGIcon";

type UserOnPadProps = Partial<SVGIconProps>;
const UserOnPad: React.FC<UserOnPadProps> = ({ ...props }) => {
  return (
    <SVGIcon width="33" height="33" viewBox="0 0 33 33" fill="none" {...props}>
      <path
        d="M7.39569 23.4316C5.49969 26.1063 5.02236 27.5183 5.55569 28.653C5.60903 28.765 5.67125 28.873 5.74236 28.977C6.50103 30.0983 8.47169 30.0983 12.4117 30.0983H19.6224C23.5624 30.0983 25.5317 30.0983 26.2944 28.977C26.3655 28.8721 26.4272 28.7641 26.4797 28.653C27.013 27.5196 26.5357 26.1063 24.6397 23.4316"
        stroke={props.stroke || "#008CDB"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3486 10.0986H14.6872C10.8606 10.0986 8.28057 14.192 9.78857 17.8693C9.88573 18.1156 10.054 18.3274 10.272 18.4777C10.49 18.6281 10.7478 18.7101 11.0126 18.7133H11.9499C12.2659 18.7133 12.5419 18.94 12.6179 19.26L13.8246 24.308C14.0766 25.3613 14.9806 26.0986 16.0179 26.0986C17.0552 26.0986 17.9592 25.36 18.2112 24.308L19.4179 19.26C19.451 19.107 19.5349 18.9697 19.6559 18.8704C19.777 18.7712 19.9281 18.7158 20.0846 18.7133H21.0232C21.288 18.7101 21.5458 18.6281 21.7638 18.4777C21.9818 18.3274 22.1501 18.1156 22.2472 17.8693C23.7566 14.1906 21.1752 10.0986 17.3486 10.0986Z"
        stroke={props.stroke || "#008CDB"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3542 6.76497C19.3542 7.64903 19.003 8.49687 18.3779 9.122C17.7527 9.74712 16.9049 10.0983 16.0208 10.0983C15.1368 10.0983 14.2889 9.74712 13.6638 9.122C13.0387 8.49687 12.6875 7.64903 12.6875 6.76497C12.6875 5.88092 13.0387 5.03307 13.6638 4.40795C14.2889 3.78283 15.1368 3.43164 16.0208 3.43164C16.9049 3.43164 17.7527 3.78283 18.3779 4.40795C19.003 5.03307 19.3542 5.88092 19.3542 6.76497Z"
        stroke={props.stroke || "#008CDB"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default UserOnPad;
