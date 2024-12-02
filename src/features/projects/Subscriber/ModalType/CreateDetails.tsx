import React, { useState } from "react";
import CreateSubProject from "./CreateDetailComponent/CreateSubProject";
import CreateSubDocuments from "./CreateDetailComponent/CreateSubDocuments";
import CreateSubUnit from "./CreateDetailComponent/CreateSubUnit";
import { Typography } from "@mui/material";


interface CreateDetailsProps {
  id: string;
}

const CreateDetails: React.FC<CreateDetailsProps> = ({ id }) => {
  const [accordion, setAccordion] = useState<string>("project");
  
  const handleAccordionToggle = (section: string) => {
    setAccordion(accordion === section ? "" : section);
  };
  return (
    <>
        <Typography variant="h6" textAlign="center" fontWeight="bold" mb={2}>
            Subscriber Information
        </Typography>
        <CreateSubProject id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateSubDocuments id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateSubUnit id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
    </>
  );
};

export default CreateDetails;
