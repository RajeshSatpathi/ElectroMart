import React from 'react'
import HeroBanner from '../../Component/Home/HeroBanner'
import Categories from '../../Component/Home/Categories'
import Advertise from '../../Component/Home/Advertise'
import Services from '../../Component/Home/Services'
import HomeProduct from '../../Component/Home/HomeProduct'
import Deals from '../../Component/Home/Deals'
import Insta from '../../Component/Home/Insta'
import Testimonial from '../../Component/Home/Testimonial'

function Home() {
  return (
    <>
      <div>
        <HeroBanner />
        <Categories />
        <Advertise/>
        <Services/> 
        <HomeProduct/>
        <Deals/>
        <Testimonial/><br /><br />
        <Insta/><br /><br />

      </div>
    </>
  )
}

export default Home