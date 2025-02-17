import AppPasswordField from "@/common/form/mui/AppPasswordField";
import AppTextField from "@/common/form/mui/AppTextField";
import TwSpinner from "@/common/utilities/TwSpinner";
import { LoginUserInput } from "@/generated/graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";

type LoginFormProps = {
  handler: (data: LoginUserInput) => void;
  loading: boolean;
};

const schema = z
  .object({
    email: z.string().min(1),
    password: z.string().min(1),
  })
  .required();

type Schema = z.infer<typeof schema>;

const LoginForm: React.FC<LoginFormProps> = ({ handler, loading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const handleSubmit_ = handleSubmit(handler);
  return (
    <form onSubmit={handleSubmit_} className="flex flex-col gap-8">
      <AppTextField
        control={control}
        name={"email"}
        message={errors.email?.message}
        label={"E-mail"}
      />
      <AppPasswordField
        control={control}
        name="password"
        message={errors.password?.message}
        label={"password"}
      />
      <div>
        <Button type="submit" className="w-full" color="secondary">
          {loading ? (
            <div className="flex items-center gap-4">
              <span>Please wait...</span>
              <TwSpinner />
            </div>
          ) : (
            "Login"
          )}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
