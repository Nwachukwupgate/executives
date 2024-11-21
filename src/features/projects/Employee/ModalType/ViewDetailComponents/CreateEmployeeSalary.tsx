import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormField from "@/common/form/FormField";
import Accordion from "@/common/form/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

interface SalaryFormValues {
  salary: {
    salary_advance: number;
    salary_balance: number;
  }[];
}

interface EmployeeSalaryProps {
  handleAccordionToggle: (section: string) => void;
  accordion: string;
}

const CreateEmployeeSalary: React.FC<EmployeeSalaryProps> = ({ handleAccordionToggle, accordion }) => {
  const { control, handleSubmit } = useForm<SalaryFormValues>({
    defaultValues: {
      salary: [
        {
          salary_advance: 0,
          salary_balance: 0,
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "salary",
  });

  const onSubmit = (data: SalaryFormValues) => {
    console.log("Submitted Salary Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
      <Accordion
        title="Employee Salary"
        isOpen={accordion === "salary"}
        toggleAccordion={() => handleAccordionToggle("salary")}
      >
        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-2 gap-x-4">
            <FormField
              control={control}
              name={`salary.${index}.salary_advance`}
              label="Salary Advance"
              type="number"
              placeholder="e.g., 20000"
            />
            <FormField
              control={control}
              name={`salary.${index}.salary_balance`}
              label="Salary Balance"
              type="number"
              placeholder="e.g., 20000"
            />
          </div>
        ))}

        <div className="mt-6 flex justify-between">
          <Button
            variant="outlined"
            onClick={() =>
              append({
                salary_advance: 0,
                salary_balance: 0,
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

export default CreateEmployeeSalary;
