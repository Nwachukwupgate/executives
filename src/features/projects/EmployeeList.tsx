import SelectTable from "@/common/table/CheckBoxTable";
import PaginationWrapper from "@/common/table/PaginationWrapper";
import TableLimit from "@/common/table/TableLimit";
import TablePagination from "@/common/table/TablePagination";
import AppMenuWrapper from "@/common/utilities/AppMenuWrapper";
import { Button } from "@mui/material";
import { useState } from "react";
import employeeColumns from "./column/employee.column";
import Modal from "./Employee/EmployeeModal";
import EditIcon from "@/common/icons/pack/EditIcon";
import FilterIcon from "@/common/icons/pack/FilterIcon";
import CreateEmployee from "./Employee/CreateEmployee";

const data: employeeType[]  = [
    {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        department: "Engineering",
        role: "Developer",
    },
    {
        id: "2",
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        department: "Design",
        role: "Designer",
    },
    {
        id: "3",
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        department: "Marketing",
        role: "Marketer",
    },
];

type EmployeesProps = {};
const EmployeeList: React.FC<EmployeesProps> = () => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [modalType, setModalType] = useState<string | null>(null);
    const [employeeId, setEmployeeId] = useState<string | null>(null);
    const [isCreateEmployeeModalOpen, setIsCreateEmployeeModalOpen] = useState(false); // New state for the Create Employee modal

    
    const handleOpenModal = (id: string, type: string) => {
      setEmployeeId(id);
      setModalType(type);
    };

    const columns = employeeColumns(handleOpenModal);
  
    return (
      <div>
        <div className="flex w-full flex-col xl:flex-row xl:items-center gap-4 py-4 xl:basis-1/2 xl:justify-between">
          <div className="w-full flex flex-col gap-4 xl:flex-row">
            <AppMenuWrapper
              className="grid w-full place-items-center xl:w-auto"
              header={
                <div className="flex items-center justify-center gap-2 p-2 px-6">
                  <span>
                    <FilterIcon />
                  </span>
                  <span>Filter</span>
                </div>
              }
            />
            <AppMenuWrapper
              className="grid w-full place-items-center xl:w-auto"
              header={
                <div className="flex items-center justify-center gap-2 p-2 px-6">
                    <span>
                    <EditIcon />
                    </span>
                    <span>Edit</span>
                </div>
              }
            />
          </div>
  
          <div className="flex items-center gap-4 justify-between">
            <Button
              className="font-bold w-40"
              color="secondary"
              onClick={() => setIsCreateEmployeeModalOpen(true)} // Open Create Employee modal
            >
              Create Employee
            </Button>
          </div>
        </div>
        <div className="pt-10">
          <SelectTable
            columns={columns}
            data={data}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <PaginationWrapper>
          <TableLimit callback={() => null} total={10} />
          <TablePagination currentPage={2} totalPages={10} onChange={() => null} />
        </PaginationWrapper>

        {isCreateEmployeeModalOpen && (
          <CreateEmployee // Show the Create Employee modal
            onClose={() => setIsCreateEmployeeModalOpen(false)} // Function to close the modal
          />
        )}
  
        {/* Modal Component */}
        {modalType && employeeId && (
          <Modal
            type={modalType}
            employeeId={employeeId}
            onClose={() => {
              setModalType(null);
              setEmployeeId(null);
            }}
          />
        )}
      </div>
    );
  };
  
export default EmployeeList;
