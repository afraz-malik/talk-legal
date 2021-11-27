import React from 'react'
import BusinessForms from '../../../components/BusinessForms/BusinessForms'
import BusinessHeader from '../../../components/BusinessHeader/BusinessHeader'
import Footer from '../../../components/Footer/Footer'
import Info from '../../../components/Info/Info'
import NavBar from '../../../components/NavBar/NavBar'
import SocialMediaPageCss from './SocialMediaPage.module.scss'

const socialMediaForm = [
  {
    id: 1,
    name: 'photography',
    forms: [
      {
        id: 4,
        src: 'images/3rd form.png',
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
  },
  {
    id: 2,
    name: 'influencer',
    forms: [
      {
        id: 6,
        src: 'images/bagpen.png',
        title: 'Pro-Brand Influencer Agreement (Products Only)',
        desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
        price: '79',
      },
      {
        id: 7,
        src: 'images/2nd f.png',
        title: 'Pro-Brand Influencer Agreement (Services Only)',
        desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
        price: '79',
      },
    ],
  },
]

const SocialMediaPage = () => {
  const [stateForms, setStateForms] = React.useState(socialMediaForm[1])
  React.useEffect(() => {
    window.scrollTo(900, 900)
  }, [stateForms])
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  console.log(stateForms)
  return (
    <div>
      <NavBar currentPage="business" />
      <BusinessHeader />
      <div className={SocialMediaPageCss.container}>
        <h5>Select Your Categories</h5>
        <div className={SocialMediaPageCss.categories}>
          <div
            className={`${SocialMediaPageCss.category} ${
              stateForms.id === 2 ? SocialMediaPageCss.active : null
            }`}
          >
            <div className={SocialMediaPageCss.img}>
              <img alt="" src="images/Profile.png" />
              <p>Influencer Market</p>
            </div>
            <button onClick={() => setStateForms(socialMediaForm[1])}>
              See all Documents
            </button>
          </div>
          <div
            className={`${SocialMediaPageCss.category} ${
              stateForms.id === 1 ? SocialMediaPageCss.active : null
            }`}
          >
            <div className={SocialMediaPageCss.img}>
              <img alt="" src="images/Profile.png" />
            </div>
            <p>Photographer & Videographer</p>
            <button onClick={() => setStateForms(socialMediaForm[0])}>
              See all Documents
            </button>
          </div>
        </div>
      </div>
      <BusinessForms forms={stateForms.forms} />
      <Info />
      <Footer />
    </div>
  )
}

export default SocialMediaPage
