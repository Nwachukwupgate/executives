import React, { useState } from "react";

interface DeptModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  departments: { id: string; name: string }[];
  setDepartments: React.Dispatch<React.SetStateAction<{ id: string; name: string }[]>>;
}

const DeptModal: React.FC<DeptModalProps> = ({ setShowModal, departments, setDepartments }) => {
  const [deptName, setDeptName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deptName.trim()) {
      alert("Department name cannot be empty.");
      return;
    }
    const newDepartment = { id: Date.now().toString(), name: deptName };
    setDepartments([...departments, newDepartment]);
    setShowModal(false);
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="w-11/12 sm:w-5/6 lg:w-1/3 bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Create Department</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={deptName}
            onChange={(e) => setDeptName(e.target.value)}
            placeholder="Department Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#E2B682] hover:bg-[#d1a467] text-white rounded"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeptModal;
