import SVGIcon, { SVGIconProps } from "../SVGIcon";

type ManInDocumentProps = Partial<SVGIconProps>;

const ManInDocument: React.FC<ManInDocumentProps> = ({ ...props }) => {
  return (
    <SVGIcon width="14" height="16" viewBox="0 0 14 16" fill="none" {...props}>
      <path
        d="M13 4.25V14.75C13 14.9489 12.921 15.1397 12.7803 15.2803C12.6397 15.421 12.4489 15.5 12.25 15.5H1.75C1.55109 15.5 1.36032 15.421 1.21967 15.2803C1.07902 15.1397 1 14.9489 1 14.75V1.25C1 1.05109 1.07902 0.860322 1.21967 0.71967C1.36032 0.579018 1.55109 0.5 1.75 0.5H9.25M13 4.25H9.25V0.5M13 4.25L9.25 0.5"
        stroke={props.stroke ? props.stroke : "#595959"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9.5C7.82843 9.5 8.5 8.82843 8.5 8C8.5 7.17157 7.82843 6.5 7 6.5C6.17157 6.5 5.5 7.17157 5.5 8C5.5 8.82843 6.17157 9.5 7 9.5Z"
        stroke={props.stroke ? props.stroke : "#595959"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C10 11.7044 9.68393 10.9413 9.12132 10.3787C8.55871 9.81607 7.79565 9.5 7 9.5C6.20435 9.5 5.44129 9.81607 4.87868 10.3787C4.31607 10.9413 4 11.7044 4 12.5"
        stroke={props.stroke ? props.stroke : "#595959"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
};

export default ManInDocument;
