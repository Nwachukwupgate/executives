import SVGIcon, { SVGIconProps } from "../SVGIcon";

type ExportFileProps = Partial<SVGIconProps>;

const ExportFile: React.FC<ExportFileProps> = ({ ...props }) => {
  return (
    <SVGIcon width="14" height="18" viewBox="0 0 14 18" fill="none" {...props}>
      <path
        d="M8.66536 0.666992H1.9987C1.08203 0.666992 0.332031 1.41699 0.332031 2.33366V15.667C0.332031 16.5837 1.08203 17.3337 1.9987 17.3337H11.9987C12.9154 17.3337 13.6654 16.5837 13.6654 15.667V5.66699L8.66536 0.666992ZM11.9987 15.667H1.9987V2.33366H7.83203V6.50033H11.9987V15.667ZM10.332 8.16699V14.0837L8.58203 12.3337L6.2487 14.667L3.91536 12.3337L6.2487 10.0003L4.41536 8.16699H10.332Z"
        fill={props.fill || "white"}
      />
    </SVGIcon>
  );
};

export default ExportFile;
