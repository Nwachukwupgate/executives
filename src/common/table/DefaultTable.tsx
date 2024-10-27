import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableUI from "./TableUI";

type props<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  className?: string;
};

export default function DefaultTable<T>({
  data,
  columns,
  className,
}: props<T>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className={`${className}`}>
      <TableUI<T> table={table} />
    </div>
  );
}
