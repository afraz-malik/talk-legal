import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HomePlans from '../../components/HomePlans/HomePlans'
import NavBar from '../../components/NavBar/NavBar'
import OurPromise from '../../components/OurPromise/OurPromise'
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
      <OurPromise />
      <HomePlans />
      <Trusters />
      <Footer />
    </div>
  )
}

export default HomePage
