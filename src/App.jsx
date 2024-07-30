import './App.css'
import { BrowserRouter ,Route, Routes } from 'react-router-dom';

import { ThemeProvider } from "@/components/theme-provider"

//import Layouts
import PrimaryLayout from '@/components/Layouts/PrimaryLayout'
import WebsiteLayout from '@/components/Layouts/WebsiteLayout'
import FullScreen from '@/components/Layouts/FullScreen'

//import Website pages
import Index from './Pages/Website/Index';

//import Portal pages
import Login from './Pages/Portal/Login';
import Signup from './Pages/Portal/Signup';
import Dashboard from './Pages/Portal/Dashboard';
import BusinessInitiativeNew from './Pages/Portal/BusinessInitiativeNew';
import BusinessInitiativeView from './Pages/Portal/BusinessInitiativeView';
import CustomerNew from './Pages/Portal/CustomerNew';
import CustomerView from './Pages/Portal/CustomerView';
import UserManagement from './Pages/Portal/UserManagement';
import RightsManagement from './Pages/Portal/RightsManagement';
import Settings from './Pages/Portal/Settings';

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>

          <Route element={<FullScreen />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<PrimaryLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/business-initiatives/create" element={<BusinessInitiativeNew />} />
            <Route path="/business-initiatives/view" element={<BusinessInitiativeView />} />
            <Route path="/customer/create" element={<CustomerNew />} />
            <Route path="/customer/view" element={<CustomerView />} />
            <Route path="/security/user-management" element={<UserManagement />} />
            <Route path="/security/rights-management" element={<RightsManagement />} />
            <Route path="/settings" element={<Settings />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
