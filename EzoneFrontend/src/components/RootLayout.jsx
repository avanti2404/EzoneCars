import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton'

const RootLayout = ({ setScrollToSection }) => {
  return (
    <>
      <Navbar setScrollToSection={setScrollToSection}/>
      <div className='pt-16'>
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton/>
    </>
  )
}

export default RootLayout