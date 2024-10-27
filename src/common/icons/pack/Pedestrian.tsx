import SVGIcon, { SVGIconProps } from "../SVGIcon";

type PedestrianProps = Partial<SVGIconProps>;

const Pedestrian: React.FC<PedestrianProps> = ({ ...props }) => {
  return (
    <SVGIcon width="18" height="19" viewBox="0 0 18 19" fill="none" {...props}>
      <path
        d="M6.70361 2.61201C6.70361 1.97815 7.2179 1.46387 7.85176 1.46387H15.8875C16.5213 1.46387 17.0356 1.97815 17.0356 2.61201V16.3872C17.0356 17.021 16.5213 17.5353 15.8875 17.5353H11.8696"
        stroke="#595959"
        strokeWidth="1.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.26074 8.35116H5.59817C5.93914 8.35123 6.26611 8.48674 6.50717 8.72787L9.7716 11.9936C10.0129 12.2343 10.3398 12.3693 10.6806 12.369H12.4433M8.42546 7.49102C8.42546 8.02399 8.63718 8.53513 9.01405 8.912C9.39091 9.28887 9.90206 9.50059 10.435 9.50059C10.968 9.50059 11.4791 9.28887 11.856 8.912C12.2329 8.53513 12.4446 8.02399 12.4446 7.49102C12.4446 6.95805 12.2329 6.4469 11.856 6.07004C11.4791 5.69317 10.968 5.48145 10.435 5.48145C9.90206 5.48145 9.39091 5.69317 9.01405 6.07004C8.63718 6.4469 8.42546 6.95805 8.42546 7.49102Z"
        stroke="#595959"
        strokeWidth="1.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.85193 10.0732L4.78421 13.141C4.54315 13.3821 4.21618 13.5176 3.87521 13.5177H0.964355"
        stroke="#595959"
        strokeWidth="1.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.55566 12.3691L7.47524 14.2887C7.71637 14.5298 7.85188 14.8567 7.85195 15.1977V17.5351"
        stroke="#595959"
        strokeWidth="1.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default Pedestrian;
