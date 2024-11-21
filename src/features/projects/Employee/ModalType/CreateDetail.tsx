import React, { useState } from "react";
import CreateNextOfKin from "./ViewDetailComponents/CreateNextOfKin";
import CreateMedicalReport from "./ViewDetailComponents/CreateMedicalReport";
import CreateEmployeeSanction from "./ViewDetailComponents/CreateEmployeeSanction";
import CreateEmployeeSalary from "./ViewDetailComponents/CreateEmployeeSalary";
import CreateEmploymentHistory from "./ViewDetailComponents/CreateEmploymentHistory";
import CreateCareerDevelopment from "./ViewDetailComponents/CreateCareerDevelopment";
import CreateAcademicRecord from "./ViewDetailComponents/CreateAcademicRecord";

interface CreateDetailsProps {
  id: string;
}

const CreateDetail: React.FC<CreateDetailsProps> = ({ id }) => {
  const [accordion, setAccordion] = useState<string>("medical");
  
  const handleAccordionToggle = (section: string) => {
    setAccordion(accordion === section ? "" : section);
  };
  return (
    <>
        <CreateMedicalReport id={id} handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateNextOfKin handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateEmployeeSanction handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateEmployeeSalary handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateEmploymentHistory handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateCareerDevelopment handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
        <CreateAcademicRecord handleAccordionToggle={handleAccordionToggle} accordion={accordion} />
    </>
  );
};

export default CreateDetail;
