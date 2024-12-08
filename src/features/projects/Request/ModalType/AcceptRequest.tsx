import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Typography, TextField, Button, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

interface FormInputFields {
  message: string;
}

interface CreateDetailsProps {
  id: string;
}

const AcceptRequest: React.FC<CreateDetailsProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputFields>();

  const onSubmit: SubmitHandler<FormInputFields> = async (data) => {
    try {
      console.log(data);
      console.log(id);
      reset();
    } catch (error: any) {
      console.error(error);
    }
  };

  const fields: { name: keyof FormInputFields; label: string; type?: string }[] =
    [
      { name: "message", label: "Message" },
    ];

  return (
    <Box>
      {/* Icon and Title */}
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <AttachMoneyIcon color="primary" fontSize="large" sx={{ mr: 1 }} />
        <Typography variant="h6" fontWeight="bold">
          Accept Request
        </Typography>
      </Box>
      
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            fullWidth
            margin="normal"
            type={field.type || "text"}
            {...register(field.name, { required: `${field.label} is required` })}
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message}
          />
        ))}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Approve
        </Button>
      </form>
    </Box>
  );
};

export default AcceptRequest;
