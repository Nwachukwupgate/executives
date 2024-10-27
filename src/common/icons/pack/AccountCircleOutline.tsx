import SVGIcon, { SVGIconProps } from "../SVGIcon";

type AccountCircleOutlineProps = Partial<SVGIconProps>;

const AccountCircleOutline: React.FC<AccountCircleOutlineProps> = ({
  ...props
}) => {
  return (
    <SVGIcon width="17" height="18" viewBox="0 0 17 18" fill="none" {...props}>
      <path
        d="M8.49984 17.3283C3.89734 17.3283 0.166504 13.5975 0.166504 8.99496C0.166504 4.39245 3.89734 0.661621 8.49984 0.661621C13.1023 0.661621 16.8332 4.39245 16.8332 8.99496C16.8332 13.5975 13.1023 17.3283 8.49984 17.3283ZM4.344 14.2083C5.52363 15.1514 6.98957 15.664 8.49984 15.6616C10.1415 15.6616 11.644 15.0683 12.8057 14.085C12.2629 13.5281 11.614 13.0857 10.8974 12.784C10.1807 12.4822 9.41078 12.3273 8.63317 12.3283C7.82699 12.3274 7.02942 12.494 6.29106 12.8176C5.55269 13.1413 4.88965 13.6148 4.344 14.2083ZM3.17984 13.0116C3.88022 12.2683 4.7254 11.6764 5.66329 11.2722C6.60118 10.8681 7.6119 10.6603 8.63317 10.6616C9.61788 10.6603 10.5931 10.8536 11.503 11.2303C12.4128 11.607 13.2392 12.1597 13.9348 12.8566C14.6482 11.8526 15.0695 10.6705 15.152 9.44155C15.2344 8.21261 14.9748 6.98486 14.4019 5.8945C13.829 4.80414 12.9653 3.89381 11.9065 3.26449C10.8477 2.63518 9.63524 2.31149 8.40368 2.32933C7.1721 2.34718 5.96955 2.70586 4.92944 3.36559C3.88932 4.02531 3.0523 4.96029 2.51125 6.06679C1.97019 7.17329 1.74625 8.40805 1.86427 9.63408C1.98229 10.8601 2.43765 12.0295 3.17984 13.0125V13.0116ZM8.49984 9.82829C7.61578 9.82829 6.76794 9.4771 6.14281 8.85198C5.51769 8.22686 5.1665 7.37901 5.1665 6.49495C5.1665 5.6109 5.51769 4.76305 6.14281 4.13793C6.76794 3.51281 7.61578 3.16162 8.49984 3.16162C9.38389 3.16162 10.2317 3.51281 10.8569 4.13793C11.482 4.76305 11.8332 5.6109 11.8332 6.49495C11.8332 7.37901 11.482 8.22686 10.8569 8.85198C10.2317 9.4771 9.38389 9.82829 8.49984 9.82829ZM8.49984 8.16162C8.94186 8.16162 9.36579 7.98603 9.67835 7.67347C9.99091 7.36091 10.1665 6.93698 10.1665 6.49495C10.1665 6.05293 9.99091 5.629 9.67835 5.31644C9.36579 5.00388 8.94186 4.82829 8.49984 4.82829C8.05781 4.82829 7.63389 5.00388 7.32133 5.31644C7.00877 5.629 6.83317 6.05293 6.83317 6.49495C6.83317 6.93698 7.00877 7.36091 7.32133 7.67347C7.63389 7.98603 8.05781 8.16162 8.49984 8.16162Z"
        fill={props.fill ? props.fill : "#fff"}
      />
    </SVGIcon>
  );
};

export default AccountCircleOutline;
