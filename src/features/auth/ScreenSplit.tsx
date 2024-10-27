import { PropsWithChildren } from "react";

type ScreenSplitProps = {
  className?: string;
  src?: string;
} & PropsWithChildren;
const ScreenSplit: React.FC<ScreenSplitProps> = ({
  children,
  src,
  className,
}) => {
  return (
    <div className={`flex ${className}`}>
      <div className="hidden xl:block xl:basis-[60%] xlc:basis-[52%] relative">
        <div className="bg-[#0a334752] absolute top-0 left-0 w-full h-full">
          {" "}
        </div>
        <img src={src} className="w-full h-[100svh]" alt="image" />
      </div>
      <div className="grow">{children}</div>
    </div>
  );
};

export default ScreenSplit;
