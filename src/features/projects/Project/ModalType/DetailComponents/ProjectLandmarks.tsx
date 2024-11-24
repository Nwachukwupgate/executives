import React from "react";
import { ProjectLandmark } from "@/types/general";


interface ProjectLandmarksProps {
  landmarks: ProjectLandmark[];
}

const ProjectLandmarks: React.FC<ProjectLandmarksProps> = ({ landmarks }) => {
  return (
    <div className="py-5">
      <h2 className="text-gray-800 font-bold my-1 text-lg">Project Landmarks</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {landmarks.map((landmark, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden border border-gray-300 shadow-sm"
          >
            <img
              src={landmark.file}
              alt={landmark.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <p className="font-semibold text-center">{landmark.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectLandmarks;
