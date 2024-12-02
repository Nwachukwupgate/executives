import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, MenuItem, Grid } from "@mui/material";

interface FormValues {
  duration: string;
  interest: number;
  maturityDate: string;
  name: string;
  principal: number;
  rate: number;
  startDate: string;
  type: string;
}

const InvestmentPage: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      duration: "",
      interest: 0,
      maturityDate: "",
      name: "",
      principal: 0,
      rate: 0,
      startDate: "",
      type: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-6 mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                {/* Name */}
                <Grid item xs={12}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: "Name is required" }}
                        render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Name"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                        )}
                    />
                </Grid>

                {/* Start Date */}
                <Grid item xs={12}>
                    <Controller
                        name="startDate"
                        control={control}
                        rules={{ required: "Start Date is required" }}
                        render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            type="date"
                            fullWidth
                            label="Start Date"
                            InputLabelProps={{ shrink: true }}
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                        )}
                    />
                </Grid>

                {/* Duration */}
                <Grid item xs={12}>
                    <Controller
                        name="duration"
                        control={control}
                        rules={{ required: "Duration is required" }}
                        render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Duration"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                        )}
                    />
                </Grid>

                {/* Interest */}
                <Grid item xs={12}>
                    <Controller
                        name="interest"
                        control={control}
                        rules={{ required: "Interest is required", min: 0 }}
                        render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            type="number"
                            fullWidth
                            label="Interest"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                        )}
                    />
                </Grid>

                {/* Maturity Date */}
                <Grid item xs={12}>
                    <Controller
                        name="maturityDate"
                        control={control}
                        rules={{ required: "Maturity Date is required" }}
                        render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            type="date"
                            fullWidth
                            label="Maturity Date"
                            InputLabelProps={{ shrink: true }}
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                        )}
                    />
                </Grid>

                {/* Principal */}
                <Grid item xs={12}>
                    <Controller
                        name="principal"
                        control={control}
                        rules={{ required: "Principal is required", min: 0 }}
                        render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            type="number"
                            fullWidth
                            label="Principal"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                        )}
                    />
                </Grid>

                {/* Rate */}
                <Grid item xs={12}>
                <Controller
                    name="rate"
                    control={control}
                    rules={{ required: "Rate is required", min: 0 }}
                    render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        type="number"
                        fullWidth
                        label="Rate"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                    />
                    )}
                />
                </Grid>               

                {/* Type */}
                <Grid item xs={12}>
                <Controller
                    name="type"
                    control={control}
                    rules={{ required: "Type is required" }}
                    render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        select
                        fullWidth
                        label="Type"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                    >
                        <MenuItem value="fixed">Fixed</MenuItem>
                        <MenuItem value="variable">Variable</MenuItem>
                    </TextField>
                    )}
                />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Submit
                </Button>
                </Grid>
            </Grid>
        </form>
    </div>
  );
};

export default InvestmentPage;
