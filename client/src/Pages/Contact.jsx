import React from 'react'
import Hero from '../Components/Contact/Hero'
import Message from '../Components/Contact/Message'
import Fotter from '../Components/Common/Fotter/Fotter'
import Navbar from '../Components/Common/Navbar/Navbar'
import Map from '../Components/Map'


const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Map/>
    <Message/>
    <Fotter/>
    </>
  )
}

export default Contact