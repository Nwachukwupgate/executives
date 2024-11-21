import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

interface ProjectForm {
  name: string;
  location: string;
  projectSize: string;
  title: string;
  deliveryDate: string;
  status: string;
  tagLine: string;
  unitNumber: string;
  commencementDate: string;
}

interface CreateProjectProps {
  open: boolean;
  onClose: () => void; // Close modal handler
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
  minWidth: 500,
};

const CreateProject: React.FC<CreateProjectProps> = ({ open, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProjectForm>();

  const onSubmit: SubmitHandler<ProjectForm> = (data) => {
    console.log('Project Data:', data);
    reset(); // Reset the form after submission
    onClose(); // Close the modal
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" textAlign="center" fontWeight="bold" mb={2}>
          Create Project
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('name', { required: 'Project name is required' })}
            label="Project Name"
            fullWidth
            margin="normal"
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
          <TextField
            {...register('location', { required: 'Location is required' })}
            label="Location"
            fullWidth
            margin="normal"
            error={Boolean(errors.location)}
            helperText={errors.location?.message}
          />
          <TextField
            {...register('projectSize', { required: 'Project size is required' })}
            label="Project Size"
            fullWidth
            margin="normal"
            error={Boolean(errors.projectSize)}
            helperText={errors.projectSize?.message}
          />
          <TextField
            {...register('title', { required: 'Title is required' })}
            label="Title"
            fullWidth
            margin="normal"
            error={Boolean(errors.title)}
            helperText={errors.title?.message}
          />
          <TextField
            {...register('deliveryDate', { required: 'Delivery date is required' })}
            label="Delivery Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            error={Boolean(errors.deliveryDate)}
            helperText={errors.deliveryDate?.message}
          />
          <FormControl fullWidth margin="normal" error={Boolean(errors.status)}>
            <InputLabel>Status</InputLabel>
            <Select
              {...register('status', { required: 'Status is required' })}
              defaultValue=""
            >
              <MenuItem value=""><em>Choose a Status</em></MenuItem>
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="unavailable">Unavailable</MenuItem>
            </Select>
            {errors.status && (
              <Typography variant="caption" color="error">
                {errors.status.message}
              </Typography>
            )}
          </FormControl>
          <TextField
            {...register('tagLine')}
            label="Tag Line"
            fullWidth
            margin="normal"
          />
          <TextField
            {...register('unitNumber')}
            label="Unit Number"
            fullWidth
            margin="normal"
          />
          <TextField
            {...register('commencementDate')}
            label="Commencement Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Project
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateProject;
