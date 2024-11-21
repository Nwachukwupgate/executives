import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faMinus } from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  toggleAccordion: () => void;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  isOpen,
  toggleAccordion,
  children,
}) => {
  return (
    <div>
      <div className={`flex justify-between mb-1 ${isOpen ? "" : "shadow-lg shadow-black p-4 rounded-2xl"}`}>
        <p className="text-lg font-medium">{title}</p>
        <i onClick={toggleAccordion}>
          <FontAwesomeIcon icon={isOpen ? faMinus : faArrowDown} className="cursor-pointer" />
        </i>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

export default Accordion;
