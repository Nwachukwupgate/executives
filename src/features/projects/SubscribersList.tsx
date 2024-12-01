import FilterIcon from "@/common/icons/pack/FilterIcon";
import SelectTable from "@/common/table/CheckBoxTable";
import PaginationWrapper from "@/common/table/PaginationWrapper";
import TableLimit from "@/common/table/TableLimit";
import TablePagination from "@/common/table/TablePagination";
import AppMenuWrapper from "@/common/utilities/AppMenuWrapper";
import { useState } from "react";
import { Button } from "@mui/material";
import CreateProject from "./Project/CreateProject";
import Modal from "./Project/ProjectModal";
import { SubscriberType } from "@/types/general";
import subscriberColumns from "./column/subscriber.column";


const data: SubscriberType[] = [
    {
      id: "SUB001",
      firstName: "John",
      lastName: "Doe",
      otherNames: "Michael",
      email: "johndoe@example.com",
      referralCode: "REF12345",
      residentialAddress: "123 Main Street",
      phone: "555-1234",
    },
    {
      id: "SUB002",
      firstName: "Jane",
      lastName: "Smith",
      otherNames: "Ann",
      email: "janesmith@example.com",
      referralCode: "REF67890",
      residentialAddress: "456 Elm Street",
      phone: "555-5678",
    },
    {
      id: "SUB003",
      firstName: "Alice",
      lastName: "Johnson",
      otherNames: "Marie",
      email: "alicejohnson@example.com",
      referralCode: "REF54321",
      residentialAddress: "789 Oak Avenue",
      phone: "555-9876",
    },
  ];

type SubscriberProps = {};
const SubscriberList: React.FC<SubscriberProps> = ({}) => {
  const [selected, setSelected] = useState({});
  const [modalType, setModalType] = useState<string | null>(null);
  const [subscriberId, setSubscriberId] = useState<string | null>(null);
  const [isCreateSubscriberModalOpen, setIsCreateSubscriberModalOpen] = useState(false); 

  const handleOpenModal = (id: string, type: string) => {
    setSubscriberId(id);
    setModalType(type);
  };

  const columns = subscriberColumns(handleOpenModal);

  return (
    // import Download from "@/common/icons/pack/Download";

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

        <div className="flex items-center gap-4 justify-between">
          <Button
            className="font-bold w-40"
            color="secondary"
            onClick={() => setIsCreateSubscriberModalOpen(true)} // Open Create Employee modal
          >
            Create Subscriber
          </Button>
        </div>
        {/* <Download /> */}
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

      {isCreateSubscriberModalOpen && (
          <CreateProject 
            onClose={() => setIsCreateSubscriberModalOpen(false)} 
          />
      )}

      {/* Modal Component */}
      {modalType && subscriberId && (
          <Modal
            type={modalType}
            employeeId={subscriberId}
            onClose={() => {
              setModalType(null);
              setSubscriberId(null);
            }}
          />
        )}
    </div>
  );
};

export default SubscriberList;
