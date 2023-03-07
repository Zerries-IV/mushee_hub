import React from 'react'
import { Button } from 'react-bootstrap'
import "./styles/Mushee.scss"
import {  ChatBubbleOutlineRounded, ArrowUpwardRounded, ShieldRounded, Shop2Rounded } from '@mui/icons-material'

const Affiliate = () => {
  return(
    <div className='AffiliateCard'>
      <h2> Abstract </h2>
        <p>Bitcoin, Ethereum, and various derivative digital assets with Blockchain as their underlying technology have experienced explosive growth. Over 1,300 kinds of digital assets are now available for trading on the global market, with a total economic volume of more than $991 billion, which is still growing exponentially, with huge market potential</p>
      <Button variant='primary' className='Button' href='https://mushee.gitbook.io/mushee/abstract'>Read more...</Button>
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
        <p> Mushee & DEFI </p>
        </li>
        <li>
        <ShieldRounded />
        <p>  Mushee functions </p>
        </li>
        <li>
        <ArrowUpwardRounded />
        <p> Digital asset</p>
        </li>
        <li>
        <Shop2Rounded />
        <p> Decentralised loans </p>
        </li>
      </ul>
      <div className='AuthButton'>
            <Button variant='outline-primary' className="Button" href='https://mushee.gitbook.io/mushee/features'>Read more...</Button> 
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