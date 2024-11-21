import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Accordion from "@/common/form/Accordion";
import FormField from "@/common/form/FormField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

interface FormValues {
  career: {
    training_name: string;
    date: string;
    duration: string;
    facilitator: string;
    venue: string;
    document_namec: string;
  }[];
}

interface CreateCareerDevelopmentProps {
  handleAccordionToggle: (section: string) => void;
  accordion: string;
}

const CreateCareerDevelopment: React.FC<CreateCareerDevelopmentProps> = ({
  handleAccordionToggle,
  accordion,
}) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      career: [
        {
          training_name: "",
          date: "",
          duration: "",
          facilitator: "",
          venue: "",
          document_namec: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "career",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Career Development Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
      <Accordion
        title="Employment Career Development"
        isOpen={accordion === "dev"}
        toggleAccordion={() => handleAccordionToggle("dev")}
      >
        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-2 gap-x-4 space-y-2">
            <FormField
              control={control}
              name={`career.${index}.training_name`}
              label="Training Name"
              placeholder="God Made Homes"
            />
            <FormField
              control={control}
              name={`career.${index}.date`}
              label="Date"
              type="date"
            />
            <FormField
              control={control}
              name={`career.${index}.duration`}
              label="Duration"
              placeholder="3 Years"
            />
            <FormField
              control={control}
              name={`career.${index}.facilitator`}
              label="Facilitator"
              placeholder="Mr. Yemi Aristotle"
            />
            <FormField
              control={control}
              name={`career.${index}.venue`}
              label="Venue"
              placeholder="23B Ebisine Way"
            />
            <FormField
              control={control}
              name={`career.${index}.document_namec`}
              label="Upload Certificate"
              type="file"
              accept=".pdf,.doc"
            />
            <Button
              variant="text"
              color="error"
              onClick={() => remove(index)}
              className="mt-2"
            >
              Remove
            </Button>
          </div>
        ))}
        <div className="mt-6 flex justify-between">
          <Button
            variant="outlined"
            onClick={() =>
              append({
                training_name: "",
                date: "",
                duration: "",
                facilitator: "",
                venue: "",
                document_namec: "",
              })
            }
            startIcon={<FontAwesomeIcon icon={faCirclePlus} />}
          >
            Add More
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Accordion>
    </form>
  );
};

export default CreateCareerDevelopment;
