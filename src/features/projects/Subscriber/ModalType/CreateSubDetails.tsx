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

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", 
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", 
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", 
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
];

const howYouHeardOptions = [
  "Sales Person",
  "Newspaper",
  "Billboard",
  "Referral",
  "Online",
];

interface FormInputFields {
  nationality: string;
  marital_status: string;
  occupation: string;
  place_of_work: string;
  office_address: string;
  number_of_unit_applied: number;
  how_you_heard: string;
  next_of_kin: string;
  relationship: string;
  next_of_kin_phone: string;
  next_of_kin_address: string;
  next_of_kin_email: string;
  status: string;
  preferred_payment_option: string;
}

interface CreateDetailsProps {
  id: string;
}

const CreateSubDetails: React.FC<CreateDetailsProps> = ({id}) => {
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
      { name: "marital_status", label: "Marital Status" },
      { name: "occupation", label: "Occupation" },
      { name: "place_of_work", label: "Place of Work" },
      { name: "office_address", label: "Office Address" },
      { name: "number_of_unit_applied", label: "Number of Units Applied", type: "number" },
      { name: "next_of_kin", label: "Next of Kin" },
      { name: "relationship", label: "Relationship" },
      { name: "next_of_kin_phone", label: "Next of Kin Phone", type: "tel" },
      { name: "next_of_kin_address", label: "Next of Kin Address" },
      { name: "next_of_kin_email", label: "Next of Kin Email", type: "email" },
      { name: "status", label: "Status" },
      { name: "preferred_payment_option", label: "Preferred Payment Option" },
    ];

  return (
    <div>
      <Typography variant="h6" textAlign="center" fontWeight="bold" mb={2}>
        Add Subscriber Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Nationality Dropdown */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="nationality-label">Nationality</InputLabel>
          <Select
            labelId="nationality-label"
            defaultValue=""
            {...register("nationality", { required: "Nationality is required" })}
            error={!!errors.nationality}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
          {errors.nationality && (
            <Typography color="error">{errors.nationality.message}</Typography>
          )}
        </FormControl>

        {/* How You Heard Dropdown */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="how-you-heard-label">How You Heard</InputLabel>
          <Select
            labelId="how-you-heard-label"
            defaultValue=""
            {...register("how_you_heard", { required: "This field is required" })}
            error={!!errors.how_you_heard}
          >
            {howYouHeardOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {errors.how_you_heard && (
            <Typography color="error">{errors.how_you_heard.message}</Typography>
          )}
        </FormControl>

        {/* Other Fields */}
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
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateSubDetails;
