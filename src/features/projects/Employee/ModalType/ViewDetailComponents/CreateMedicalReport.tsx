import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "@/common/form/FormField";
import Accordion from "@/common/form/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

interface FormValues {
    [key: string]: string | undefined;
}

interface CreateDetailsProps {
    id: string;
    handleAccordionToggle: (section: string) => void;
    accordion: string;
  }

const CreateMedicalReport: React.FC<CreateDetailsProps> = ({ id, handleAccordionToggle, accordion }) => {
    const { control, handleSubmit, setValue } = useForm<FormValues>();
    const [inputFields, setInputFields] = useState<{ document: File | null; document_name: string }[]>([{ document: null, document_name: "" }]);

    const handleFormChange = (index: number, event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        const updatedFields = [...inputFields];
        if (fieldName === "document") {
        updatedFields[index].document = event.target.files ? event.target.files[0] : null;
        updatedFields[index].document_name = event.target.files ? event.target.files[0].name : "";
        } else {
        setValue(`${fieldName}_${index}`, event.target.value); // Update form state
        }
        setInputFields(updatedFields);
    };

    const addFields = () => {
        setInputFields([...inputFields, { document: null, document_name: "" }]);
    };

    const handleReset = (index: number) => {
        const updatedFields = [...inputFields];
        updatedFields[index].document = null;
        updatedFields[index].document_name = "";
        setInputFields(updatedFields);
    };

    const onSubmit = (data: FormValues) => {
      console.log(id)
        console.log("Submitted Data:", data);
    };


    return(
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 py-5 bg-gray-50 space-y-6">
      <Accordion title="Employee Medical" isOpen={accordion === "medical"} toggleAccordion={() => handleAccordionToggle("medical")}>
        {inputFields.map((input, index) => (
          <div key={index}>
            <FormField
              control={control}
              name={`medical_checkup_date_${index}`} // Dynamic name
              label="Date of Last Medical Checkup"
              type="date"
            />
            <FormField
              control={control}
              name={`hospital_conducted_${index}`} // Dynamic name
              label="Hospital Conducted"
            />
            <FormField
              control={control}
              name={`genotype_${index}`} // Dynamic name
              label="Genotype"
            />
            <FormField
              control={control}
              name={`bloodgroup_${index}`} // Dynamic name
              label="Blood Group"
            />
            <FormField
              control={control}
              name={`reason_for_checkup_${index}`} // Dynamic name
              label="Reason for Medical Checkup"
              type="textarea"
            />
            <div className="block w-full bg-[#F4F0EB] rounded-md mt-2">
              {input.document_name === "" ? (
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="text-center">
                    <label
                      htmlFor={`document_${index}`}
                      className="relative cursor-pointer bg-white rounded-md font-medium text-[#f49038] hover:text-[#f49038]"
                    >
                      <span>Upload Hospital File</span>
                      <input
                        id={`document_${index}`}
                        name={`document_${index}`}
                        type="file"
                        onChange={(event) => handleFormChange(index, event, "document")}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <div>
                  <p>
                    <span>Attached file: </span>
                    <span className="font-bold">{input.document_name}</span>
                    <span className="text-red-700 ml-4 cursor-pointer" onClick={() => handleReset(index)}>
                      X
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="mt-6 flex justify-between">
          <Button variant="outlined" onClick={addFields} startIcon={<FontAwesomeIcon icon={faCirclePlus} />}>
            Add More
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </div>
      </Accordion>
    </form>
    );
};

export default CreateMedicalReport;

