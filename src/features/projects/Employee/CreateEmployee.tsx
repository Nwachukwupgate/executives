import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

interface EmployeeForm {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
  access: number;
}

interface CreateEmployeeProps {
  onClose: () => void; // Function to close the modal
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  minWidth: 400,
};

const CreateEmployee: React.FC<CreateEmployeeProps> = ({ onClose }) => {
  const [access, setAccess] = useState<number | ''>('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EmployeeForm>();

  const fakeDepartments = [
    { id: '1', name: 'HR' },
    { id: '2', name: 'Development' },
  ];

  const fakeRoles = [
    { id: '1', name: 'Manager' },
    { id: '2', name: 'Developer' },
  ];

  const onSubmit: SubmitHandler<EmployeeForm> = async (data) => {
    const { firstName, lastName, email, department, role } = data;
    console.log({ firstName, lastName, email, department, role });
    Object.keys(data).forEach((field) => setValue(field as keyof EmployeeForm, ''));
    setAccess('');
    onClose(); // Close the modal after submission
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={style}>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={onClose} color="error" variant="text">
            X
          </Button>
        </Box>
        <Typography variant="h6" component="h2" textAlign="center" fontWeight="medium" mb={2}>
          Create Employee
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('firstName', { required: true })}
            label="First Name"
            fullWidth
            margin="normal"
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? 'First name is required' : ''}
          />
          <TextField
            {...register('lastName', { required: true })}
            label="Last Name"
            fullWidth
            margin="normal"
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? 'Last name is required' : ''}
          />
          <TextField
            {...register('email', { required: true })}
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email ? 'Valid email is required' : ''}
          />
          <FormControl fullWidth margin="normal" error={Boolean(errors.department)}>
            <InputLabel>Department</InputLabel>
            <Select
              {...register('department', { required: true })}
              onChange={(e) => setValue('department', e.target.value as string)}
            >
              <MenuItem value="">
                <em>Choose a Department</em>
              </MenuItem>
              {fakeDepartments.map((dept) => (
                <MenuItem key={dept.id} value={dept.name}>
                  {dept.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display="flex" gap={2}>
            <FormControl fullWidth margin="normal" error={Boolean(errors.role)}>
              <InputLabel>Roles</InputLabel>
              <Select
                {...register('role', { required: true })}
                onChange={(e) => setValue('role', e.target.value as string)}
              >
                <MenuItem value="">
                  <em>Choose a Role</em>
                </MenuItem>
                {fakeRoles.map((role) => (
                  <MenuItem key={role.id} value={role.name}>
                    {role.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              {...register('access', { required: true, min: 1, max: 10 })}
              label="Access Level"
              type="number"
              fullWidth
              margin="normal"
              error={Boolean(errors.access)}
              helperText={
                errors.access ? 'Access level must be a number between 1 and 10' : ''
              }
              onChange={(e) => setAccess(Number(e.target.value))}
              value={access}
            />
          </Box>
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateEmployee;
