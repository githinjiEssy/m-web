import React from 'react'
import TopSection from './TopSection';
import About from './AboutSection';
import Contact from './Contact';
import Footer from './Footer';
import Product from './Product';

function Home() {
  return (
    <>
      <TopSection/>
      <About/>
      <Product/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home