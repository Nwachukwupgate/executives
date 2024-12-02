import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, MenuItem, Select, InputLabel, FormControl, Typography, TextField } from "@mui/material";
import Accordion from "@/common/form/Accordion";

interface FormValues {
  unit: string;
  amountPaid: number;
  balance: number;
  amount: number;
  additionalFee: number;
  totalPrice: number;
  name: string;
  additionalFeeComponent: number;
  initialDeposit: number;
  price_period: number;
  price: number
}

interface CreateDetailsProps {
  id: string;
  handleAccordionToggle: (section: string) => void;
  accordion: string;
}

const CreateSubUnit: React.FC<CreateDetailsProps> = ({ id, handleAccordionToggle, accordion }) => {
  const fakeProjects = [
    { id: "1", name: "Luxury Apartments" },
    { id: "2", name: "Downtown Office Spaces" },
    { id: "3", name: "Suburban Villas" },
    { id: "4", name: "Urban Condos" },
  ];

  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      unit: "",
      amountPaid: 0,
      balance: 0,
      amount: 0,
      additionalFee: 0,
      totalPrice: 0,
      name: "",
      additionalFeeComponent: 0,
      initialDeposit: 0,
      price_period: 0,
      price: 0,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    console.log("Form id:", id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
      <Accordion title="Subscriber Unit" isOpen={accordion === "unit"} toggleAccordion={() => handleAccordionToggle("unit")}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="project-label">Choose a Unit</InputLabel>
          <Controller
            name="unit"
            control={control}
            rules={{ required: "Please select a unit" }}
            render={({ field, fieldState }) => (
              <Select
                {...field}
                labelId="project-label"
                error={!!fieldState.error}
                defaultValue=""
              >
                <MenuItem value="" disabled>
                  Choose a Unit
                </MenuItem>
                {fakeProjects.map((project) => (
                  <MenuItem key={project.id} value={project.id}>
                    {project.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <Typography color="error">{watch("unit") === "" && "Project is required"}</Typography>
        </FormControl>

        {[
          { name: "amountPaid", label: "Amount Paid", type: "number" },
          { name: "balance", label: "Balance", type: "number" },
          { name: "amount", label: "Amount", type: "number" },
          { name: "additionalFee", label: "Additional Fee", type: "number" },
          { name: "totalPrice", label: "Total Price", type: "number" },
          { name: "name", label: "Name", type: "text" },
          { name: "additionalFeeComponent", label: "Additional Fee Component", type: "number" },
          { name: "initialDeposit", label: "Initial Deposit", type: "number" },
          { name: "price_period", label: "Price Period", type: "number" },
          { name: "price", label: "Price", type: "number" },
        ].map((field) => (
          <Controller
            key={field.name}
            name={field.name as keyof FormValues}
            control={control}
            rules={{ required: `Please enter ${field.label.toLowerCase()}` }}
            render={({ field: controllerField, fieldState }) => (
              <TextField
                {...controllerField}
                type={field.type}
                fullWidth
                label={field.label}
                margin="normal"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        ))}

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Accordion>
    </form>
  );
};

export default CreateSubUnit;
