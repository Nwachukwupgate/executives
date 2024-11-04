// src/components/EmployeeList/IconButton.tsx

import React from "react";

interface IconButtonProps {
  iconName: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, onClick }) => {
  const icons = {
    details: (
      <svg
        className="h-5 w-5 text-[#0A3347] cursor-pointer"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.244 0-9.75-4.506-9.75-10S6.756 2 12 2s9.75 4.506 9.75 10-4.506 10-9.75 10zm-.75-17h1.5v7.5h-1.5V5zm0 9h1.5v1.5h-1.5v-1.5z" />
      </svg>
    ),
    edit: (
      <svg
        className="h-5 w-5 text-[#0A3347] cursor-pointer"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.244 0-9.75-4.506-9.75-10S6.756 2 12 2s9.75 4.506 9.75 10-4.506 10-9.75 10zm-1.5-17h3v3h-3V5zm0 4.5h3v3h-3v-3zm0 4.5h3v3h-3v-3z" />
      </svg>
    ),
    add: (
      <svg
        className="h-5 w-5 text-[#0A3347] cursor-pointer"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.244 0-9.75-4.506-9.75-10S6.756 2 12 2s9.75 4.506 9.75 10-4.506 10-9.75 10zm-.75-17h1.5v7.5h-1.5V5zm0 9h1.5v1.5h-1.5v-1.5z" />
      </svg>
    ),
  };

  return (
    <button onClick={onClick}>
      {icons[iconName]}
    </button>
  );
};

export default IconButton;
