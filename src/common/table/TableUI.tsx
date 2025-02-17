import { Table, flexRender } from "@tanstack/react-table";
import JamArrowDown from "../icons/pack/JamArrowDown";
import JamArrowUp from "../icons/pack/JamArrowUp";

type props<T> = {
  table: Table<T>;
};

export default function TableUI<T>({ table }: props<T>) {
  return (
    <table className="" width="100%" id="data__table">
      <thead className="">
        <tr className=" bg-primaryColor text-white">
          {table.getFlatHeaders().map((header) => {
            return (
              <th
                className={`${""} whitespace-nowrap px-6 py-4 text-left text-[14px] font-medium capitalize [line-height:22px`}
                key={header.id}
                colSpan={header.colSpan}
              >
                {header.isPlaceholder ? null : (
                  <div
                    className={`flex items-center  ${
                      header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : ""
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <div className="pb-[2px]">
                      {{
                        asc: <JamArrowUp className="!fill-text-disabled" />,
                        desc: <JamArrowDown className="!fill-text-disabled" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr
              key={row.id}
              className={`border-b whitespace-nowrap text-left border-b-[#EBF2FA] ${row.getIsSelected() && "!border-b-4 !border-white bg-[#F4F0EB]"}`}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    className="px-6 py-3 text-[13px] text-[#3A3A3A]"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
