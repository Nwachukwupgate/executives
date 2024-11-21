import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { TextField } from "@mui/material";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  isFile?: boolean;
  accept?: string; // Add accept here
  onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder = "",
  isFile = false,
  accept,
  onFileChange,
}: FormFieldProps<T>) => {
  return (
    <div className="block w-full bg-[#F4F0EB] rounded-md mt-2">
      <label className="block px-4 pt-1 text-sm text-gray-600">{label}</label>
      {isFile ? (
        <input
          type="file"
          name={name}
          accept={accept}
          onChange={onFileChange}
          className="block w-full px-4 pt-0 pb-1 text-gray-700 placeholder-gray-400 bg-[#F4F0EB] border-none focus:border-none focus:ring-none focus:outline-none rounded-b-md font-bold"
        />
      ) : (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder={placeholder}
              fullWidth
              type={type}
              className="block w-full bg-[#F4F0EB] border-none focus:ring-none focus:outline-none rounded-b-md font-bold"
            />
          )}
        />
      )}
    </div>
  );
};

export default FormField;
