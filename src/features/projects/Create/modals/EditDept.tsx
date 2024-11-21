import React, { useState } from "react";

interface EditDeptProps {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  departments: { id: string; name: string }[];
  setDepartments: React.Dispatch<React.SetStateAction<{ id: string; name: string }[]>>;
  currentDept: { id: string; name: string };
}

const EditDept: React.FC<EditDeptProps> = ({ setEdit, departments, setDepartments, currentDept }) => {
  const [deptName, setDeptName] = useState(currentDept.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deptName.trim()) {
      alert("Department name cannot be empty.");
      return;
    }
    const updatedDepartments = departments.map((dept) =>
      dept.id === currentDept.id ? { ...dept, name: deptName } : dept
    );
    setDepartments(updatedDepartments);
    setEdit(false);
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="w-11/12 sm:w-5/6 lg:w-1/3 bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Edit Department</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setEdit(false)}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDept;
