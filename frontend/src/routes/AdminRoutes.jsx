import React from 'react'
import AdminLayout from '../layout/AdminLayout'

import { Route, Routes } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import AdminUser from '../component/AdminUser'
import Dashboard from '../component/Dashboard'
import AdminEm from '../component/AdminEm'
import AdminProd from '../component/AdminProd'
import AdminSer from '../component/AdminSer'
import AdminSett from '../component/AdminSett'



const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/admin/adminUser' element={<AdminUser />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/adminEm' element={<AdminEm />} />
          <Route path='/admin/adminProd' element={<AdminProd />} />
          <Route path='/admin/adminSer' element={<AdminSer />} />
          <Route path='/admin/adminSett' element={<AdminSett />} />
        </Route>
      </Routes>
    </>
  )
}

export default AdminRoutes







