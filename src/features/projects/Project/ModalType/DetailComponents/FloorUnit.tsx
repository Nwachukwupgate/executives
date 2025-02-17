import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { ProjectUnit, FloorUnitProps } from "@/types/general";

const FloorUnit: React.FC<{ floorUnits: FloorUnitProps[] }> = ({ floorUnits }) => {
  const [selectedUnit, setSelectedUnit] = useState<ProjectUnit | null>(null);

  // Open the modal with the selected unit details
  const openModal = (unit: ProjectUnit) => {
    setSelectedUnit(unit);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedUnit(null);
  };

  return (
    <div className="space-y-8">
      {floorUnits.map((floorUnit, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">{floorUnit.detailName}</h2>
          <h3 className="text-lg text-gray-600">{floorUnit.detailSize}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorUnit.units.map((unit) => (
              <div
                key={unit.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transform transition-all duration-300"
                onClick={() => openModal(unit)}  // Trigger openModal when unit is clicked
              >
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{unit.name}</h4>
                  <p className="text-gray-600">{unit.additional_fee_component}</p>
                  <p className="text-gray-600">Price: {unit.price}</p>
                </div>
              </div>
            ))}
          </div>

          <Dialog open={!!selectedUnit} onClose={closeModal} maxWidth="md">
            <DialogTitle className="text-2xl font-bold">{selectedUnit?.name}</DialogTitle>
            <DialogContent
              className="text-gray-600 space-y-4"
              style={{
                maxHeight: "70vh",
                overflowY: "auto",
                width: "40vw"
              }}
            >
              <p>{selectedUnit?.additional_fee_component}</p>
              <p>Price: {selectedUnit?.price}</p>

              {/* Display images */}
              <div className="space-y-4 mb-4">
                {selectedUnit?.photos?.map((file, index) => (
                  <img
                    key={index}
                    src={typeof file === "string" ? file : file.file}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeModal} color="primary" className="w-full py-2 bg-red-500 hover:bg-red-600">
                Close
              </Button>
            </DialogActions>
          </Dialog>

        </div>
      ))}
    </div>
  );
};

export default FloorUnit;
