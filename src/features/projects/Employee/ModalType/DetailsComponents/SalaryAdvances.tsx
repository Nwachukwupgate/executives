import React from "react";
import { SalaryAdvance } from "@/types/general";

interface SalaryAdvancesProps {
  advances: SalaryAdvance[];
}

const SalaryAdvances: React.FC<SalaryAdvancesProps> = ({ advances }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-primaryColor mb-4">Salary Advances</h2>
    <div className="space-y-4">
      {advances.map((advance) => (
        <div key={advance.id} className="border-b border-gray-200 pb-4">
          <p>
            <strong>Salary Advance:</strong> {advance.salary_advance || "N/A"}
          </p>
          <p>
            <strong>Salary Balance:</strong> {advance.salary_balance}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default SalaryAdvances;
