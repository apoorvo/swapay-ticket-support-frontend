import React from 'react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'

const Root = () => {
    
  return (
    <div className='w-100 h-max'>
        <nav className='fixed bg-zinc-900 text-white font-bold flex w-screen items-center justify-between top-0 p-4'>
            <div>
                <h1 className=' text-3xl rounded text-primary '><Link to="/">swaypay support</Link></h1>
            </div>
            <div>
                <p className='hover:text-primary'><Link to={"/tickets/create"}>Create Ticket</Link></p>
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