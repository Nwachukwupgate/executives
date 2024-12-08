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
import requestColumns from "./column/request.column";
import CreateRequest from "./Request/CreateRequest";
import Modal from "./Request/RequestModal";

const data: requestType[] = [
  {
    id: "r1",
    item: "Office Chair",
    quantity: "10",
    unit_price: "15000",
    account_name: "John Doe",
    account_number: "0123456789",
    bank_name: "First Bank",
    description: "Ergonomic office chairs for the new conference room.",
    hod_status: "approved",
    cfo_status: "approved",
    coo_status: "pending",
    md_status: "pending",
    account_status: "not paid",
    message: "Waiting for COO and MD approval.",
  },
  {
    id: "r2",
    item: "Printer Ink",
    quantity: "5",
    unit_price: "7500",
    account_name: "Jane Smith",
    account_number: "9876543210",
    bank_name: "Zenith Bank",
    description: "Replacement ink cartridges for the office printer.",
    hod_status: "approved",
    cfo_status: "approved",
    coo_status: "approved",
    md_status: "pending",
    account_status: "not paid",
    message: "Pending MD approval for payment processing.",
  },
  {
    id: "r3",
    item: "Laptops",
    quantity: "3",
    unit_price: "250000",
    account_name: "Michael Johnson",
    account_number: "1234567890",
    bank_name: "Access Bank",
    description: "High-performance laptops for the software development team.",
    hod_status: "approved",
    cfo_status: "rejected",
    coo_status: "not reviewed",
    md_status: "not reviewed",
    account_status: "not paid",
    message: "CFO rejected the request due to budget constraints.",
  },
  {
    id: "r4",
    item: "Air Conditioner",
    quantity: "2",
    unit_price: "120000",
    account_name: "Emily Carter",
    account_number: "1122334455",
    bank_name: "GTBank",
    description: "Air conditioners for the office lounge area.",
    hod_status: "approved",
    cfo_status: "approved",
    coo_status: "approved",
    md_status: "approved",
    account_status: "paid",
    message: "Request fully approved and payment processed.",
  },
  {
    id: "r5",
    item: "Stationery Supplies",
    quantity: "50",
    unit_price: "500",
    account_name: "Sarah O'Connor",
    account_number: "5566778899",
    bank_name: "UBA",
    description: "Bulk stationery supplies including pens, notepads, and markers.",
    hod_status: "approved",
    cfo_status: "approved",
    coo_status: "pending",
    md_status: "not reviewed",
    account_status: "not paid",
    message: "Pending COO review for approval.",
  },
];

type ContractorProps = {};
const RequestList: React.FC<ContractorProps> = ({}) => {
  const [selected, setSelected] = useState({});
  const [isCreateRequestModalOpen, setIsCreateRequestModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [requestId, setRequestId] = useState<string | null>(null); 


  const handleOpenModal = (id: string, type: string) => {
    setRequestId(id);
    setModalType(type);
  };

  const columns = requestColumns(handleOpenModal);
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
          <Button className="font-bold w-40" color="secondary" onClick={() => setIsCreateRequestModalOpen(true)}>
            Make Request
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

      {isCreateRequestModalOpen && (
          <CreateRequest 
            onClose={() => setIsCreateRequestModalOpen(false)} 
          />
      )}

        {modalType && requestId && (
          <Modal
            type={modalType}
            employeeId={requestId}
            onClose={() => {
              setModalType(null);
              setRequestId(null);
            }}
          />
        )}
    </div>
  );
};

export default RequestList;
