import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, Box, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

interface CreateSupplierInput {
    name: string;
    address: string;
    email: string;
    phoneNumber: string;
    material: string[];
}

const materials = [
    { id: "1", name: "Steel" },
    { id: "2", name: "Concrete" },
    { id: "3", name: "Wood" },
    { id: "4", name: "Plastic" },
    { id: "5", name: "Glass" },
];

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

const CreateSupplier: React.FC<CreateSubProps> = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<CreateSupplierInput>();
    
    const onSubmit: SubmitHandler<CreateSupplierInput> = (data) => {
        console.log(data);
        reset();
    };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={modalStyle}>
      <Typography variant="h6" textAlign="center" fontWeight="bold" mb={2}>
        Create Supplier
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <TextField
          label="Supplier Name"
          fullWidth
          margin="normal"
          {...register("name", { required: "Supplier name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        {/* Address */}
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          {...register("address", { required: "Address is required" })}
          error={!!errors.address}
          helperText={errors.address?.message}
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

        {/* Phone Number */}
        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          type="tel"
          {...register("phoneNumber", { required: "Phone number is required" })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />

        {/* Material Selection */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="material-label">Select Materials</InputLabel>
          <Select
            labelId="material-label"
            multiple
            defaultValue={[]}
            {...register("material", { required: "At least one material is required" })}
            onChange={(e) => {
              const value = e.target.value as string[];
              setValue("material", value);
            }}
            error={!!errors.material}
          >
            {materials.map((material) => (
              <MenuItem key={material.id} value={material.id}>
                {material.name}
              </MenuItem>
            ))}
          </Select>
          {errors.material && (
            <Typography color="error">{errors.material.message}</Typography>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Create Supplier
        </Button>
      </form>
        
      </Box>
    </Modal>
  );
};

export default CreateSupplier;
