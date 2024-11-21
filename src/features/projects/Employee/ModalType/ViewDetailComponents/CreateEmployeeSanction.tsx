import React, { useState } from "react";
import { useForm, useFieldArray, useFormContext } from "react-hook-form";
import Accordion from "@/common/form/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import SelectTextarea from "@/common/form/SelectTextarea"; // Import the SelectTextarea component

interface FormValues {
  sanctions: {
    description: string;
  }[];
}

interface CreateEmployeeSanctionProps {
  handleAccordionToggle: (section: string) => void;
  accordion: string;
}

const CreateEmployeeSanction: React.FC<CreateEmployeeSanctionProps> = ({ handleAccordionToggle, accordion }) => {
  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      sanctions: [
        {
          description: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "sanctions",
  });

  const [sancLoad, setSancLoad] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Employee Sanction Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
      <Accordion title="Employee Sanction" isOpen={accordion === "sanction"} toggleAccordion={() => handleAccordionToggle("sanction")}>
        {fields.map((field, index) => (
          <div key={field.id}>
            {/* Using SelectTextarea component here */}
            <SelectTextarea
              name={`sanctions.${index}.description`}
              value={field.description}
              onChange={(e) => {
                setValue(`sanctions.${index}.description`, e.target.value);  // Directly use setValue from useForm
              }}
              rows={4}
              placeholder="Write sanction description here..."
            />
          </div>
        ))}
        <div className="mt-6 flex justify-between">
          <Button
            variant="outlined"
            onClick={() =>
              append({
                description: "",
              })
            }
            startIcon={<FontAwesomeIcon icon={faCirclePlus} />}
          >
            Add More
          </Button>
          <Button variant="contained" color="primary" type="submit" disabled={sancLoad}>
            {sancLoad ? 'Adding...' : 'Add'}
          </Button>
        </div>
      </Accordion>
    </form>
  );
};

export default CreateEmployeeSanction;
