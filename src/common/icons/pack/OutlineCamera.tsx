import SVGIcon, { SVGIconProps } from "../SVGIcon";

type OutlineCameraProps = Partial<SVGIconProps>;
const OutlineCamera: React.FC<OutlineCameraProps> = ({ ...props }) => {
  return (
    <SVGIcon width="20" height="19" viewBox="0 0 20 19" fill="none" {...props}>
      <path
        d="M1 7.18785C1 4.80287 2.93341 2.86946 5.3184 2.86946V2.86946C5.75637 2.86946 6.17799 2.70309 6.49794 2.40402L6.8 2.12167C7.13007 1.81315 7.29511 1.65889 7.47502 1.53421C7.85506 1.27084 8.29083 1.09889 8.74831 1.03177C8.96489 1 9.19079 1 9.64261 1H10H10.3574C10.8092 1 11.0351 1 11.2517 1.03177C11.7092 1.09889 12.1449 1.27084 12.525 1.53421C12.7049 1.65889 12.8699 1.81315 13.2 2.12168L13.5021 2.40402C13.822 2.70309 14.2436 2.86946 14.6816 2.86946V2.86946C17.0666 2.86946 19 4.80287 19 7.18785V10.9975C19 13.3345 19 14.503 18.5268 15.3873C18.1541 16.0837 17.5837 16.6541 16.8873 17.0268C16.003 17.5 14.8345 17.5 12.4975 17.5H7.50246C5.1655 17.5 3.99702 17.5 3.11271 17.0268C2.41634 16.6541 1.84588 16.0837 1.47323 15.3873C1 14.503 1 13.3345 1 10.9975V7.18785Z"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
      />
      <circle
        cx="10"
        cy="11"
        r="3"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
      />
      <path
        d="M14 6H15"
        stroke={props.stroke || "#9D8D79"}
        strokeWidth={props.strokeWidth || "1.4"}
        strokeLinecap="round"
      />
    </SVGIcon>
  );
};

export default OutlineCamera;
