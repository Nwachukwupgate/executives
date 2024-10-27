import SVGIcon, { SVGIconProps } from "../SVGIcon";

type RadarShieldProps = Partial<SVGIconProps>;

const RadarShield: React.FC<RadarShieldProps> = ({ ...props }) => {
  return (
    <SVGIcon width="18" height="17" viewBox="0 0 18 17" fill="none" {...props}>
      <path
        d="M2.00021 8.49503C1.9987 6.9283 2.56314 5.41374 3.58963 4.23012C4.61612 3.04649 6.03558 2.27346 7.58676 2.05329C9.13794 1.83311 10.7165 2.18062 12.0318 3.03186C13.3471 3.88309 14.3107 5.18076 14.7452 6.68603C14.8759 6.75803 14.9959 6.85069 15.1052 6.96403C15.4372 7.31403 15.9252 7.73403 16.4852 7.99403C16.404 6.70263 16.0108 5.4502 15.3392 4.34416C14.6677 3.23812 13.7378 2.31148 12.6295 1.64372C11.5212 0.97595 10.2674 0.58699 8.97577 0.510197C7.6841 0.433403 6.39308 0.671067 5.21344 1.2028C4.0338 1.73454 3.00074 2.54448 2.20287 3.56316C1.405 4.58184 0.866131 5.77885 0.632482 7.05153C0.398832 8.3242 0.477375 9.63457 0.861374 10.8702C1.24537 12.1059 1.92337 13.2299 2.83721 14.146C2.97777 14.2869 3.16852 14.3661 3.3675 14.3663C3.56648 14.3665 3.75738 14.2876 3.89821 14.147C4.03904 14.0065 4.11826 13.8157 4.11845 13.6167C4.11863 13.4178 4.03977 13.2269 3.89921 13.086C3.29623 12.4833 2.81811 11.7676 2.49224 10.9798C2.16637 10.1919 1.99917 9.34757 2.00021 8.49503ZM8.50021 3.49503C9.51676 3.49472 10.5093 3.80427 11.3454 4.38242C12.1815 4.96057 12.8216 5.77984 13.1802 6.73103C13.076 6.7967 12.9803 6.87495 12.8952 6.96403C12.6472 7.22403 12.3122 7.52603 11.9252 7.77003C11.8126 7.23701 11.5772 6.73762 11.2377 6.31158C10.8982 5.88554 10.464 5.54461 9.96957 5.3159C9.47514 5.08719 8.93416 4.97702 8.38966 4.99415C7.84516 5.01128 7.31217 5.15524 6.8331 5.41458C6.35402 5.67392 5.94207 6.04148 5.63002 6.48802C5.31798 6.93456 5.11444 7.44776 5.03561 7.98679C4.95677 8.52583 5.00482 9.07582 5.17592 9.59302C5.34702 10.1102 5.63646 10.5804 6.02121 10.966C6.09266 11.0354 6.14958 11.1183 6.18866 11.2099C6.22773 11.3015 6.24818 11.3999 6.2488 11.4995C6.24942 11.5991 6.23021 11.6978 6.19228 11.7898C6.15436 11.8819 6.09847 11.9655 6.02789 12.0358C5.95732 12.106 5.87346 12.1615 5.78121 12.199C5.68896 12.2365 5.59016 12.2552 5.49059 12.2541C5.39102 12.253 5.29266 12.2321 5.20126 12.1926C5.10985 12.1531 5.02723 12.0958 4.95821 12.024C4.26079 11.324 3.78643 10.4331 3.59499 9.4637C3.40356 8.4943 3.50365 7.48992 3.88262 6.57737C4.2616 5.66482 4.90246 4.88501 5.7243 4.33642C6.54613 3.78782 7.51209 3.49504 8.50021 3.49503ZM8.50021 6.49503C8.99602 6.49502 9.47416 6.67918 9.84186 7.01178C10.2096 7.34438 10.4406 7.8017 10.4902 8.29503C9.94821 8.49503 9.50021 9.00503 9.50021 9.68903V10.227C9.23453 10.3804 8.93713 10.4707 8.631 10.4907C8.32488 10.5108 8.01824 10.4602 7.7348 10.3428C7.45137 10.2254 7.19874 10.0444 6.99646 9.81374C6.79418 9.58309 6.64767 9.309 6.56827 9.01267C6.48887 8.71634 6.4787 8.40572 6.53855 8.10483C6.5984 7.80394 6.72667 7.52085 6.91344 7.27747C7.1002 7.03409 7.34045 6.83693 7.6156 6.70125C7.89075 6.56557 8.19342 6.49501 8.50021 6.49503ZM14.3802 7.65503C14.8882 8.18703 15.8642 9.03403 17.0642 9.20703C17.1824 9.22223 17.2913 9.27915 17.3712 9.36752C17.4511 9.45589 17.4969 9.56991 17.5002 9.68903V12.012C17.5002 15.134 14.7162 16.267 14.1142 16.475C14.0405 16.5013 13.9599 16.5013 13.8862 16.475C13.2852 16.267 10.5002 15.135 10.5002 12.012V9.68903C10.5035 9.56991 10.5493 9.45589 10.6292 9.36752C10.7091 9.27915 10.818 9.22223 10.9362 9.20703C12.1362 9.03403 13.1112 8.18703 13.6192 7.65403C13.669 7.60353 13.7283 7.56344 13.7937 7.53607C13.8591 7.5087 13.9293 7.49461 14.0002 7.49461C14.0711 7.49461 14.1413 7.5087 14.2067 7.53607C14.2721 7.56344 14.3314 7.60353 14.3812 7.65403"
        fill={props.fill ? props.fill : "#E6F4FB"}
      />
    </SVGIcon>
  );
};

export default RadarShield;
