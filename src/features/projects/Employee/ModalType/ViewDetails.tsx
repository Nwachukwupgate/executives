import { employeeData } from "@/databank/employee"
import Sanctions from "./DetailsComponents/Sanctions";
import SalaryAdvances from "./DetailsComponents/SalaryAdvances";
import EmploymentHistory from "./DetailsComponents/EmploymentHistory";
import EmployeeProfile from "./DetailsComponents/EmployeeProfile";
import CareerDevelopment from "./DetailsComponents/CareerDevelopment";
import AcademicBackground from "./DetailsComponents/AcademicBackground";


const ViewDetails: React.FC = () => { 
  return (   
    <div className="container mx-auto p-6">
      <EmployeeProfile employee={employeeData} />
      <Sanctions sanctions={employeeData.employee_sanctions} />
      <SalaryAdvances advances={employeeData.employee_salary_advances} />
      <EmploymentHistory histories={employeeData.employee_employment_histories} />
      <CareerDevelopment careers={employeeData.employee_careers} />
      <AcademicBackground academics={employeeData.employee_academics} />
    </div>
  );
};

export default ViewDetails;
