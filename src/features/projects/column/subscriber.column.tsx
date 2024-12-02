import { createColumnHelper } from "@tanstack/react-table";
import IconButton from "../Employee/IconButton";


const columnsHelper = createColumnHelper<subscriberType>();
const subscriberColumns = (handleOpenModal: (id: string, type: string) => void) => [
  columnsHelper.accessor("id", {
    header: () => <>Subscriber ID</>,
  }),
  columnsHelper.accessor("firstName", {}),
  columnsHelper.accessor("lastName", {}),
  columnsHelper.accessor("otherNames", {}),
  columnsHelper.accessor("email", {}),
  columnsHelper.accessor("referralCode", {}),
  columnsHelper.accessor("residentialAddress", {}),
  columnsHelper.accessor("phone", {}),
  columnsHelper.accessor("actions", {
    header: () => <>Actions</>,
    cell: ({ row }: any) => (
      <div className="flex space-x-2">
        <IconButton
          iconName="details"
          onClick={() => handleOpenModal(row.original.id, 'subscriberDetails')}
        />
        <IconButton
          iconName="edit"
          onClick={() => handleOpenModal(row.original.id, 'editSubscriber')}
        />
        <IconButton
          iconName="add"
          onClick={() => handleOpenModal(row.original.id, 'addSubDetails')}
        />
        <IconButton
          iconName="investment"
          onClick={() => handleOpenModal(row.original.id, 'giveInvestment')}
        />
      </div>
    ),
  }),
];

export default subscriberColumns;
