import React from 'react'
import BusinessForms from '../../../components/BusinessForms/BusinessForms'
import BusinessHeader from '../../../components/BusinessHeader/BusinessHeader'
import Footer from '../../../components/Footer/Footer'
import Info from '../../../components/Info/Info'
import NavBar from '../../../components/NavBar/NavBar'
import SocialMediaPageCss from './SocialMediaPage.module.scss'
const socialMediaForm = {
  influencer: [],
  photography: [
    {
      id: 4,
      src: 'images/bagpen.png',
      title: ' Photography Services Contract',
      desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
      price: '79',
    },
    {
      id: 5,
      src: 'images/bagpen.png',
      title: 'Standard Photography Services Agreement',
      desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
      price: '79',
    },
  ],
}
const SocialMediaPage = () => {
  const [stateForms, setStateForms] = React.useState(socialMediaForm.influencer)
  React.useEffect(() => {
    window.scrollTo(900, 900)
  }, [stateForms])
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar currentPage="business" />
      <BusinessHeader />
      <div className={SocialMediaPageCss.container}>
        <h5>Select Your Categories</h5>
        <div className={SocialMediaPageCss.categories}>
          <div className={SocialMediaPageCss.category}>
            <div className={SocialMediaPageCss.img}>
              <img alt="" src="images/Profile.png" />
              <p>Influencer Market</p>
            </div>
            <button onClick={() => setStateForms(socialMediaForm.influencer)}>
              See all Documents
            </button>
          </div>
          <div className={SocialMediaPageCss.category}>
            <div className={SocialMediaPageCss.img}>
              <img alt="" src="images/Profile.png" />
            </div>
            <p>Photographer & Videographer</p>
            <button onClick={() => setStateForms(socialMediaForm.photography)}>
              See all Documents
            </button>
          </div>
        </div>
      </div>
      <BusinessForms forms={stateForms} />
      <Info />
      <Footer />
    </div>
  )
}

export default SocialMediaPage
