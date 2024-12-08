import { createColumnHelper } from "@tanstack/react-table";
import IconButton from "../Employee/IconButton";


const columnsHelper = createColumnHelper<reportType>();
const reportColumns = (handleOpenModal: (id: string, action: string) => void) => [
  columnsHelper.accessor("weeklyEngagement", {
    header: () => <>Weekly Engagement</>,
  }),
  columnsHelper.accessor("achievement", {
    header: () => <>Achievement</>,
  }),
  columnsHelper.accessor("challenges", {
    header: () => <>Challenges</>,
  }),
  columnsHelper.accessor("comment", {
    header: () => <>Comment</>,
  }),
  columnsHelper.accessor("suggestion",{
    header: () => <>Suggestion</>,
  }),
  columnsHelper.accessor("grade", {
    header: () => <>Grade</>,
  }),
  columnsHelper.accessor("actions", {
    header: () => <>Actions</>,
    cell: ({ row }: any) => (
      <div className="flex space-x-2">
        <IconButton
          iconName="details"
          onClick={() => handleOpenModal(row.original.id, "details")}
        />
        <IconButton
          iconName="edit"
          onClick={() => handleOpenModal(row.original.id, "edit")}
        />
      </div>
    ),
  }),
];

export default reportColumns;
