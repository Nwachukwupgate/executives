import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormField from "@/common/form/FormField";
import Accordion from "@/common/form/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

interface FormValues {
  kin: {
    next_of_kin_fullname: string;
    relationship: string;
    kin_address: string;
    phone: string;
    email: string;
    occupation: string;
    office_address: string;
  }[];
}

interface CreateNextOfKinProps {
  handleAccordionToggle: (section: string) => void;
  accordion: string;
}

const CreateNextOfKin: React.FC<CreateNextOfKinProps> = ({ handleAccordionToggle, accordion }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      kin: [
        {
          next_of_kin_fullname: "",
          relationship: "",
          kin_address: "",
          phone: "",
          email: "",
          occupation: "",
          office_address: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "kin",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Next of Kin Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
      <Accordion title="Employee Next of Kin" isOpen={accordion === "kin"} toggleAccordion={() => handleAccordionToggle("kin")}>
        {fields.map((field, index) => (
          <div key={field.id}>
            <FormField
              control={control}
              name={`kin.${index}.next_of_kin_fullname`}
              label="Kin Full Name"
            />
            <FormField
              control={control}
              name={`kin.${index}.relationship`}
              label="Relationship"
            />
            <FormField
              control={control}
              name={`kin.${index}.kin_address`}
              label="Next of Kin Address"
            />
            <FormField
              control={control}
              name={`kin.${index}.phone`}
              label="Phone Number"
            />
            <FormField
              control={control}
              name={`kin.${index}.email`}
              label="Email"
            />
            <FormField
              control={control}
              name={`kin.${index}.occupation`}
              label="Occupation"
            />
            <FormField
              control={control}
              name={`kin.${index}.office_address`}
              label="Office Address"
            />
          </div>
        ))}
        <div className="mt-6 flex justify-between">
          <Button
            variant="outlined"
            onClick={() =>
              append({
                next_of_kin_fullname: "",
                relationship: "",
                kin_address: "",
                phone: "",
                email: "",
                occupation: "",
                office_address: "",
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

export default CreateNextOfKin;
