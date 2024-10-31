import { Checkbox } from "@mui/material";
import {
  ColumnDef,
  getCoreRowModel,
  Row,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import TableUI from "./TableUI";

type CheckBoxTableProps<T> = {
  setSelected: (value: any) => void;
  selected: any;
  data: T[];
  columns: ColumnDef<T, any>[];
  className?: string;
  mergeColumn?: boolean;
  enableFunc?: (row: Row<T>) => boolean;
};

export default function SelectTable<T>({
  data,
  columns,
  className,
  setSelected,
  mergeColumn = true,
  selected = {},
  enableFunc = (_) => true,
}: CheckBoxTableProps<T>) {
  const checkCol: ColumnDef<any>[] = useMemo<ColumnDef<T>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <div className="bg-white ml-1">
            <Checkbox
              sx={{
                padding: "0 0 0 0px",
                margin: 0,
              }}
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
                color: "success",
              }}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <Checkbox
              sx={{
                padding: "0",
              }}
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
                color: "success",
              }}
            />
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    columns: mergeColumn ? ([...checkCol, ...columns] as any) : columns,
    data,
    state: {
      rowSelection: selected,
    },
    enableRowSelection: enableFunc,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setSelected,
  });
  return (
    <div className={`${className} w-full overflow-x-auto`}>
      <div className="min-w-full w-fit">
        <TableUI<T> table={table} />
      </div>
    </div>
  );
}
