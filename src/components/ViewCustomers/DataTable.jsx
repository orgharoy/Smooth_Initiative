import React from 'react'
import { flexRender, getCoreRowModel, getPaginationRowModel, getFilteredRowModel, getSortedRowModel, useReactTable,} from "@tanstack/react-table"
import { Table,TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { DataTablePagination } from '@/components/DataTablePagination.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"


export function DataTable({ columns, data,}) {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [filterOption, setFilterOption] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  const filterOptions = [
    {item: 'Customer Name', value: 'customerName'},
    {item: 'Customer Email', value: 'customerEmail'},
    {item: 'Customer Phone No.', value: 'customerPhoneNumber'},
    {item: 'Contact Person', value: 'contactPerson'},
    {item: 'Contact Person Email', value: 'contactPersonEmail'},
    {item: 'Contact Person Phone No.', value: 'contactPersonPhoneNumber'}
  ]

  const handleFilterOptionChange = (value) => {
    const selectedOption = filterOptions.find(option => option.value === value);
    if (selectedOption) {
      setFilterOption({ value: selectedOption.value, item: selectedOption.item });
    }
  }

  return (
    <div className="space-y-4 md:space-y-4 max-w-full">
      <div className="flex items-center justify-between gap-4">
        <div className="flex w-full items-center gap-3">
          <Select onValueChange={(value) => handleFilterOptionChange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter Column" />
            </SelectTrigger>
            <SelectContent>
              {filterOptions.map((option, index) => (
                <SelectItem key={index} value={option.value}>{option.item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            placeholder= {`Filter ${filterOption.item ? filterOption.item : 'item'}...`}
            value={(table.getColumn(filterOption.value)?.getFilterValue()) ?? ""}
            onChange={(event) =>
              table.getColumn(filterOption.value)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <p className='hidden whitespace-nowrap md:block'>Total clients: {data.length}</p>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead 
                      key={header.id}
                      style={{
                        minWidth: header.column.columnDef.size,
                        maxWidth: header.column.columnDef.size,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}
                      style={{
                        minWidth: cell.column.columnDef.size,
                        maxWidth: cell.column.columnDef.size,
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table = {table} isSelectable={false}/>
    </div>
  )
}
