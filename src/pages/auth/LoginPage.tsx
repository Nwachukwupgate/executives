import img from "@/assets/image/house1.jpeg";
import AppLogo from "@/common/icons/AppLogo";
import LoginForm from "@/features/auth/LoginForm";
import ScreenSplit from "@/features/auth/ScreenSplit";
import { Typography } from "@mui/material";

type LoginPageProps = {};
const LoginPage: React.FC<LoginPageProps> = ({}) => {
  return (
    <ScreenSplit src={img}>
      <div className="py-12">
        <section aria-label="logo" className="py-4">
          <div className="grid place-items-center">
            <AppLogo />
          </div>
        </section>
        <section className="px-4 py-12 mx-auto w-[96%] max-w-[600px] xl:max-w-[660px] md:px-8 lg:px-16">
          <div className="py-6">
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Login
            </Typography>
            <Typography variant="body2">
              Welcome back, login your details
            </Typography>
          </div>
          <LoginForm />
        </section>
      </div>
    </ScreenSplit>
  );
};

export default LoginPage;
