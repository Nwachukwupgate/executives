import { PropsWithChildren } from "react";
import PageHeaderText from "../text/PageHeader";
import CenterOnLgScreen from "./CenterLgScreen";

type props = {
  headerText: string;
  shortText?: string;
  id: string;
} & PropsWithChildren;

const PageHeader: React.FC<props> = ({
  headerText,
  children,
  id,
  shortText,
}) => {
  return (
    <div className="bg-white px-4">
      <CenterOnLgScreen>
        <PageHeaderText headerText={headerText} id={id} shortText={shortText} />
        {children && <div className="ml-auto">{children}</div>}
      </CenterOnLgScreen>
    </div>
  );
};

export default PageHeader;
