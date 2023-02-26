import React from 'react'
import { Button } from 'react-bootstrap'
import "./styles/Mushee.scss"
import {  ChatBubbleOutlineRounded, ArrowUpwardRounded, ShieldRounded, Shop2Rounded } from '@mui/icons-material'

const Affiliate = () => {
  return(
    <div className='AffiliateCard'>
      <h2> Bring a client and receive<br />
        up to 30% of the payment<br />
        commission </h2>
        <p>Share your referral link and earn up to 30% of the<br />
            payment commission from all clients who use your link</p>
      <Button variant='primary' className='Button'>Get a Referral Link</Button>
    </div>
  )
}

const Service = () => {
  return(
    <div className='Service'>
      <h2> Start using Mushee now </h2>
      <p> Mushee Helps You Receive Payments From Anyone In The World</p>
      <ul>
        <li>
        <ChatBubbleOutlineRounded />
        <p> 24/7 Live Chat Support </p>
        </li>
        <li>
        <ShieldRounded />
        <p>  Superior security </p>
        </li>
        <li>
        <ArrowUpwardRounded />
        <p> Automated Mass Payouts</p>
        </li>
        <li>
        <Shop2Rounded />
        <p> E-commerce Integration Plugins</p>
        </li>
      </ul>
      <div className='AuthButton'>
            <Button variant='primary' className="Button">Sign up now</Button>
            <Button variant='outline-primary' className="Button">Connect with us</Button> 
        </div>
    </div>
  )
}

const Mushee = () => {
  return (
    <header className='Mushee'>
      <div className='Container'>
        <Affiliate />
        <Service />
      </div>
    </header>
  )
}

export default Mushee