import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Accordion from "@/common/form/Accordion";
import FormField from "@/common/form/FormField";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

interface FormValues {
  academics: {
    school_name: string;
    start_date: string;
    end_date: string;
    qualification_title: string;
    document: File | null;
  }[];
}

interface CreateAcademicProps {
  handleAccordionToggle: (section: string) => void;
  accordion: string;
}

const CreateAcademicRecord: React.FC<CreateAcademicProps> = ({ handleAccordionToggle, accordion }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      academics: [
        {
          school_name: "",
          start_date: "",
          end_date: "",
          qualification_title: "",
          document: null,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "academics",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Academic Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
      <Accordion
        title="Academic"
        isOpen={accordion === "academic"}
        toggleAccordion={() => handleAccordionToggle("academic")}
      >
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-4">
            <FormField
              control={control}
              name={`academics.${index}.school_name`}
              label="School Name"
              placeholder="e.g., Droomwork University"
            />
            <FormField
              control={control}
              name={`academics.${index}.start_date`}
              label="Start Date"
              type="date"
            />
            <FormField
              control={control}
              name={`academics.${index}.end_date`}
              label="End Date"
              type="date"
            />
            <FormField
              control={control}
              name={`academics.${index}.qualification_title`}
              label="Qualification Title"
              placeholder="e.g., B.Sc"
            />
            <FormField
              control={control}
              name={`academics.${index}.document`}
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
                school_name: "",
                start_date: "",
                end_date: "",
                qualification_title: "",
                document: null,
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

export default CreateAcademicRecord;
