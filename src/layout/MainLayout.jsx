import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <NavBar />

    <main>
        <Outlet />
    </main>


    <Footer />
    </>
  )
}

export default MainLayout
