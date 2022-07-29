import React from 'react'
import {Outlet } from 'react-router-dom'
import Footer from '../componenets/Footer'
import Header from '../componenets/Header'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout