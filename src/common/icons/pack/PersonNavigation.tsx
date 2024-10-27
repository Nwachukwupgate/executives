import SVGIcon, { SVGIconProps } from "../SVGIcon";

type PersonNavigationProps = Partial<SVGIconProps>;

const PersonNavigation: React.FC<PersonNavigationProps> = ({ ...props }) => {
  return (
    <SVGIcon width="14" height="18" viewBox="0 0 14 18" fill="none" {...props}>
      <path
        d="M6.5 9.99512V15.9951H0.5C0.5 14.4038 1.13214 12.8777 2.25736 11.7525C3.38258 10.6273 4.9087 9.99512 6.5 9.99512ZM6.5 9.24512C4.01375 9.24512 2 7.23137 2 4.74512C2 2.25887 4.01375 0.245117 6.5 0.245117C8.98625 0.245117 11 2.25887 11 4.74512C11 7.23137 8.98625 9.24512 6.5 9.24512ZM13.121 15.1161L11 17.2379L8.879 15.1161C8.45935 14.6966 8.17354 14.162 8.05771 13.5801C7.94188 12.9981 8.00124 12.3949 8.22827 11.8466C8.45531 11.2984 8.83983 10.8298 9.33319 10.5001C9.82656 10.1704 10.4066 9.99448 11 9.99448C11.5934 9.99448 12.1734 10.1704 12.6668 10.5001C13.1602 10.8298 13.5447 11.2984 13.7717 11.8466C13.9988 12.3949 14.0581 12.9981 13.9423 13.5801C13.8265 14.162 13.5406 14.6966 13.121 15.1161ZM11 12.2451C10.8011 12.2451 10.6103 12.3241 10.4697 12.4648C10.329 12.6054 10.25 12.7962 10.25 12.9951C10.25 13.194 10.329 13.3848 10.4697 13.5254C10.6103 13.6661 10.8011 13.7451 11 13.7451C11.1989 13.7451 11.3897 13.6661 11.5303 13.5254C11.671 13.3848 11.75 13.194 11.75 12.9951C11.75 12.7962 11.671 12.6054 11.5303 12.4648C11.3897 12.3241 11.1989 12.2451 11 12.2451Z"
        fill={props.fill || "white"}
      />
    </SVGIcon>
  );
};

export default PersonNavigation;
