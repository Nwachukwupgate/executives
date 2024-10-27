import AppPasswordField from "@/common/form/mui/AppPasswordField";
import AppTextField from "@/common/form/mui/AppTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";

type LoginFormProps = {};

const schema = z
  .object({
    username: z.string().min(1),
    password: z.string().min(1),
  })
  .required();

type Schema = z.infer<typeof schema>;

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const {
    control,
    formState: { errors },
  } = useForm<Schema>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });
  return (
    <form className="flex flex-col gap-8">
      <AppTextField
        control={control}
        name={"username"}
        message={errors.username?.message}
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
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
