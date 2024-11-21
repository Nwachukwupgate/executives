import React from "react";
import { TextareaAutosize } from "@mui/material";

interface SelectTextareaProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  rows: number;
  placeholder: string;
  name: string;
}

const SelectTextarea: React.FC<SelectTextareaProps> = ({
  value,
  onChange,
  rows,
  placeholder,
  name,
}) => {
  return (
    <div className="block w-full bg-[#F4F0EB] rounded-md mt-2">
      <TextareaAutosize
        name={name}
        value={value}
        onChange={onChange}
        minRows={rows}
        placeholder={placeholder}
        className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-[#F4F0EB] border-none focus:border-none focus:ring-none focus:outline-none rounded-md font-bold"
      />
    </div>
  );
};

export default SelectTextarea;
