import useWidthChange from "@/hooks/useWidthChange";
import { PropsWithChildren, ReactNode, useMemo } from "react";

type MansoryProps = PropsWithChildren;
const MansoryWrapper: React.FC<MansoryProps> = ({ children }) => {
  const currentWindowSize = useWidthChange();

  console.log(currentWindowSize);
  const columns = useMemo(() => {
    const nodes = Array.from(children as any).map((Val) => Val as ReactNode);
    let cols;
    if (currentWindowSize < 600) {
      cols = 1;
    } else if (currentWindowSize < 1000) {
      cols = 2;
    } else {
      cols = 3;
    }
    return createLayout(cols, nodes);
  }, [children, currentWindowSize]);

  return <div className="flex w-full relative gap-4">{columns}</div>;
};

export default MansoryWrapper;

function createLayout(columns: number, items: ReactNode[]) {
  return new Array(columns).fill(undefined).map((_, index) => (
    <div key={`column-{${index}}`} className="flex-1 flex flex-col gap-4">
      {items.filter((_, idx) => idx % columns === index)}
    </div>
  ));
}
