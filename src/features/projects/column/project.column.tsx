import { createColumnHelper } from "@tanstack/react-table";

const columnsHelper = createColumnHelper<projectType>();
const projectColumns = () => [
  columnsHelper.accessor("id", {
    header: () => <>Project ID</>,
  }),
  columnsHelper.accessor("name", {}),
  columnsHelper.accessor("location", {}),
  columnsHelper.accessor("size", {}),

  columnsHelper.accessor((row) => row.deliveryDate, {
    id: "check-in-time",
    header: () => <>Delivery Date</>,
    cell: (_info) => <div>{new Date().toISOString()}</div>,
    footer: (props) => props.column.id,
  }),
];

export default projectColumns;
