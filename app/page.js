import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'
import Swipper from './components/Swipper/Swipper'
import Section from './components/Section/Section'
const page = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Slider/>
      <Cards/>
      <Swipper/>
      <Section/>
      <Footer/>
    </>
  )
}

export default page