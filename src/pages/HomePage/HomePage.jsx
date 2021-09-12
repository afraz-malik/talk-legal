import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import Offerings from '../../components/Offerings/Offerings'
import OurServices from '../../components/OurServices/OurServices'
import Trusters from '../../components/Trusters/Trusters'

const HomePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <NavBar />
      <Header />
      <OurServices />
      <Offerings />
      <Trusters />
      <Footer />
    </div>
  )
}

export default HomePage
