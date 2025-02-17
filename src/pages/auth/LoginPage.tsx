import img from "@/assets/image/house1.jpeg";
import AppLogo from "@/common/icons/AppLogo";
import LoginForm from "@/features/auth/LoginForm";
import ScreenSplit from "@/features/auth/ScreenSplit";
import { Typography } from "@mui/material";
import { useLoginMutation, ErrorResponse, LoginUserInput, AuthIctResponse, Ict } from "@/generated/graphql";
import { useAppStore } from "@/store";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type LoginPageProps = {};
const LoginPage: React.FC<LoginPageProps> = ({}) => {
  const navigate = useNavigate();
  const setAuth = useAppStore((state) => state.setAuthToken);
  const setUser = useAppStore((state) => state.setUserData);

  const [login, { loading }] = useLoginMutation({
    onCompleted: ({ loginUser }) => {
      let resp = loginUser;
      console.log("resp", resp)
      if (
        resp.__typename === "AuthIctResponse" &&
        typeof resp.token === "string"
      ) {
        resp = resp as AuthIctResponse;
        setAuth(resp.token as string);
        setUser(resp.user as Ict);
        toast.success("Login successful.  redirecting...");
        setTimeout(() => navigate("/"), 2000);
        return;
      }

      if (resp.__typename === "invalidInputError") {
        return toast.error((resp as unknown as ErrorResponse).message);
      }

      toast.error("account not authorized");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    notifyOnNetworkStatusChange: true,
  });

  const authHandler = (data: LoginUserInput) => {
    login({
      variables: {
        data,
      },
    });
  };

  
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
          <LoginForm handler={authHandler} loading={loading} />
        </section>
      </div>
    </ScreenSplit>
  );
};

export default LoginPage;
