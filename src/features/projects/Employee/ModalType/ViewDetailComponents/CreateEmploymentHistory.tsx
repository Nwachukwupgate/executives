import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormField from "@/common/form/FormField";
import Accordion from "@/common/form/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

interface FormValues {
  history: {
    name_of_company: string;
    role: string;
    start_date: string;
    end_date: string;
  }[];
}

interface EmploymentHistoryProps {
  handleAccordionToggle: (section: string) => void;
  accordion: string;
}

const CreateEmploymentHistory: React.FC<EmploymentHistoryProps> = ({ handleAccordionToggle, accordion }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      history: [
        {
          name_of_company: "",
          role: "",
          start_date: "",
          end_date: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "history",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Employment History:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
      <Accordion
        title="Employment History"
        isOpen={accordion === "history"}
        toggleAccordion={() => handleAccordionToggle("history")}
      >
        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name={`history.${index}.name_of_company`}
              label="Company Name"
              placeholder="e.g., God Made Homes"
            />
            <FormField
              control={control}
              name={`history.${index}.role`}
              label="Role"
              placeholder="e.g., Sales Manager"
            />
            <FormField
              control={control}
              name={`history.${index}.start_date`}
              label="Start Date"
              type="date"
            />
            <FormField
              control={control}
              name={`history.${index}.end_date`}
              label="End Date"
              type="date"
            />
          </div>
        ))}
        <div className="mt-6 flex justify-between">
          <Button
            variant="outlined"
            onClick={() =>
              append({
                name_of_company: "",
                role: "",
                start_date: "",
                end_date: "",
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

export default CreateEmploymentHistory;
