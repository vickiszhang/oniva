import React from 'react'
import Hero from '../components/Home/Hero'
import Start from '../components/Home/Start'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div className='w-screen overflow-hidden'>
        <Hero />
        <Start />
        <Footer />
    </div>
  )
}

export default Home