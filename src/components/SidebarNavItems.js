import { LayoutDashboard, UsersIcon, SettingsIcon, FilePlus2, BookLock, ListOrdered, UserPlus, BookUser } from 'lucide-react'

export const navItems = [
    {
      heading: '',
      subItems: [
        { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      ]
    },
    {
      heading: 'Business Initiatives',
      subItems: [
        { href: '/business-initiatives/create', label: 'New Business Initiative', icon: FilePlus2 },
        { href: '/business-initiatives/view', label: 'View Business Initiatives', icon: ListOrdered },
      ]
    },
    {
      heading: 'Customer Manager',
      subItems: [
        { href: '/customer/create', label: 'Create Customer', icon: UserPlus },
        { href: '/customer/view', label: 'View Customers', icon: BookUser },
      ]
    },
    {
      heading: 'Security Module',
      subItems: [
        { href: '/security/user-management', label: 'User Management', icon: UsersIcon },
        { href: '/security/rights-management', label: 'Rights Management', icon: BookLock },
        { href: '/settings', label: 'Settings', icon: SettingsIcon },
      ]
    },
  ];

