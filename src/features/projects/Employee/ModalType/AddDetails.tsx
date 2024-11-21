import React, { useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

interface FormValues {
  salary: number;
  currentLoanRepayment: number;
  resumptionDate: string;
  gender: string;
  maritalStatus: string;
  state: string;
  city: string;
  street: string;
  phone: string;
  dateOfBirth: string;
  numberOfChildren: number;
  numberOfDependent: number;
  nationality: string;
  stateOfOrigin: string;
  lgaOfOrigin: string;
  accountName: string;
  accountNumber: string;
  file: File | null;
}

const AddEmployees: React.FC = () => {
  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();
  const [_, setOpen] = useState(false);
  const [fileName, setFileName] = useState<string>("");


//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setValue('file', file);
    }
  };

  const cancelFile = () => {
    setFileName("");
    setValue('file', null);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
    handleClose();
  };

  return (   
    <Box>
        <Typography variant="h6" component="h2" marginBottom={2}>
            Employee Details Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4'>
        <TextField
            label="Salary"
            fullWidth
            margin="normal"
            type="number"
            {...register('salary', { required: true })}
        />
        <TextField
            label="Loan Repayment"
            fullWidth
            margin="normal"
            type="number"
            {...register('currentLoanRepayment', { required: true })}
        />
        <TextField
            label="Resumption Date"
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
            {...register('resumptionDate', { required: true })}
        />
        <FormControl fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select {...register('gender', { required: true })} defaultValue="">
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="intersex">Intersex</MenuItem>
            <MenuItem value="trans">Trans</MenuItem>
            <MenuItem value="non-conforming">Non Conforming</MenuItem>
            <MenuItem value="personal">Personal</MenuItem>
            <MenuItem value="eunuch">Eunuch</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
            <InputLabel>Marital Status</InputLabel>
            <Select {...register('maritalStatus', { required: true })} defaultValue="">
            <MenuItem value="married">Married</MenuItem>
            <MenuItem value="single">Single</MenuItem>
            <MenuItem value="divorced">Divorced</MenuItem>
            <MenuItem value="notSay">Not to Say</MenuItem>
            </Select>
        </FormControl>
        <TextField
            label="State"
            fullWidth
            margin="normal"
            {...register('state', { required: true })}
        />
        <TextField
            label="City"
            fullWidth
            margin="normal"
            {...register('city', { required: true })}
        />
        <TextField
            label="Street"
            fullWidth
            margin="normal"
            {...register('street', { required: true })}
        />
        <TextField
            label="Phone"
            fullWidth
            margin="normal"
            type="tel"
            {...register('phone', { required: true })}
        />
        <TextField
            label="Date of Birth"
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
            {...register('dateOfBirth', { required: true })}
        />
        <TextField
            label="No. of Children"
            fullWidth
            margin="normal"
            type="number"
            {...register('numberOfChildren', { required: true })}
        />
        <TextField
            label="No. of Dependent"
            fullWidth
            margin="normal"
            type="number"
            {...register('numberOfDependent', { required: true })}
        />
        <TextField
            label="Nationality"
            fullWidth
            margin="normal"
            {...register('nationality', { required: true })}
        />
        <TextField
            label="State of Origin"
            fullWidth
            margin="normal"
            {...register('stateOfOrigin', { required: true })}
        />
        <TextField
            label="LGA of Origin"
            fullWidth
            margin="normal"
            {...register('lgaOfOrigin', { required: true })}
        />
        <TextField
            label="Account Name"
            fullWidth
            margin="normal"
            {...register('accountName', { required: true })}
        />
        <TextField
            label="Account Number"
            fullWidth
            margin="normal"
            type="number"
            {...register('accountNumber', { required: true })}
        />

        <Box
            sx={{
            width: '100%',
            bgcolor: '#F4F0EB',
            borderRadius: 1,
            mt: 2,
            p: 2,
            textAlign: 'center',
            }}
        >
            {fileName === "" ? (
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed gray',
                p: 2,
                borderRadius: 1,
                }}
            >
                <Typography variant="body2" color="textSecondary">
                Upload Employee's Image
                </Typography>
                <label htmlFor="file-upload">
                <input
                    id="file-upload"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    sx={{ mt: 1 }}
                >
                    Browse
                </Button>
                </label>
            </Box>
            ) : (
            <Typography variant="body2">
                Attached file: <b>{fileName}</b>{" "}
                <Button
                variant="text"
                color="error"
                onClick={cancelFile}
                sx={{ textTransform: 'none' }}
                >
                Remove
                </Button>
            </Typography>
            )}
        </Box>

        <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
        </Button>
        </form>
    </Box>

  );
};

export default AddEmployees;
