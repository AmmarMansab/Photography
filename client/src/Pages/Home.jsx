import React from 'react'
import Navbar from '../Components/Common/Navbar/Navbar'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import Services from '../Components/Home/Services/Services'
import Tailor from '../Components/Home/Tailor'
import Projects from '../Components/Home/Projects'
import Contact from '../Components/Home/Contact'
import Fotter from '../Components/Common/Fotter/Fotter'
import Video from '../Components/Common/Video'
import Testimonials from '../Components/Common/Testimonials'
import Gallery from '../Components/Common/Gallery/Gallery'


const Home = () => {
  return (
    <>

      <div  >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Video />
        <Tailor />
        <Testimonials />
        <Contact />
        <Fotter />
      </div >

    </>
  )
}

export default Home