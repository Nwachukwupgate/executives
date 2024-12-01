import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormField from "@/common/form/FormField";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@/common/form/Accordion";


interface FormValues {
  photos: {
    photo_name: string;
    photo: File | null;
  }[];
}

interface CreateDetailsProps {
    id: string;
    handleAccordionToggle: (section: string) => void;
    accordion: string;
}

const CreateProjectLandmark: React.FC<CreateDetailsProps> = ({ id, handleAccordionToggle, accordion }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      photos: [
        {
          photo_name: "",
          photo: null,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "photos",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Photo Data:", data);
    console.log("id", id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
    <Accordion title="Project Landmark" isOpen={accordion === "landmark"} toggleAccordion={() => handleAccordionToggle("landmark")}>
      {/* <h2 className="text-lg font-semibold">Project Landmark</h2> */}

      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 border p-4 rounded-lg bg-white shadow">
          {/* Photo Name Field */}
          <FormField
            control={control}
            name={`photos.${index}.photo_name`}
            label="Photo Name"
            placeholder="e.g., Main Entrance"
          />
          {/* File Upload Field */}
          <FormField
            control={control}
            name={`photos.${index}.photo`}
            label="Upload Photo"
            type="file"
            accept="image/*"
            isFile={true}
          />
          {/* Remove Button */}
          <Button
            variant="text"
            color="error"
            onClick={() => remove(index)}
            startIcon={<FontAwesomeIcon icon={faTrash} />}
          >
            Remove
          </Button>
        </div>
      ))}

      <div className="flex justify-between mt-4">
        {/* Add More Button */}
        <Button
          variant="outlined"
          onClick={() => append({ photo_name: "", photo: null })}
          startIcon={<FontAwesomeIcon icon={faCirclePlus} />}
        >
          Add More
        </Button>
        {/* Submit Button */}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
      </Accordion>
    </form>
  );
};

export default CreateProjectLandmark;
