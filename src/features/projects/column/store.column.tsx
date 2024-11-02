import { createColumnHelper } from "@tanstack/react-table";

const columnsHelper = createColumnHelper<storeKeeperType>();
const storeColumns = () => [
  columnsHelper.accessor("materialName", {
    header: () => <>Material Name</>,
  }),
  columnsHelper.accessor("stokeKeeperName", {
    header: () => <>Storekeepers Name</>,
  }),
  columnsHelper.accessor("orderDate", {
    header: () => <>Order Date</>,
  }),
  columnsHelper.accessor("quantityOrdered", {
    header: () => <>Quantity Ordered</>,
  }),
  columnsHelper.accessor("suppliersName", {
    header: () => <>Suppliers Name</>,
  }),
];

export default storeColumns;
