import React from 'react'
import { Choice, HowTo } from '../components/Businesses'
import { BusinessHero } from '../components/Hero'
import Navbar from '../components/Navbar'
import { CryptoForBusiness } from '../components/Plans'
import Footer from '../components/Footer';
import './Pages.scss'

function Businesses() {
  return (
    <div className='Businesses'>
        <Navbar />
        <BusinessHero />
        <CryptoForBusiness />
        <HowTo />
        <Choice />
        <Footer />
    </div>
  )
}

export default Businesses