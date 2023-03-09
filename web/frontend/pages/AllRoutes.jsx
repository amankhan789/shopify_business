import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Setting from './Setting'

const AllRoutes = () => {

  return (

    <Routes>
     <Route path="/Setting" element={<Setting />} />
     <Route path="/Product" element={<Setting />} />
    </Routes>
  )
}

export default AllRoutes