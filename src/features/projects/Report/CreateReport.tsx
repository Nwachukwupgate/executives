import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Modal } from "@mui/material";

interface FormInputFields {
  achievement: string;
  challenges: string;
  weeklyEngagement: string;
}

interface CreateSubProps {
  onClose: () => void;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  minWidth: 700,
  maxHeight: "90vh",
  overflowY: "auto",
};

const CreateReport: React.FC<CreateSubProps> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputFields>();

  const onSubmit: SubmitHandler<FormInputFields> = async (data) => {
    try {
      console.log(data);
      reset();
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={modalStyle}
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        className="flex flex-col gap-y-6"
      >
        <TextField
          label="Weekly Engagement"
          fullWidth
          margin="normal"
          {...register("weeklyEngagement", { required: "Weekly Engagement is required" })}
          error={!!errors.weeklyEngagement}
          helperText={errors.weeklyEngagement?.message}
        />
        <TextField
          label="Achievement"
          fullWidth
          margin="normal"
          multiline
          rows={4} // Adjust rows as needed
          {...register("achievement", { required: "Achievement is required" })}
          error={!!errors.achievement}
          helperText={errors.achievement?.message}
        />
        <TextField
          label="Challenges"
          fullWidth
          margin="normal"
          multiline
          rows={4} // Adjust rows as needed
          {...register("challenges", { required: "Challenges are required" })}
          error={!!errors.challenges}
          helperText={errors.challenges?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Approve
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateReport;
