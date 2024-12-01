import React from "react";

interface IconButtonProps {
  iconName: "details" | "edit" | "add"; 
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
        fill="currentColor"
      >
        <path d="M12 4.5C7.305 4.5 3.247 7.58 1.5 12c1.747 4.42 5.805 7.5 10.5 7.5s8.753-3.08 10.5-7.5C20.753 7.58 16.695 4.5 12 4.5zm0 11.25A3.75 3.75 0 1 1 12 9a3.75 3.75 0 0 1 0 7.5zm0-6A2.25 2.25 0 1 0 12 15a2.25 2.25 0 0 0 0-4.5z" />
      </svg>
    ),
    edit: (
      <svg
        className="h-5 w-5 text-[#0A3347] cursor-pointer"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13.586 3.586a2 2 0 0 1 2.828 0l4 4a2 2 0 0 1 0 2.828l-9.193 9.193a1 1 0 0 1-.403.244l-5 1.667a1 1 0 0 1-1.26-1.26l1.667-5a1 1 0 0 1 .244-.403l9.193-9.193zM16 5l3 3-9.193 9.193-2.122-2.121L16 5zM4.707 19.293a1 1 0 0 0 1.414 1.414l-1.414-1.414z" />
      </svg>
    ),
    add: (
      <svg
        className="h-5 w-5 text-[#0A3347] cursor-pointer"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2h-8v8a1 1 0 1 1-2 0v-8H3a1 1 0 1 1 0-2h8V3a1 1 0 0 1 1-1z" />
      </svg>
    ),
  };

  return <button onClick={onClick}>{icons[iconName]}</button>;
};

export default IconButton;
