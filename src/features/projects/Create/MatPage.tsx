import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import MatModal from "./modals/MatModal";
import EditMat from "./modals/EditMat";


interface Material {
  id: number;
  name: string;
}

const MatPage: React.FC = () => {
  const [materials, setMaterials] = useState<Material[]>([
    { id: 1, name: "Steel" },
    { id: 2, name: "Wood" },
    { id: 3, name: "Plastic" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentMaterial, setCurrentMaterial] = useState<Material | null>(null);

  const handleDelete = (id: number) => {
    setMaterials(materials.filter((material) => material.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Materials</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition"
        >
          Create Material
        </button>
      </div>

      <div className="shadow rounded-lg divide-y">
        {materials.length > 0 ? (
          materials.map((material) => (
            <div
              key={material.id}
              className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="text-lg font-medium">{material.name}</span>
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setCurrentMaterial(material);
                    setEditModal(true);
                  }}
                  className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition"
                >
                  <FontAwesomeIcon icon={faPencil} className="text-white" />
                </button>
                <button
                  onClick={() => handleDelete(material.id)}
                  className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                >
                  <FontAwesomeIcon icon={faTrash} className="text-white" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 p-4">No materials created yet</p>
        )}
      </div>

      {showModal && (
        <MatModal
          setShowModal={setShowModal}
          setMaterials={setMaterials}
          materials={materials}
        />
      )}
      {editModal && currentMaterial && (
        <EditMat
          setEditModal={setEditModal}
          materials={materials}
          setMaterials={setMaterials}
          currentMaterial={currentMaterial}
        />
      )}
    </div>
  );
};

export default MatPage;
