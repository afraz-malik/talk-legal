import React from 'react'
import BusinessForms from '../../../components/BusinessForms/BusinessForms'
import BusinessHeader from '../../../components/BusinessHeader/BusinessHeader'
import Footer from '../../../components/Footer/Footer'
import Info from '../../../components/Info/Info'
import NavBar from '../../../components/NavBar/NavBar'
const businessOpForms = [
  {
    id: 1,
    src: 'images/bagpen.png',
    title: 'NDA Template',
    desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
    price: '79',
  },
  {
    id: 2,
    src: 'images/2nd f.png',
    title: 'Unilateral Agreement',
    desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
    price: '79',
  },
  ,
  {
    id: 3,
    src: 'images/3rd form.png',
    title: 'Unilateral Agreement v2',
    desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
    price: '79',
  },
]
const BusinessOpPage = () => {
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
      <BusinessForms forms={businessOpForms} />
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

export default BusinessOpPage
