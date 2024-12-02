import { createColumnHelper } from "@tanstack/react-table";

const columnsHelper = createColumnHelper<supplierType>();
const supplierColumns = () => [
  columnsHelper.accessor("id", {
    header: () => <>Supplier ID</>,
  }),
  columnsHelper.accessor("name", {
    header: () => <>Supplier Name</>,
  }),
  columnsHelper.accessor("email", {
    header: () => <>Email</>,
  }),
  columnsHelper.accessor("phoneNumber", {
    header: () => <>Phone Number</>,
  }),
  columnsHelper.accessor("address", {
    header: () => <>Address</>,
  }),
  columnsHelper.accessor("material", {
    header: () => <>Materials</>,
    cell: ({ getValue }) => (
      <>{getValue().join(", ")}</> // Display materials as a comma-separated string
    ),
  }),
  columnsHelper.accessor("orderDate", {
    header: () => <>Order Date</>,
    cell: () => <>{new Date().toLocaleDateString()}</>, // Display current date
  }),
];

export default supplierColumns;
