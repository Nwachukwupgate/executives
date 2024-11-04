interface ModalProps {
  type: string;
  employeeId: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ type, employeeId, onClose }) => {
  // const [show, setShow] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold">Modal for {type}</h2>
        <p>Employee ID: {employeeId}</p>
        {/* Add additional modal content based on the type */}
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
