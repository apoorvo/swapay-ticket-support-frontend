import React from 'react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'

const Root = () => {
    
  return (
    <div className='w-100 h-max'>
        <nav className='fixed flex w-screen items-center justify-between top-0 p-4'>
            <div>
                <h1 className='font-bold text-2xl rounded '>swaypay support</h1>
            </div>
            <div>
                <Link to={"/tickets/create"}>Add Ticket</Link>
            </div>
        </nav>
        <div className='mt-20 p-4'>

                <Routes>
                    <Route path="/" element={<Navigate replace to="/tickets" />} />
                </Routes>
            <Outlet />
        </div>
    </div>
  )
}

export default Root