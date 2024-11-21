import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Box,
  Modal,
  TextField,
  Button,
  Typography,
  MenuItem,
} from '@mui/material';

interface RoleModalProps {
  onClose: () => void;
  onAddRole: React.Dispatch<React.SetStateAction<any>>;
}

interface FormValues {
  name: string;
  jobDescription: string;
  roleCode: string;
  department: string;
}

const departments = ['Finance', 'Transport', 'Sales', 'IT'];

const RoleModal: React.FC<RoleModalProps> = ({ onClose, onAddRole }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
    // const newRole = { ...data, id: String(Date.now()) };
    // onAddRole(prev => [...prev, newRole]);
    // reset();
    // onClose();
  };

  return (
    <Modal open onClose={onClose}>
      <Box sx={{ ...modalStyles, width: 400 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Create Role
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Role Name"
            fullWidth
            sx={{ mb: 2 }}
            {...register('name', { required: true })}
          />
          <TextField
            label="Job Description"
            fullWidth
            sx={{ mb: 2 }}
            multiline
            rows={3}
            {...register('jobDescription', { required: true })}
          />
          <TextField
            label="Role Code"
            fullWidth
            sx={{ mb: 2 }}
            {...register('roleCode', { required: true })}
          />
          <TextField
            label="Department"
            select
            fullWidth
            sx={{ mb: 3 }}
            {...register('department', { required: true })}
          >
            {departments.map(dep => (
              <MenuItem key={dep} value={dep}>
                {dep}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Role
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

const modalStyles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: 2,
  boxShadow: 24,
};

export default RoleModal;
