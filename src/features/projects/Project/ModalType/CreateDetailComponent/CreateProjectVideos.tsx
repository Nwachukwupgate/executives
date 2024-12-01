import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormField from "@/common/form/FormField";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@/common/form/Accordion";


interface FormValues {
  videos: {
    video_name: string;
    video_link: string;
  }[];
}

interface CreateDetailsProps {
    id: string;
    handleAccordionToggle: (section: string) => void;
    accordion: string;
}

const CreateProjectVideos: React.FC<CreateDetailsProps> = ({ id, handleAccordionToggle, accordion }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      videos: [
        {
          video_name: "",
          video_link: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "videos",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Photo Data:", data);
    console.log("id", id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
    <Accordion title="Project Videos" isOpen={accordion === "videos"} toggleAccordion={() => handleAccordionToggle("videos")}>
      {/* <h2 className="text-lg font-semibold">Project Videos</h2> */}

      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 border p-4 rounded-lg bg-white shadow">
          {/* Photo Name Field */}
          <FormField
            control={control}
            name={`videos.${index}.video_name`}
            label="Video Name"
            placeholder="e.g., Main Entrance Video"
          />
          {/* File Upload Field */}
          <FormField
            control={control}
            name={`videos.${index}.video_link`}
            label="Video Link"
            placeholder="e.g., https://www.youtube.com/video"
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
          onClick={() => append({ video_name: "", video_link: "" })}
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

export default CreateProjectVideos;
