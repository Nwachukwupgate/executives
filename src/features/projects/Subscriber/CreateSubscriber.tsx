import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, Box, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

interface SubscriberForm {
  title: string;
  referral_code: string;
  surname: string;
  firstname: string;
  othernames: string;
  phone: string;
  residential_address: string;
  email: string;
}

interface CreateSubProps {
  onClose: () => void;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  minWidth: 500,
  maxHeight: '85vh',
  overflowY: 'auto',
};

const CreateSubscriber: React.FC<CreateSubProps> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SubscriberForm>();


  const onSubmit: SubmitHandler<SubscriberForm> = async (data) => {
    try {
      console.log(data);      
      reset();
      onClose();
    } catch (error: any) {
      console.log(error);     
    }
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" textAlign="center" fontWeight="bold" mb={2}>
          Create Subscriber
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="title-label">Title</InputLabel>
            <Select
              labelId="title-label"
              defaultValue=""
              {...register('title', { required: 'Title is required' })}
              error={!!errors.title}
            >
              <MenuItem value="Sir">Sir</MenuItem>
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Chief">Chief</MenuItem>
              <MenuItem value="Madam">Madam</MenuItem>
              <MenuItem value="Engr">Engr</MenuItem>
              <MenuItem value="Barr">Barr</MenuItem>
              <MenuItem value="Alhaji">Alhaji</MenuItem>
            </Select>
          </FormControl>

          {[
            { name: 'referral_code', label: 'Referral Code' },
            { name: 'surname', label: 'Last Name' },
            { name: 'firstname', label: 'First Name' },
            { name: 'othernames', label: 'Other Names' },
            { name: 'phone', label: 'Phone', type: 'tel' },
            { name: 'residential_address', label: 'Residential Address' },
            { name: 'email', label: 'Email', type: 'email' },
          ].map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              fullWidth
              margin="normal"
              {...register(field.name as keyof SubscriberForm, { required: `${field.label} is required` })}
              error={!!errors[field.name as keyof SubscriberForm]}
              helperText={errors[field.name as keyof SubscriberForm]?.message}
              type={field.type || 'text'}
            />
          ))}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            // disabled={isLoading}
          >
            Create
          </Button>
        </form>
        
      </Box>
    </Modal>
  );
};

export default CreateSubscriber;
