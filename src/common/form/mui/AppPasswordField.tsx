import EyeClose from "@/common/icons/pack/EyeClose";
import EyeOpen from "@/common/icons/pack/EyeOpenIcon";
import { TextFieldProps } from "@mui/material";
import { useState } from "react";
import { Control, FieldValues } from "react-hook-form";
import AppTextField from "./AppTextField";

type AppPasswordFieldProps<TFieldValues extends FieldValues = FieldValues> =
  Omit<TextFieldProps, "variant"> & {
    control: Control<TFieldValues, any> | undefined;
    helperText?: string;
    defaultValue?: any;
    name: string;

    message?: any;
  };

const AppPasswordField = <T extends FieldValues = FieldValues>({
  ...props
}: AppPasswordFieldProps<T>) => {
  const [showPlain, setShowPlain] = useState(false);

  return (
    <div className="relative h-full w-full">
      <AppTextField
        fullWidth
        {...props}
        type={showPlain ? "text" : "password"}
      />
      <button
        type="button"
        onClick={setShowPlain.bind(undefined, !showPlain)}
        className="absolute right-4 top-1/2 -translate-y-1/2 [appearance:none]"
      >
        {showPlain ? (
          <EyeClose width={20} height={20} fill="#8C8E9A" />
        ) : (
          <EyeOpen width={20} height={20} fill="#8C8E9A" />
        )}
      </button>
    </div>
  );
};

export default AppPasswordField;
