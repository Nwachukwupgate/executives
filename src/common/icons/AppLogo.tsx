import img from "@/assets/image/gmhlogo.png";
import { Link } from "react-router-dom";

const AppLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Link to={"/"}>
      <img src={img} className={`w-28 ${className}`} alt="logo" />
    </Link>
  );
};

export default AppLogo;
