import React from 'react'
import BusinessForms from '../../components/BusinessForms/BusinessForms'
import BusinessHeader from '../../components/BusinessHeader/BusinessHeader'
import Footer from '../../components/Footer/Footer'
import Info from '../../components/Info/Info'
import NavBar from '../../components/NavBar/NavBar'

const BusinessOpPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <NavBar />
      <BusinessHeader />
      <BusinessForms />
      <Info />
      <Footer />
    </div>
  )
}

export default BusinessOpPage
