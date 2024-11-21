import React from "react";
import { Sanction } from "@/types/general";

interface SanctionsProps {
  sanctions: Sanction[];
}

const Sanctions: React.FC<SanctionsProps> = ({ sanctions }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-primaryColor mb-4">Sanctions</h2>
    <ul className="list-disc pl-5">
      {sanctions.map((sanction) => (
        <li key={sanction.id} className="text-gray-700">
          {sanction.descriptions}
        </li>
      ))}
    </ul>
  </div>
);

export default Sanctions;
