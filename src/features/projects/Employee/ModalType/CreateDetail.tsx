import React, { useState } from "react";
import CreateEmployeeSanction from "./ViewDetailComponents/CreateEmployeeSanction";
import CreateEmployeeSalary from "./ViewDetailComponents/CreateEmployeeSalary";
import { Typography } from "@mui/material";


interface CreateDetailsProps {
  id: string;
}

const CreateDetail: React.FC<CreateDetailsProps> = ({ id }) => {
  const [accordion, setAccordion] = useState<string>("medical");
  
  const handleAccordionToggle = (section: string) => {
    setAccordion(accordion === section ? "" : section);
  };
  return (
    <>
        <Typography variant="h6" textAlign="left" fontWeight="bold" mb={2}>
            Create Project Details
        </Typography>
        <CreateEmployeeSanction id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateEmployeeSalary handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
    </>
  );
};

export default CreateDetail;
