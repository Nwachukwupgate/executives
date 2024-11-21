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

interface EditRoleModalProps {
  role: {
    id: string;
    name: string;
    jobDescription: string;
    roleCode: string;
    department: string;
  };
  onClose: () => void;
  onEditRole: React.Dispatch<React.SetStateAction<any>>;
}

interface FormValues {
  name: string;
  jobDescription: string;
  roleCode: string;
  department: string;
}

const departments = ['Finance', 'Transport', 'Sales', 'IT'];

const EditRoleModal: React.FC<EditRoleModalProps> = ({ role, onClose, onEditRole }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      name: role.name,
      jobDescription: role.jobDescription,
      roleCode: role.roleCode,
      department: role.department,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
    // onEditRole(prevRoles =>
    //   prevRoles.map((r: any) => (r.id === role.id ? { ...r, ...data } : r))
    // );
    // reset();
    // onClose();
  };

  return (
    <Modal open onClose={onClose}>
      <Box sx={{ ...modalStyles, width: 400 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Edit Role
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
            Save Changes
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

export default EditRoleModal;
