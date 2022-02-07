import React, { useState , useEffect } from 'react'
import BusinessForms from '../../../components/BusinessForms/BusinessForms'
import BusinessHeader from '../../../components/BusinessHeader/BusinessHeader'
import Footer from '../../../components/Footer/Footer'
import Info from '../../../components/Info/Info'
import { fetchDbGet } from '../../../backend/backend'
import NavBar from '../../../components/NavBar/NavBar'


const BusinessOpPage = () => {
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

  const businessOpForms = [
      {
        id: 1,
        src: 'images/bagpen.png',
        title: data[1].title,
        desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
        price: data[1].price,
      },
      {
        id: 2,
        src: 'images/2nd f.png',
        title: data[2].title,
        desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
        price: data[2].price,
      },
  
      {
        id: 3,
        src: 'images/3rd form.png',
        title: data[3].title,
        desp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare  pretium placerat ut platea. Purus blandit integer sagittis massavel est hac',
        price: data[3].price,
      },
    ]

  let my_data = []

  // useEffect(() => {
  //   setBusinessOpForms(socialMediaForm)
  // }, [data])

  // use effect for on load
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchDbGet(`api/all-legal-forms`, '').then((res) => {
      res.data.map((legal_form) => {
        my_data[legal_form.id] = {price:legal_form.price,title:legal_form.title};
      })

      setData(my_data);
      console.log('data')
      console.log(data)
      console.log('businessOpForms')
      console.log(businessOpForms)
    })
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
