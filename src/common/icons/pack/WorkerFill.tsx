import SVGIcon, { SVGIconProps } from "../SVGIcon";

type WorkerFillProps = Partial<SVGIconProps>;

const WorkerFill: React.FC<WorkerFillProps> = ({ ...props }) => {
  return (
    <SVGIcon width="12" height="15" viewBox="0 0 12 15" fill="none" {...props}>
      <path
        d="M5.33332 9.37402V13.3327H6.66666V9.37402C9.29732 9.70202 11.3333 11.946 11.3333 14.666H0.666656C0.666679 13.3669 1.14078 12.1125 1.99999 11.1382C2.8592 10.1638 4.04446 9.53654 5.33332 9.37402ZM5.99999 8.66602C3.78999 8.66602 1.99999 6.87602 1.99999 4.66602C1.99999 2.45602 3.78999 0.666016 5.99999 0.666016C8.20999 0.666016 9.99999 2.45602 9.99999 4.66602C9.99999 6.87602 8.20999 8.66602 5.99999 8.66602Z"
        fill={props.fill ? props.fill : "#595959"}
      />
    </SVGIcon>
  );
};

export default WorkerFill;
