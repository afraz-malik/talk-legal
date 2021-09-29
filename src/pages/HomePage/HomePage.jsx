import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import OurPlans from '../../components/OurPlans/OurPlans'
import NavBar from '../../components/NavBar/NavBar'
import OurPromise from '../../components/OurPromise/new/OurPromise'
import OurServices from '../../components/OurServices/OurServices'
import Trusters from '../../components/Trusters/Trusters'
import Slide from 'react-reveal/Slide'

const HomePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <NavBar />
      <Header />
      <Slide left>
        <OurServices />
      </Slide>
      <OurPromise />
      <OurPlans />
      <Trusters />
      <Footer />
    </div>
  )
}

export default HomePage
