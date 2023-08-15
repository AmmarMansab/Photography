import React from 'react'
import Fotter from '../Components/Common/Fotter/Fotter'
import Video from '../Components/Common/Video'
import Testimonials from '../Components/Common/Testimonials'
import Qoute from '../Components/Common/Qoute'
import Hero from '../Components/About/Hero'
import Experience from '../Components/About/Experience'
import Navbar from '../Components/Common/Navbar/Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Experience/>
    {/* <Video/> */}
    <Testimonials/>
    <Qoute/>
    <Fotter/>
    </>
  )
}

export default About