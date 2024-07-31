import React from 'react'
import { columns } from '@/components/ViewCustomers/Columns.jsx'
import { DataTable } from '@/components/ViewCustomers/DataTable'
import PageHeader from '@/components/PageHeader'

const CustomerView = () => {

  const data = [
    {
      "id": "728ed52f",
      "customerName": "Karim Inc. asdf asdf asdf asdf asdf asd asdf asdf asdf asdf",
      "customerEmail": "m@example.com",
      "customerPhoneNumber": "+880 1767-476903",
      "contactPerson": "Raihanul Karim",
      "contactPersonEmail": "rkkarim@karim.com",
      "contactPersonPhoneNumber": "+880 1798-544854"
    },
    {
      "id": "f4567890",
      "customerName": "Tech Solutions",
      "customerEmail": "info1@tech.com",
      "customerPhoneNumber": "+880 1723-456789",
      "contactPerson": "John Doe",
      "contactPersonEmail": "johndoe1@tech.com",
      "contactPersonPhoneNumber": "+880 1834-567890"
    },
    {
      "id": "abc12345",
      "customerName": "Green Energy Corp",
      "customerEmail": "info2@energy.com",
      "customerPhoneNumber": "+880 1756-789012",
      "contactPerson": "Jane Smith",
      "contactPersonEmail": "janesmith2@energy.com",
      "contactPersonPhoneNumber": "+880 1867-890123"
    },
    {
      "id": "def67890",
      "customerName": "Global Commerce",
      "customerEmail": "info3@globalcorp.com",
      "customerPhoneNumber": "+880 1798-765432",
      "contactPerson": "Michael Brown",
      "contactPersonEmail": "michaelbrown3@globalcorp.com",
      "contactPersonPhoneNumber": "+880 1809-876543"
    },
    {
      "id": "ghi12345",
      "customerName": "InnovateX",
      "customerEmail": "info4@innovatex.net",
      "customerPhoneNumber": "+880 1712-345678",
      "contactPerson": "Emily Johnson",
      "contactPersonEmail": "emilyjohnson4@innovatex.net",
      "contactPersonPhoneNumber": "+880 1823-456789"
    },
    {
      "id": "jkl67890",
      "customerName": "HealthFirst",
      "customerEmail": "info5@healthfirst.org",
      "customerPhoneNumber": "+880 1745-678901",
      "contactPerson": "David Lee",
      "contactPersonEmail": "davidlee5@healthfirst.org",
      "contactPersonPhoneNumber": "+880 1856-789012"
    },
    {
      "id": "mno12345",
      "customerName": "Smart Systems",
      "customerEmail": "info6@smartsystems.biz",
      "customerPhoneNumber": "+880 1778-901234",
      "contactPerson": "Sarah Wilson",
      "contactPersonEmail": "sarahwilson6@smartsystems.biz",
      "contactPersonPhoneNumber": "+880 1889-012345"
    },
    {
      "id": "pqr67890",
      "customerName": "FutureTech",
      "customerEmail": "info7@futuretech.co",
      "customerPhoneNumber": "+880 1701-234567",
      "contactPerson": "William Carter",
      "contactPersonEmail": "williamcarter7@futuretech.co",
      "contactPersonPhoneNumber": "+880 1812-345678"
    },
    {
      "id": "stu12345",
      "customerName": "Eco Solutions",
      "customerEmail": "info8@ecosolutions.com",
      "customerPhoneNumber": "+880 1734-567890",
      "contactPerson": "Olivia Taylor",
      "contactPersonEmail": "oliviataylor8@ecosolutions.com",
      "contactPersonPhoneNumber": "+880 1845-678901"
    },
    {
      "id": "vwx67890",
      "customerName": "Digital World",
      "customerEmail": "info9@digitalworld.net",
      "customerPhoneNumber": "+880 1767-890123",
      "contactPerson": "Daniel Harris",
      "contactPersonEmail": "danielharris9@digitalworld.net",
      "contactPersonPhoneNumber": "+880 1878-901234"
    },
    {
      "id": "yz12345",
      "customerName": "Creative Agency",
      "customerEmail": "info10@creativeagency.com",
      "customerPhoneNumber": "+880 1790-123456",
      "contactPerson": "Sophia Anderson",
      "contactPersonEmail": "sophiaanderson10@creativeagency.com",
      "contactPersonPhoneNumber": "+880 1801-234567"
    },
    {
      "id": "abc78901",
      "customerName": "Another Company",
      "customerEmail": "info11@anothercompany.com",
      "customerPhoneNumber": "+880 1724-356789",
      "contactPerson": "Alex Brown",
      "contactPersonEmail": "alexbrown11@anothercompany.com",
      "contactPersonPhoneNumber": "+880 1835-467890"
    },
    {
      "id": "def12346",
      "customerName": "One More Company",
      "customerEmail": "info12@onemorecompany.com",
      "customerPhoneNumber": "+880 1757-689012",
      "contactPerson": "Chris Lee",
      "contactPersonEmail": "chrislee12@onemorecompany.com",
      "contactPersonPhoneNumber": "+880 1868-790123"
    },
    {
      "id": "def12332",
      "customerName": "More Company",
      "customerEmail": "info12@onemorecompany.com",
      "customerPhoneNumber": "+880 1757-689012",
      "contactPerson": "Arif Kaku",
      "contactPersonEmail": "chrislee12@onemorecompany.com",
      "contactPersonPhoneNumber": "+880 1868-790123"
    },
    {
      "id": "def12332",
      "customerName": "Man Man",
      "customerEmail": "info12@onemorecompany.com",
      "customerPhoneNumber": "+880 1757-689012",
      "contactPerson": "Avijit Man",
      "contactPersonEmail": "chrislee12@onemorecompany.com",
      "contactPersonPhoneNumber": "+880 1868-790123"
    }
  ]

  const pageHeading = {
    header: 'Customer List',
    description: 'List of all the customers registered under your business'
  }

  return (
    <div className="bg-background rounded-lg p-5 md:p-10 h-full max-w-full">
      <PageHeader heading = {pageHeading}/>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default CustomerView