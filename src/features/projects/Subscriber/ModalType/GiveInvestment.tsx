import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Typography,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

interface FormInputFields {
  project: string;
  amountInvested: number;
}

interface GiveInvestmentProps {
    id: string;
}

const projects = [
  "Project Alpha",
  "Project Beta",
  "Project Gamma",
  "Project Delta",
  "Project Epsilon",
];

const GiveInvestment: React.FC<GiveInvestmentProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputFields>();

  const onSubmit: SubmitHandler<FormInputFields> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Typography variant="h6" textAlign="center" fontWeight="bold" mb={2}>
        Invest in a Project
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Project Selection */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="project-label">Select a Project</InputLabel>
          <Select
            labelId="project-label"
            defaultValue=""
            {...register("project", { required: "Please select a project" })}
            error={!!errors.project}
          >
            {projects.map((project) => (
              <MenuItem key={project} value={project}>
                {project}
              </MenuItem>
            ))}
          </Select>
          {errors.project && (
            <Typography color="error">{errors.project.message}</Typography>
          )}
        </FormControl>

        {/* Amount Invested */}
        <TextField
          label="Amount Invested"
          fullWidth
          margin="normal"
          type="number"
          {...register("amountInvested", {
            required: "Please enter the investment amount",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "Amount must be greater than zero",
            },
          })}
          error={!!errors.amountInvested}
          helperText={errors.amountInvested?.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit Investment
        </Button>
      </form>
    </div>
  );
};

export default GiveInvestment;
