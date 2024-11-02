import { createColumnHelper } from "@tanstack/react-table";

const columnsHelper = createColumnHelper<reportType>();
const reportColumns = () => [
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
  columnsHelper.accessor("grade", {
    header: () => <>Grade</>,
  }),
];

export default reportColumns;
