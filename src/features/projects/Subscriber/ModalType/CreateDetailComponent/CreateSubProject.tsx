import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, MenuItem, Select, InputLabel, FormControl, Typography } from "@mui/material";
import Accordion from "@/common/form/Accordion";


interface FormValues {
  project: string;
}

interface CreateDetailsProps {
    id: string;
    handleAccordionToggle: (section: string) => void;
    accordion: string;
}

const CreateSubProject: React.FC<CreateDetailsProps> = ({ id, handleAccordionToggle, accordion }) => {
  // Fake project data
  const fakeProjects = [
    { id: "1", name: "Luxury Apartments" },
    { id: "2", name: "Downtown Office Spaces" },
    { id: "3", name: "Suburban Villas" },
    { id: "4", name: "Urban Condos" },
  ];

  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      project: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Selected Project ID:", data.project);
    console.log("Selected Project ID:", id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
        <Accordion title="Subscriber Project" isOpen={accordion === "project"} toggleAccordion={() => handleAccordionToggle("project")}>
            <FormControl fullWidth margin="normal">
                <InputLabel id="project-label">Choose a Project</InputLabel>
                <Controller
                name="project"
                control={control}
                rules={{ required: "Please select a project" }}
                render={({ field, fieldState }) => (
                    <Select
                    {...field}
                    labelId="project-label"
                    error={!!fieldState.error}
                    defaultValue=""
                    >
                    <MenuItem value="" disabled>
                        Choose a Project
                    </MenuItem>
                    {fakeProjects.map((project) => (
                        <MenuItem key={project.id} value={project.id}>
                        {project.name}
                        </MenuItem>
                    ))}
                    </Select>
                )}
                />
                <Typography color="error">{watch("project") === "" && "Project is required"}</Typography>
            </FormControl>

            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
      </Accordion>
    </form>
  );
};

export default CreateSubProject;
