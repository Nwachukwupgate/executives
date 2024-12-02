import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

interface CreateContractorInput {
    contractorAddress: string;
    contractorServiceLine: string;
    email: string;
    nameOfCompany: string;
    nameOfPrincipal: string;
    phone: string;
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

const CreateContractor: React.FC<CreateSubProps> = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateContractorInput>();
    
    const onSubmit: SubmitHandler<CreateContractorInput> = async (data) => {
        try {
          console.log("Contractor Data:", data);
          reset();
        } catch (error: any) {
          console.error("Error submitting form:", error);
        }
    };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={modalStyle}>
      <Typography variant="h6" textAlign="center" fontWeight="bold" mb={2}>
        Create Contractor
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Contractor Address */}
        <TextField
          label="Contractor Address"
          fullWidth
          margin="normal"
          {...register("contractorAddress", {
            required: "Contractor Address is required",
          })}
          error={!!errors.contractorAddress}
          helperText={errors.contractorAddress?.message}
        />

        {/* Contractor Service Line */}
        <TextField
          label="Contractor Service Line"
          fullWidth
          margin="normal"
          {...register("contractorServiceLine", {
            required: "Contractor Service Line is required",
          })}
          error={!!errors.contractorServiceLine}
          helperText={errors.contractorServiceLine?.message}
        />

        {/* Email */}
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        {/* Name of Company */}
        <TextField
          label="Name of Company"
          fullWidth
          margin="normal"
          {...register("nameOfCompany", {
            required: "Name of Company is required",
          })}
          error={!!errors.nameOfCompany}
          helperText={errors.nameOfCompany?.message}
        />

        {/* Name of Principal */}
        <TextField
          label="Name of Principal"
          fullWidth
          margin="normal"
          {...register("nameOfPrincipal", {
            required: "Name of Principal is required",
          })}
          error={!!errors.nameOfPrincipal}
          helperText={errors.nameOfPrincipal?.message}
        />

        {/* Phone */}
        <TextField
          label="Phone"
          fullWidth
          margin="normal"
          type="tel"
          {...register("phone", { required: "Phone is required" })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Create Contractor
        </Button>
      </form>      
      </Box>
    </Modal>
  );
};

export default CreateContractor;
