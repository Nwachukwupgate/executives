import Download from "@/common/icons/pack/Download";
import FilterIcon from "@/common/icons/pack/FilterIcon";
import SelectTable from "@/common/table/CheckBoxTable";
import PaginationWrapper from "@/common/table/PaginationWrapper";
import TableLimit from "@/common/table/TableLimit";
import TablePagination from "@/common/table/TablePagination";
import AppMenuWrapper from "@/common/utilities/AppMenuWrapper";
import { useState } from "react";
import projectColumns from "./column/project.column";

const data: projectType[] = [
  {
    deliveryDate: "12-03-2024T10:00:00",
    id: "RFC1012",
    location: "30 Walter carrignton street",
    name: "project",
    size: "large",
  },
  {
    deliveryDate: "12-04-2024T10:00:00",
    id: "RFC1023",
    location: "34 Walter carrignton street",
    name: "erc love",
    size: "medium",
  },
  {
    deliveryDate: "12-04-2024T10:00:00",
    id: "RFC1012",
    location: "Lekki toll gate3",
    name: "clean love",
    size: "medium",
  },
  {
    deliveryDate: "12-03-2024T10:00:00",
    id: "RFC1012",
    location: "30 Walter carrignton street",
    name: "project",
    size: "large",
  },
];
type ProjectProps = {};
const Project: React.FC<ProjectProps> = ({}) => {
  const [selected, setSelected] = useState({});

  const columns = projectColumns();

  return (
    <div>
      <div className="flex w-full items-center gap-4 py-4 xl:basis-1/2 xl:justify-between">
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

        <Download />
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

export default Project;
