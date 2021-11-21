import React from 'react'
import BusinessForms from '../../../components/BusinessForms/BusinessForms'
import BusinessHeader from '../../../components/BusinessHeader/BusinessHeader'
import Footer from '../../../components/Footer/Footer'
import Info from '../../../components/Info/Info'
import NavBar from '../../../components/NavBar/NavBar'
const startupForms = []
const StartupAndPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <NavBar currentPage="business" />
      <BusinessHeader />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BusinessForms forms={startupForms} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Info />
      <Footer />
    </div>
  )
}

export default StartupAndPage
