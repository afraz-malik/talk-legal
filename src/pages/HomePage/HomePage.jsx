import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import Offerings from '../../components/Offerings/Offerings'
import OurServices from '../../components/OurServices/OurServices'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <OurServices />
      <Offerings />
      <Footer />
    </div>
  )
}

export default HomePage
