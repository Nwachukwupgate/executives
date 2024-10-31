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

const data: contractType[] = [
  {
    address: "30 Waltetr carrignton",
    amount: "2500",
    duration: "One month",
    id: "some id",
    name: "foo",
    remark: "excellent job",
    task: "tasks easy",
  },
  {
    address: "30 Waltetr carrignton",
    amount: "2500",
    duration: "One month",
    id: "some id",
    name: "foo",
    remark: "excellent job",
    task: "tasks easy",
  },
  {
    address: "30 Waltetr carrignton",
    amount: "2500",
    duration: "One month",
    id: "some id",
    name: "foo",
    remark: "excellent job",
    task: "tasks easy",
  },
];

type ContractorProps = {};
const ContractorList: React.FC<ContractorProps> = ({}) => {
  const [selected, setSelected] = useState({});

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
          <Button className="font-bold w-40" color="secondary">
            Create Contract
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
    </div>
  );
};

export default ContractorList;
