import Download from "@/common/icons/pack/Download";
import EditIcon from "@/common/icons/pack/EditIcon";
import FilterIcon from "@/common/icons/pack/FilterIcon";
import SelectTable from "@/common/table/CheckBoxTable";
import PaginationWrapper from "@/common/table/PaginationWrapper";
import TableLimit from "@/common/table/TableLimit";
import TablePagination from "@/common/table/TablePagination";
import AppMenuWrapper from "@/common/utilities/AppMenuWrapper";
import { Button } from "@mui/material";
import { useState } from "react";
import contractorColumn from "./column/contractor.column";
import CreateContractor from "./Contractor/CreateContractor";

const data: contractType[] = [
  {
    id: "CTR001",
    contractorAddress: "123 Main Street, Springfield",
    contractorServiceLine: "Electrical",
    email: "contractor1@example.com",
    nameOfCompany: "Springfield Electrical Ltd.",
    nameOfPrincipal: "John Doe",
    phone: "+1234567890",
  },
  {
    id: "CTR002",
    contractorAddress: "456 Elm Street, Metropolis",
    contractorServiceLine: "Plumbing",
    email: "contractor2@example.com",
    nameOfCompany: "Metropolis Plumbing Co.",
    nameOfPrincipal: "Jane Smith",
    phone: "+9876543210",
  },
  {
    id: "CTR003",
    contractorAddress: "789 Oak Street, Gotham",
    contractorServiceLine: "Construction",
    email: "contractor3@example.com",
    nameOfCompany: "Gotham Builders",
    nameOfPrincipal: "Bruce Wayne",
    phone: "+1928374650",
  },
];

type ContractorProps = {};
const ContractorList: React.FC<ContractorProps> = ({}) => {
  const [selected, setSelected] = useState({});
  const [isCreateContractorModalOpen, setIsCreateContractorModalOpen] = useState(false); 

  const columns = contractorColumn();
  return (
    <div>
      <div className="flex w-ful flex-col xl:flex-row xl:items-center gap-4 py-4 xl:basis-1/2 xl:justify-between">
        <div className="w-full flex flex-col gap-4  xl:flex-row">
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
          ></AppMenuWrapper>
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
          ></AppMenuWrapper>
        </div>

        <div className="flex items-center gap-4 justify-between ">
          <Button className="font-bold w-40" color="secondary" onClick={() => setIsCreateContractorModalOpen(true)}>
            Create Contractor
          </Button>
          <Download />
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

        <TablePagination
          currentPage={2}
          totalPages={10}
          onChange={() => null}
        />
      </PaginationWrapper>

      {isCreateContractorModalOpen && (
          <CreateContractor 
            onClose={() => setIsCreateContractorModalOpen(false)} 
          />
      )}
    </div>
  );
};

export default ContractorList;
