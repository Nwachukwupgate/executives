import React from "react";
import { EmploymentHistorys } from "@/types/general";

interface EmploymentHistoryProps {
  histories: EmploymentHistorys[];
}

const EmploymentHistory: React.FC<EmploymentHistoryProps> = ({ histories }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-primaryColor mb-4">Employment History</h2>
    <div className="space-y-4">
      {histories.map((history) => (
        <div key={history.id} className="border-b border-gray-200 pb-4">
          <p><strong>Company:</strong> {history.name_of_company}</p>
          <p><strong>Role:</strong> {history.role}</p>
          <p><strong>Start Date:</strong> {history.start_date}</p>
          <p><strong>End Date:</strong> {history.end_date}</p>
        </div>
      ))}
    </div>
  </div>
);

export default EmploymentHistory;
