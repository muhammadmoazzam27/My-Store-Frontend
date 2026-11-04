import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import PageNotFound from '@/components/PageNotFound'

const Frontend = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Frontend