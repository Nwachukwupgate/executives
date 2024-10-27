import { Box } from "@mui/material";

const CenterOnLgScreen = ({
  className,
  element,
  children,
  ...props
}: Partial<
  Readonly<{
    element?: any;
    props: any;
    className: string;
    children: React.ReactNode;
  }>
>) => {
  return (
    <Box
      component={element ? element : "div"}
      className={`lg:container lg:mx-auto lg:px-0 ${className}`}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CenterOnLgScreen;
