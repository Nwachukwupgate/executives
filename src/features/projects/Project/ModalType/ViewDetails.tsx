import { projectData } from "@/databank/project";
import React, { useState } from "react";
import { ModalState, ProjectUnit } from "@/types/general";
import ProjectDetails from "./DetailComponents/ProjectDetails";
import ProjectPhotos from "./DetailComponents/ProjectPhotos";
import ProjectVideos from "./DetailComponents/ProjectVideos";
import ProjectAmenities from "./DetailComponents/ProjectAmenities";
import ProjectLandmarks from "./DetailComponents/ProjectLandmarks";
import FloorUnit from "./DetailComponents/FloorUnit";
import { Typography } from "@mui/material";


const ViewDetails: React.FC = () => {
  const [modals, setModals] = useState<ModalState>({
    showFModal: false,
    showMedModal: false,
    showKin: false,
    showMedRecord: false,
    amenities: false,
    unitShow: false,
    addUnit: false,
    selectedUnit: null,
  });

  console.log("modal", modals)

  const handleModalToggle = (key: keyof ModalState, value: boolean, data: ProjectUnit | null = null) => {
    setModals((prev) => ({ ...prev, [key]: value, selectedUnit: data }));
  };

  const handleViewUnitModal = (unit: ProjectUnit) => {
    handleModalToggle("unitShow", true, unit);  // Show the unit modal
  };

  return (
    <div className="container mx-auto p-6">
        <Typography variant="h6" textAlign="left" fontWeight="bold" mb={2}>
            Project Details
        </Typography>

        <ProjectDetails data={projectData} />
          <ProjectPhotos photos={projectData.project_photos} />
          {/* <ProjectUnits
            units={projectData.project_units}
            onEdit={(unit) => handleModalToggle("unitShow", true, unit)}
            onAdd={() => handleModalToggle("addUnit", true)}
          /> */}
          <ProjectVideos videos={projectData.project_videos} />
          <ProjectAmenities amenities={projectData.project_amenities} />
          <ProjectLandmarks landmarks={projectData.project_landmark_photos} />
          <FloorUnit
                floorUnits={projectData.floor_units.map((floorUnit) => ({
                ...floorUnit,
                viewModal: handleViewUnitModal,  // Pass the modal handler to FloorUnit
                }))}
            />
          {/* Modals
          {/* {modals.unitShow && (
            <UnitDetails
              unitData={modals.selectedUnit}
              onClose={() => handleModalToggle("unitShow", false)}
            />
          )}
          {modals.addUnit && <AddUnit onClose={() => handleModalToggle("addUnit", false)} />} */} 
        
    </div>
  );
};

export default ViewDetails;
