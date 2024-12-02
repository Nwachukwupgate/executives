import React, { useState } from "react";
import CreateProjectPhoto from "./CreateDetailComponent/CreateProjectPhotos";
import CreateProjectAmenities from "./CreateDetailComponent/CreateProjectAmenities";
import CreateProjectVideos from "./CreateDetailComponent/CreateProjectVideos";
import CreateProjectLandmark from "./CreateDetailComponent/CreateProjectLandmark";
import CreateProjectFloorPlan from "./CreateDetailComponent/CreateProjectFloorPlan";
import { Typography } from "@mui/material";


interface CreateDetailsProps {
  id: string;
}

const CreateDetail: React.FC<CreateDetailsProps> = ({ id }) => {
  const [accordion, setAccordion] = useState<string>("photos");
  
  const handleAccordionToggle = (section: string) => {
    setAccordion(accordion === section ? "" : section);
  };
  return (
    <>
        <Typography variant="h6" textAlign="left" fontWeight="bold" mb={2}>
            Create Project Details
        </Typography>
        <CreateProjectPhoto id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateProjectAmenities id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateProjectVideos id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateProjectLandmark id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateProjectFloorPlan id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
    </>
  );
};

export default CreateDetail;
