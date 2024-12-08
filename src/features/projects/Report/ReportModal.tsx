import React from 'react';
import { Modal as MuiModal, Box } from '@mui/material';
import ViewReport from './ModalType/ViewReport';
import AddressReport from './ModalType/AddressReport';

interface ModalProps {
  type: string;
  employeeId: string;
  onClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  minWidth: 800,
  maxHeight: '88vh',
  overflowY: 'auto', 
};

const Modal: React.FC<ModalProps> = ({ type, employeeId, onClose }) => {
    console.log("opennnn")
  return (
    <MuiModal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        {type === 'details' && <ViewReport id={employeeId} />}
        {type === 'edit' && <AddressReport id={employeeId} />}
      </Box>
    </MuiModal>
  );
};

export default Modal;
