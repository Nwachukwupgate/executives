import React from "react";
import { Academic } from "@/types/general";

interface AcademicBackgroundProps {
  academics: Academic[];
}

const AcademicBackground: React.FC<AcademicBackgroundProps> = ({ academics }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-primaryColor mb-4">Academic Background</h2>
    <div className="space-y-4">
      {academics.map((academic) => (
        <div key={academic.id} className="border-b border-gray-200 pb-4">
          <p><strong>School:</strong> {academic.school_name}</p>
          <p><strong>Degree:</strong> {academic.degree}</p>
          <p><strong>Graduation Date:</strong> {academic.graduation_date}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AcademicBackground;
