// src/components/EmployeeList/EmployeeColumns.tsx

import { createColumnHelper } from "@tanstack/react-table";
import IconButton from "../Employee/IconButton";

const columnsHelper = createColumnHelper<employeeType>();

const employeeColumns = (handleOpenModal: (id: string, type: string) => void) => [
  columnsHelper.accessor("firstName", {
    header: () => <>First Name</>,
  }),
  columnsHelper.accessor("lastName", {
    header: () => <>Last Name</>,
  }),
  columnsHelper.accessor("email", {
    header: () => <>Email</>,
  }),
  columnsHelper.accessor("department", {
    header: () => <>Department</>,
  }),
  columnsHelper.accessor("role", {
    header: () => <>Role</>,
  }),
  columnsHelper.accessor("actions", {
    header: () => <>Actions</>,
    cell: ({ row }: any) => (
      <div className="flex space-x-2">
        <IconButton
          iconName="details"
          onClick={() => handleOpenModal(row.original.id, 'details')}
        />
        <IconButton
          iconName="edit"
          onClick={() => handleOpenModal(row.original.id, 'edit')}
        />
        {/* <IconButton
          iconName="add"
          onClick={() => handleOpenModal(row.original.id, 'add')}
        /> */}
      </div>
    ),
  }),
];

export default employeeColumns;
