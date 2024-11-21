import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import DeptModal from "./modals/DeptModal";
import EditDept from "./modals/EditDept";

const DeptPage: React.FC = () => {
  const [departments, setDepartments] = useState<{ id: string; name: string }[]>([
    { id: "1", name: "Finance" },
    { id: "2", name: "Human Resources" },
    { id: "3", name: "IT" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [currentDept, setCurrentDept] = useState<{ id: string; name: string } | null>(null);

  const deleteDepartment = (id: string) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Departments</h1>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition"
      >
        Add Department
      </button>

      <div className="mt-6 space-y-4">
        {departments.length >= 1 ? (
          departments.map((items) => (
            <div
              className="flex justify-between items-center p-4 bg-gray-100 rounded shadow hover:shadow-lg transition"
              key={items.id}
            >
              <div className="text-lg font-bold italic text-gray-800">{items.name}</div>

              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setCurrentDept(items);
                    setEdit(true);
                  }}
                  className="h-8 w-8 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
                >
                  <FontAwesomeIcon icon={faPencil} className="text-white" />
                </button>

                <button
                  onClick={() => deleteDepartment(items.id)}
                  className="h-8 w-8 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 transition"
                >
                  <FontAwesomeIcon icon={faTrash} className="text-white" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-center text-gray-600 p-5">No Department created yet</p>
        )}
      </div>

      {showModal && (
        <DeptModal
          setShowModal={setShowModal}
          departments={departments}
          setDepartments={setDepartments}
        />
      )}
      {edit && currentDept && (
        <EditDept
          setEdit={setEdit}
          departments={departments}
          setDepartments={setDepartments}
          currentDept={currentDept}
        />
      )}
    </div>
  );
};

export default DeptPage;
