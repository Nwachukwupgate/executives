import { createColumnHelper } from "@tanstack/react-table";

const columnsHelper = createColumnHelper<supplierType>();
const supplierColumns = () => [
  columnsHelper.accessor("id", {
    header: () => <>Supplier Id</>,
  }),
  columnsHelper.accessor("fullName", {
    header: () => <>Supplier Full Name</>,
  }),
  columnsHelper.accessor("orderDate", {
    header: () => <>Order Date</>,
    cell: ({}) => <>{new Date().toISOString()}</>,
  }),
  columnsHelper.accessor("materialName", {
    header: () => <>Material Name</>,
  }),
  columnsHelper.accessor("totalPrice", {
    header: () => <>Total Price</>,
  }),
  columnsHelper.accessor("depositedAmount", {
    header: () => <>Deposited Amount</>,
  }),
  columnsHelper.accessor("balance", {
    header: () => <>Balance</>,
  }),
];

export default supplierColumns;
