import { TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type props<TFieldValues extends FieldValues = FieldValues> = Omit<
  TextFieldProps,
  "variant"
> & {
  control: Control<TFieldValues, any> | undefined;
  helperText?: string;
  defaultValue?: any;
  name: string;
  message?: any;
};

const AppTextField = <T extends FieldValues = FieldValues>({
  control,
  message,
  name,
  helperText = "",
  defaultValue = "",
  ...props
}: props<T>) => {
  const hasError = !!message;
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          error={hasError}
          helperText={hasError ? message : helperText}
        />
      )}
      name={name as any}
      control={control}
      defaultValue={defaultValue}
    />
  );
};

export default AppTextField;
