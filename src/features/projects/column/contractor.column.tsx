import { createColumnHelper } from "@tanstack/react-table";

const columnsHelper = createColumnHelper<contractType>();
const contractorColumn = () => [
  columnsHelper.accessor("id", {
    header: () => <>Contract ID</>,
  }),
  columnsHelper.accessor("name", {
    header: () => <>Principal Name</>,
  }),
  columnsHelper.accessor("duration", {
    header: () => <>Contract Durastion</>,
  }),
  columnsHelper.accessor("remark", {
    header: () => <>Remark</>,
  }),
  columnsHelper.accessor("task", {
    header: () => <>Contract Task</>,
  }),
  columnsHelper.accessor("amount", {
    header: () => <>Amount</>,
  }),
  columnsHelper.accessor("address", {
    header: () => <>Project Address</>,
  }),
];

export default contractorColumn;
