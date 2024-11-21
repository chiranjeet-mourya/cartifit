import React from 'react'
import Technology from '../../component/HomeSection/Technology'
import Choose from '../../component/HomeSection/Choose'
import Portfolio from '../../component/HomeSection/Portfolio'
import Pricing from '../../component/HomeSection/Pricing'
import Client from '../../component/HomeSection/Client'
import Team from '../../component/HomeSection/Team'
import Faq from '../../component/HomeSection/Faq'
import Disucss from '../../component/HomeSection/Disucss'
import Blog from '../../component/HomeSection/Blog'
import Contact from '../../component/HomeSection/Contact'
import Hero from '../../component/HomeSection/Hero'
import Testimonial from '../../component/HomeSection/Testimonial'
import CompanyIcon from '../../component/HomeSection/CompanyIcon'

function Home() {
  return (
    <>
    {/* <Header/> */}
    <Hero/>
    <Technology/>
    <Choose/>
    <Portfolio/>
    <Pricing/>
    <Testimonial/>
    <Client/>
    <CompanyIcon/>
    <Team/>
    <Faq/>
    <Disucss/>
    <Blog/>
    <Contact/>
    </>
  )
}

export default Home