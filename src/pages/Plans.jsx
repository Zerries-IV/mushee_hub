import React from 'react'
import { Button } from 'react-bootstrap'
import "./styles/Plans.scss"
import { CheckCircle } from '@mui/icons-material'

const BusinessSolution = () => {
  return(
    <div className='BusinessCard'>
      <h2> Solutions for Business </h2>
      <ul>
        <li>
          <CheckCircle />
          <p> Accept crypto directly in your physical stores with QR code or payment link</p>
        </li>
        <li>  
          <CheckCircle />
          <p> Convert your crypto with the Auto-convert feature to protect your funds from volatility</p>
        </li>
        <li>
          <CheckCircle /> 
          <p> Safety first: flexible 2FA, Whitelist, Auto-Withdrawal and other features to keep your funds safe</p>
        </li>
        <li>
          <CheckCircle />
          <p> Go global: accept payments from your international customers</p>
        </li>
      </ul>
      <Button variant='primary' className='Button'>Sign Up</Button>
    </div>
  )
}

const PersonalService = () => {
  return(
    <div className='PersonalCard'>
      <h2> Personal Service </h2>
      <ul>
        <li>
        <CheckCircle />
        <p> Make it convenient for you - keep your crypto funds in one place</p>
        </li>
        <li>
        <CheckCircle />
        <p> All of the most popular cryptocurrencies on one platform</p>
        </li>
        <li>
        <CheckCircle />
        <p> Crypto shopping: pay for everyday purchases with digital currency</p>
        </li>
      </ul>
      <Button variant='primary' className='Button'>Sign Up</Button>
    </div>
  )
}

const Plans = () => {
  return (
    <header className='Plans'>
      <h1>Everything you need to get paid</h1>
      <h5>We have a diverse set of solutions for both business and personal use. Everyone will find what they need</h5>
      <div className='Container'>
        <BusinessSolution />
        <PersonalService />
      </div>
    </header>
  )
}

export default Plans