import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Modal } from "@mui/material";

interface FormData {
    item: string;
    quantity: string;
    unit_price: string;
    account_name: string;
    account_number: string;
    bank_name: string;
    description: string;
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
  minWidth: 700,
  maxHeight: '90vh',
  overflowY: 'auto',
};

const CreateRequest: React.FC<CreateSubProps> = ({ onClose }) => {
    const { handleSubmit, formState: { errors }, control, reset } = useForm<FormData>();
    
    const onSubmit = (data: FormData) => {
        console.log("Form Data Submitted:", data);
        reset();
    };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={modalStyle} onSubmit={handleSubmit(onSubmit)} component="form" className='flex flex-col gap-y-6'>
      
        <Controller
            name="item"
            control={control}
            defaultValue=""
            rules={{ required: "Item is required" }}
            render={({ field }) => (
            <TextField
                {...field}
                label="Item"
                error={!!errors.item}
                helperText={errors.item?.message}
            />
            )}
        />

        <Controller
            name="quantity"
            control={control}
            defaultValue=""
            rules={{ required: "Quantity is required" }}
            render={({ field }) => (
            <TextField
                {...field}
                label="Quantity"
                type="number"
                error={!!errors.quantity}
                helperText={errors.quantity?.message}
            />
            )}
        />

        <Controller
            name="unit_price"
            control={control}
            defaultValue=""
            rules={{ required: "Unit price is required" }}
            render={({ field }) => (
            <TextField
                {...field}
                label="Unit Price"
                type="number"
                error={!!errors.unit_price}
                helperText={errors.unit_price?.message}
            />
            )}
        />

        <Controller
            name="account_name"
            control={control}
            defaultValue=""
            rules={{ required: "Account name is required" }}
            render={({ field }) => (
            <TextField
                {...field}
                label="Account Name"
                error={!!errors.account_name}
                helperText={errors.account_name?.message}
            />
            )}
        />

        <Controller
            name="account_number"
            control={control}
            defaultValue=""
            rules={{ required: "Account number is required" }}
            render={({ field }) => (
            <TextField
                {...field}
                label="Account Number"
                type="text"
                error={!!errors.account_number}
                helperText={errors.account_number?.message}
            />
            )}
        />

        <Controller
            name="bank_name"
            control={control}
            defaultValue=""
            rules={{ required: "Bank name is required" }}
            render={({ field }) => (
            <TextField
                {...field}
                label="Bank Name"
                error={!!errors.bank_name}
                helperText={errors.bank_name?.message}
            />
            )}
        />

        <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: "Description is required" }}
            render={({ field }) => (
            <TextField
                {...field}
                label="Description"
                multiline
                rows={3}
                error={!!errors.description}
                helperText={errors.description?.message}
            />
            )}
        />

        <Button variant="contained" color="primary" type="submit">
            Submit
        </Button>
        
      </Box>
    </Modal>
  );
};

export default CreateRequest;
