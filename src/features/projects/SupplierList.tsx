import { Button } from "@mui/material";
import EditIcon from "@/common/icons/pack/EditIcon";
import FilterIcon from "@/common/icons/pack/FilterIcon";
import SelectTable from "@/common/table/CheckBoxTable";
import PaginationWrapper from "@/common/table/PaginationWrapper";
import TableLimit from "@/common/table/TableLimit";
import TablePagination from "@/common/table/TablePagination";
import AppMenuWrapper from "@/common/utilities/AppMenuWrapper";
import { useState } from "react";
import supplierColumns from "./column/supplier.colum";
import CreateSupplier from "./Supplier/CreateSupplier";

const data: supplierType[] = [
  {
    id: "SUP1234",
    name: "John Goodnews Osonwa",
    address: "123 Supplier Street",
    email: "john.osonwa@example.com",
    phoneNumber: "123-456-7890",
    material: ["Electrical fittings", "Cables"],
    orderDate: new Date().toISOString(),
  },
  {
    id: "SUP5678",
    name: "Jane Doe",
    address: "456 Supplier Avenue",
    email: "jane.doe@example.com",
    phoneNumber: "987-654-3210",
    material: ["Wood", "Nails"],
    orderDate: new Date().toISOString(),
  },
  {
    id: "SUP91011",
    name: "Supplier Three",
    address: "789 Supplier Road",
    email: "supplier.three@example.com",
    phoneNumber: "555-123-4567",
    material: ["Concrete", "Steel"],
    orderDate: new Date().toISOString(),
  }
];

type SupplierProps = {};
const SupplierList: React.FC<SupplierProps> = ({}) => {
  const [selected, setSelected] = useState({});
  const [isCreateSupplierModalOpen, setIsCreateSupplierModalOpen] = useState(false); 


  const columns = supplierColumns();
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
          <Button
            className="font-bold w-40"
            color="secondary"
            onClick={() => setIsCreateSupplierModalOpen(true)} // Open Create Employee modal
          >
            Create Supplier
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

        <TablePagination
          currentPage={2}
          totalPages={10}
          onChange={() => null}
        />
      </PaginationWrapper>

      {isCreateSupplierModalOpen && (
          <CreateSupplier 
            onClose={() => setIsCreateSupplierModalOpen(false)} 
          />
      )}
    </div>
  );
};

export default SupplierList;
