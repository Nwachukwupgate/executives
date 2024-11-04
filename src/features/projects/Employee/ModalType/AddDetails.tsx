import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Modal, Select, MenuItem, InputLabel, FormControl, TextField } from '@mui/material';
// import { v4 as uuid } from 'uuid';

interface EmployeeForm {
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    role: string;
    access: number;
}

interface CreateEmployeeProps {
    onClose: () => void; // Function to close the modal
}

const AddDetails: React.FC<CreateEmployeeProps> = ({ onClose }) => {
    const [access, setAccess] = useState<number | ''>('');

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<EmployeeForm>();

    const fakeDepartments = [
        { id: '1', name: 'HR' },
        { id: '2', name: 'Development' },
    ];

    const fakeRoles = [
        { id: '1', name: 'Manager' },
        { id: '2', name: 'Developer' },
    ];

    const onSubmit: SubmitHandler<EmployeeForm> = async (data) => {
        const { firstName, lastName, email, department, role } = data;
        console.log({ firstName, lastName, email, department, role });
        Object.keys(data).forEach((field) => setValue(field as keyof EmployeeForm, ''));
        setAccess('');
        onClose(); // Close the modal after submission
    };

    return (
        <Modal open={true} onClose={onClose}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full viewport height
                backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background
            }}>
                <div className="flex flex-col w-full max-w-md bg-white p-4 rounded-lg">
                    <div className=''>
                        <div className="flex justify-end">
                            <p className='text-red-700 font-bold text-xl cursor-pointer' onClick={onClose}>X</p>
                        </div>
                        <h2 className='text-center text-2xl font-medium mb-4'>Create Employee</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                {...register('firstName', { required: true })}
                                label="First Name"
                                fullWidth
                                margin="normal"
                                error={Boolean(errors.firstName)}
                                helperText={errors.firstName ? 'First name is required' : ''}
                            />
                            <TextField
                                {...register('lastName', { required: true })}
                                label="Last Name"
                                fullWidth
                                margin="normal"
                                error={Boolean(errors.lastName)}
                                helperText={errors.lastName ? 'Last name is required' : ''}
                            />
                            <TextField
                                {...register('email', { required: true })}
                                label="Email"
                                type="email"
                                fullWidth
                                margin="normal"
                                error={Boolean(errors.email)}
                                helperText={errors.email ? 'Valid email is required' : ''}
                            />
                            <FormControl fullWidth margin="normal">
                            <div className='mb-2'> <InputLabel>Department</InputLabel> </div>
                                <Select
                                    {...register('department', { required: true })}
                                    label="Department"
                                    onChange={(e) => setValue('department', e.target.value as string)}
                                    error={Boolean(errors.department)}
                                >
                                    <MenuItem value="">
                                        <em>Choose a Department</em>
                                    </MenuItem>
                                    {fakeDepartments.map((dept) => (
                                        <MenuItem key={dept.id} value={dept.name}>{dept.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <div className="flex gap-x-2">
                                <FormControl fullWidth margin="normal">
                                    <div className='mb-2'> <InputLabel>Roles</InputLabel> </div>                                 
                                    <Select
                                        {...register('role', { required: true })}
                                        label="Roles"
                                        onChange={(e) => setValue('role', e.target.value as string)}
                                        error={Boolean(errors.role)}
                                    >
                                        <MenuItem value="">
                                            <em>Choose a Role</em>
                                        </MenuItem>
                                        {fakeRoles.map((role) => (
                                            <MenuItem key={role.id} value={role.name}>{role.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    {...register('access', { required: true })}
                                    label="Access Level"
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                    error={Boolean(errors.access)}
                                    helperText={errors.access ? 'Access level must be between 1 and 10' : ''}
                                    onChange={(e) => setAccess(Number(e.target.value))}
                                    value={access}
                                />
                            </div>
                            <Button type="submit" variant="contained" color="primary">Create</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddDetails;
