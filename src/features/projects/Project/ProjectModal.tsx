import React from 'react';
import { Modal as MuiModal, Box } from '@mui/material';
import ViewDetails from './ModalType/ViewDetails';


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
  minWidth: 900,
  maxHeight: '95vh', // Limit the modal's height
  overflowY: 'auto', 
};

const Modal: React.FC<ModalProps> = ({ type, employeeId, onClose }) => {
  console.log("Modal type", employeeId)
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
        {/* {type === 'add' && <AddEmployees />} */}
        {type === 'projectDetails' && <ViewDetails />}
        {/* {type === 'editProject' && <CreateDetail id={employeeId} /> } */}
        {/* {type === 'edit' && <CreateDetail id={employeeId}/>} */}
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
