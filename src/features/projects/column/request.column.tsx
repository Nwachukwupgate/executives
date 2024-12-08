import { createColumnHelper } from "@tanstack/react-table";
import IconButton from "../Employee/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";


const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "approved":
        return <CheckCircleIcon style={{ color: "green" }} />;
      case "rejected":
        return <CancelIcon style={{ color: "red" }} />;
      case "pending":
      case "not reviewed":
        return <HourglassEmptyIcon style={{ color: "orange" }} />;
      case "not paid":
        return <HourglassEmptyIcon style={{ color: "gray" }} />;
      default:
        return null;
    }
  };

const columnsHelper = createColumnHelper<requestType>();

const requestColumns = (handleAction: (id: string, action: string) => void) => [
    columnsHelper.accessor("id", {
      header: () => <>Request ID</>,
    }),
    columnsHelper.accessor("item", {
      header: () => <>Item</>,
    }),
    columnsHelper.accessor("quantity", {
      header: () => <>Quantity</>,
    }),
    columnsHelper.accessor("unit_price", {
      header: () => <>Unit Price</>,
      cell: ({ row }: any) => <>₦{row.original.unit_price}</>,
    }),
    columnsHelper.accessor("hod_status", {
      header: () => <>HOD Status</>,
      cell: ({ row }: any) => <StatusIcon status={row.original.hod_status} />,
    }),
    columnsHelper.accessor("cfo_status", {
      header: () => <>CFO Status</>,
      cell: ({ row }: any) => <StatusIcon status={row.original.cfo_status} />,
    }),
    columnsHelper.accessor("coo_status", {
      header: () => <>COO Status</>,
      cell: ({ row }: any) => <StatusIcon status={row.original.coo_status} />,
    }),
    columnsHelper.accessor("md_status", {
      header: () => <>MD Status</>,
      cell: ({ row }: any) => <StatusIcon status={row.original.md_status} />,
    }),
    columnsHelper.accessor("account_status", {
      header: () => <>Account Status</>,
      cell: ({ row }: any) => <StatusIcon status={row.original.account_status} />,
    }),
    columnsHelper.accessor("message", {
      header: () => <>Message</>,
    }),
    columnsHelper.accessor("actions", {
      header: () => <>Actions</>,
      cell: ({ row }: any) => (
        <div className="flex space-x-2">
          <IconButton
            iconName="approve"
            onClick={() => handleAction(row.original.item, "approve")}
          />
          <IconButton
            iconName="reject"
            onClick={() => handleAction(row.original.item, "reject")}
          />
          <IconButton
            iconName="details"
            onClick={() => handleAction(row.original.id, 'view')}
          />
        </div>
      ),
    }),
  ];

export default requestColumns;
