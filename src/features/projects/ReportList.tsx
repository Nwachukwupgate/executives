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
import reportColumns from "./column/report.column";
import Modal from "./Report/ReportModal";
import CreateReport from "./Report/CreateReport";

const data: reportType[] = [
  {
    id: "r1",
    achievement: "Built North wall to completion",
    challenges: "Weather change",
    comment: "We should always check weather updates",
    grade: "Satisfactory",
    suggestion: "same as comment",
    weeklyEngagement: "all",
  },
  {
    id: "r2",
    achievement: "Built North wall to completion",
    challenges: "Weather change",
    comment: "We should always check weather updates",
    grade: "Satisfactory",
    suggestion: "same as comment",
    weeklyEngagement: "all",
  },
];

type ReportProps = {};
const ReportList: React.FC<ReportProps> = ({}) => {
  const [selected, setSelected] = useState({});
  const [modalType, setModalType] = useState<string | null>(null);
  const [reportId, setReportId] = useState<string | null>(null); 
  const [isCreateReportModalOpen, setIsCreateReportModalOpen] = useState(false)


  const handleOpenModal = (id: string, type: string) => {
    setReportId(id);
    setModalType(type);
  };

  const columns = reportColumns(handleOpenModal);
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
          <Button color="secondary" onClick={() => setIsCreateReportModalOpen(true)}>Give Report</Button>
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

      {isCreateReportModalOpen && (
          <CreateReport 
            onClose={() => setIsCreateReportModalOpen(false)} 
          />
      )}

      {modalType && reportId && (
          <Modal
            type={modalType}
            employeeId={reportId}
            onClose={() => {
              setModalType(null);
              setReportId(null);
            }}
          />
        )}
    </div>
  );
};

export default ReportList;
