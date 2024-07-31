import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { ArrowUpDown, ArrowUpAz, ArrowDownZa, } from "lucide-react"
import DrawerDialog from "@/components/ViewCustomers/DrawerDialog.jsx"

export const columns = [
  {
    accessorKey: "customerName",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-3">
          <h5 className="whitespace-nowrap truncate">Customer Name</h5>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-pointer" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                  {column.getIsSorted() === "desc" ? (
                    <ArrowDownZa className="ml-2 h-4 w-4" />
                  ) : column.getIsSorted() === "asc" ? (
                    <ArrowUpAz className="ml-2 h-4 w-4" />
                  ) : (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sort</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )
    },
    cell: ({row}) => {
      const customerName = row.getValue("customerName")
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="whitespace-nowrap truncate">{customerName}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{customerName}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
    size: 200
  },
  {
    accessorKey: 'customerEmail',
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-3">
          <h5 className="whitespace-nowrap truncate">Email</h5>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-pointer" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                  {column.getIsSorted() === "desc" ? (
                    <ArrowDownZa className="ml-2 h-4 w-4" />
                  ) : column.getIsSorted() === "asc" ? (
                    <ArrowUpAz className="ml-2 h-4 w-4" />
                  ) : (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sort</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )
    },
    cell: ({row}) => {
      const emailAddress = row.getValue("customerEmail")
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="whitespace-nowrap truncate">{emailAddress}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{emailAddress}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
    size: 180
  },
  {
    accessorKey: 'customerPhoneNumber',
    header: () => <h5 className="whitespace-nowrap">Phone No.</h5>,
    cell: ({row}) => {
      const phoneNumber = row.getValue("customerPhoneNumber")
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="whitespace-nowrap truncate">{phoneNumber}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{phoneNumber}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
    size: 175
  },
  {
    accessorKey: 'contactPerson',
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-3">
          <h5 className="whitespace-nowrap truncate">Contact Person</h5>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-pointer" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                  {column.getIsSorted() === "desc" ? (
                    <ArrowDownZa className="ml-2 h-4 w-4" />
                  ) : column.getIsSorted() === "asc" ? (
                    <ArrowUpAz className="ml-2 h-4 w-4" />
                  ) : (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sort</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )
    },
    cell: ({row}) => {
      const contactPerson = row.getValue("contactPerson")
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="whitespace-nowrap truncate">{contactPerson}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{contactPerson}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
    size: 200
  },
  {
    accessorKey: 'contactPersonEmail',
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-3">
          <h5 className="whitespace-nowrap truncate">Contact Email</h5>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-pointer" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                  {column.getIsSorted() === "desc" ? (
                    <ArrowDownZa className="ml-2 h-4 w-4" />
                  ) : column.getIsSorted() === "asc" ? (
                    <ArrowUpAz className="ml-2 h-4 w-4" />
                  ) : (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sort</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )
    },
    cell: ({row}) => {
      const contactPersonEmail = row.getValue("contactPersonEmail")
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="whitespace-nowrap truncate">{contactPersonEmail}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{contactPersonEmail}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
    size: 180
  },
  {
    accessorKey: 'contactPersonPhoneNumber',
    header: () => <h5 className="whitespace-nowrap">Contact Phone No.</h5>,
    cell: ({row}) => {
      const contactPersonPhoneNumber = row.getValue("contactPersonPhoneNumber")
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="whitespace-nowrap truncate">{contactPersonPhoneNumber}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{contactPersonPhoneNumber}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
    size: 175
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const rowData = row.original
      return (
        <DrawerDialog rowData = {rowData}/>
      )
    },
    size: 60
  },
]
