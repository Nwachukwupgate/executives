import React from 'react';
import { Modal as MuiModal, Box } from '@mui/material';
import AcceptRequest from './ModalType/AcceptRequest';
import RejectRequest from './ModalType/RejectRequest';
import ViewRequest from './ModalType/ViewRequest';

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
  maxHeight: '88vh', // Limit the modal's height
  overflowY: 'auto', 
};

const Modal: React.FC<ModalProps> = ({ type, employeeId, onClose }) => {
  return (
    <MuiModal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        {/* <Typography id="modal-title" variant="h6" component="h2" fontWeight="bold" gutterBottom>
          Modal for {type}
        </Typography> */}
        {/* <Typography id="modal-description" variant="body1" gutterBottom>
          Employee ID: {employeeId}
        </Typography> */}
        {/* Add additional modal content based on the type */}
        {type === 'view' && <ViewRequest />}
        {type === 'approve' && <AcceptRequest id={employeeId} />}
        {type === 'reject' && <RejectRequest id={employeeId} /> }
        {/* {type === 'addSubDetails' && <CreateSubDetails id={employeeId}/>}
        {type === 'giveInvestment' && <GiveInvestment id={employeeId}/>} */}
        {/* <Button
          onClick={onClose}
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
        >
          Close
        </Button> */}
      </Box>
    </MuiModal>
  );
};

export default Modal;
