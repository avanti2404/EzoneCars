import React from 'react'
import { Link } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center w-full min-h-screen '>
        <img src='/eZoneLogo.png' className='w-[30rem]'></img>
        <h1 className='text-3xl font-heading text-primary-blue font-bold'>Admin Dashboard</h1>
        <Link to='/admin/login'><button className='w-[10rem] py-3 bg-primary-blue text-white'>Login</button></Link>
    </div>
  )
}

export default LoginLayout