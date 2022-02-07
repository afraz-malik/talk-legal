import React, { useState , useEffect } from 'react'
import BusinessForms from '../../../components/BusinessForms/BusinessForms'
import BusinessHeader from '../../../components/BusinessHeader/BusinessHeader'
import Footer from '../../../components/Footer/Footer'
import Info from '../../../components/Info/Info'
import { fetchDbGet } from '../../../backend/backend'
import NavBar from '../../../components/NavBar/NavBar'
import SocialMediaPageCss from './SocialMediaPage.module.scss'



const SocialMediaPage = () => {
  
  const [ data, setData ] = useState(
    [{
      price: 0,
      title: ''
    },{
      price: 0,
      title: 'Confidentiality Agreement (Mutual) - Business Discussions v.2'
    },{
      price: 0,
      title: 'Confidentiality Agreement (Unilateral) - Independent Contractor'
    },{
      price: 0,
      title: 'Confidentiality Agreement (Unilateral) - Potential Investor v.2'
    },{
      price: 0,
      title: 'Photography Services Contract'
    },{
      price: 0,
      title: 'Standard Photography Services Agreement'
    },{
      price: 0,
      title: 'Pro-Brand Influencer Agreement (Products Only)'
    },{
      price: 0,
      title: 'Pro-Brand Influencer Agreement (Services Only)'
    }]
  )

  let my_data = []

  const socialMediaForm = [
    {
      id: 1,
      name: 'photography',
      forms: [
        {
          id: 4,
          src: 'images/3rd form.png',
          title: data[4].title,
          desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
          price: data[4].price,
        },
        {
          id: 5,
          src: 'images/bagpen.png',
          title: data[5].title,
          desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
          price: data[5].price,
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
          title: data[6].title,
          desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
          price: data[6].price,
        },
        {
          id: 7,
          src: 'images/2nd f.png',
          title: data[7].title,
          desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
          price: data[7].price,
        },
      ],
    },
  ]

  const [stateForms, setStateForms] = useState(socialMediaForm[1])

  // use effect for when going to specific form
  useEffect(() => {
    window.scrollTo(900, 900)
  }, [stateForms])

  // runs on change of 'data' array
  useEffect(() => {
    setStateForms(socialMediaForm[1])
  }, [data])

  // use effect for on load
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchDbGet(`api/all-legal-forms`, '').then((res) => {
      res.data.map((legal_form) => {
        my_data[legal_form.id] = {
          price: legal_form.price,
          title: legal_form.title
        };
      })

      setData(my_data);
    })
  }, [])

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
