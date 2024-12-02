import { createColumnHelper } from "@tanstack/react-table";

const columnsHelper = createColumnHelper<contractType>();
const contractorColumn = () => [
  columnsHelper.accessor("id", {
    header: () => <>Contractor ID</>,
  }),
  columnsHelper.accessor("nameOfPrincipal", {
    header: () => <>Principal Name</>,
  }),
  columnsHelper.accessor("nameOfCompany", {
    header: () => <>Company Name</>,
  }),
  columnsHelper.accessor("contractorServiceLine", {
    header: () => <>Service Line</>,
  }),
  columnsHelper.accessor("contractorAddress", {
    header: () => <>Address</>,
  }),
  columnsHelper.accessor("email", {
    header: () => <>Email</>,
  }),
  columnsHelper.accessor("phone", {
    header: () => <>Phone</>,
  }),
];

export default contractorColumn;
