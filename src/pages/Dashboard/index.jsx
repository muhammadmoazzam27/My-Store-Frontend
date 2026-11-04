import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserProfile from './UserProfile'
import PageNotFound from '@/components/PageNotFound'

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path='user-profile' element={<UserProfile />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Dashboard