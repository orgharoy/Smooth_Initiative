import React from 'react'
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const CustomerView = () => {
  const columns = [
    {
      accessorKey: "customerName",
      header: "Name",
    },
    {
      accessorKey: "customerEmail",
      header: "Email",
    },
  ]

  const data = [
    {
        "customerName": "John Doe",
        "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
    {
      "customerName": "John Doe",
      "customerEmail": "john.doe1@example.com",
    },
  ]

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / 10), // adjust the number of items per page
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  })

  return (
    <div className="bg-background rounded-lg p-5 md:p-10 h-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default CustomerView