import { createColumnHelper } from "@tanstack/react-table";
import IconButton from "../Employee/IconButton";

const columnsHelper = createColumnHelper<projectType>();
const projectColumns = (handleOpenModal: (id: string, type: string) => void) => [
  columnsHelper.accessor("id", {
    header: () => <>Project ID</>,
  }),
  columnsHelper.accessor("name", {}),
  columnsHelper.accessor("location", {}),
  columnsHelper.accessor("size", {}),
  columnsHelper.accessor("title", {}),
  columnsHelper.accessor("status", {}),
  columnsHelper.accessor("tagline", {}),
  columnsHelper.accessor("unitNumber", {}),
  columnsHelper.accessor("startDate", {}),
  columnsHelper.accessor((row) => row.deliveryDate, {
    id: "check-in-time",
    header: () => <>Delivery Date</>,
    cell: (_info) => <div>{new Date().toISOString()}</div>,
    footer: (props) => props.column.id,
  }),
  columnsHelper.accessor("actions", {
    header: () => <>Actions</>,
    cell: ({ row }: any) => (
      <div className="flex space-x-2">
        <IconButton
          iconName="details"
          onClick={() => handleOpenModal(row.original.id, 'projectDetails')}
        />
        {/* <IconButton
          iconName="edit"
          onClick={() => handleOpenModal(row.original.id, 'editProject')}
        /> */}
        {/* <IconButton
          iconName="add"
          onClick={() => handleOpenModal(row.original.id, 'addProject')}
        /> */}
      </div>
    ),
  }),
];

export default projectColumns;
