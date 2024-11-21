import React from "react";
import { Career } from "@/types/general";

interface CareerDevelopmentProps {
  careers: Career[];
}

const CareerDevelopment: React.FC<CareerDevelopmentProps> = ({ careers }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-primaryColor mb-4">Career Development</h2>
    <div className="space-y-4">
      {careers.map((career) => (
        <div key={career.id} className="border-b border-gray-200 pb-4">
          <p><strong>Training:</strong> {career.training_name}</p>
          <p><strong>Date:</strong> {career.date}</p>
          <p><strong>Duration:</strong> {career.duration}</p>
          <p><strong>Facilitator:</strong> {career.facilitator}</p>
          <p><strong>Venue:</strong> {career.venue}</p>
          {career.document_name && (
            <p>
              <strong>Certificate:</strong>{" "}
              <a
                // href={career.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryColor"
              >
                {career.document_name}
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default CareerDevelopment;
