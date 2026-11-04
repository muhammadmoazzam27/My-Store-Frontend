import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import PageNotFound from '@/components/PageNotFound'

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Auth