import React from 'react'
import "./styles/Hero.scss"
import Button from 'react-bootstrap/Button'
import { Bolt, ArrowDownward, AccountBalanceWallet, Message } from '@mui/icons-material';


const HeroText = () => {
    return (
        <div className='Hero_Text'>
            <h1>
                Accept Crypto Payments with<br />Mushee
            </h1>
            <p>Mushee provides access to useful tools for business and private use.
            <br />Accept and receive crypto payments easily with our crypto gateway.</p>
            <ul>
                <li> 
                    <ArrowDownward /> 
                    <p>Low commission of 0.4%</p> 
                </li>
                <li> 
                    <Bolt /> 
                    <p>Quick crypto transactions</p> 
                </li>
                <li> 
                    <AccountBalanceWallet /> 
                    <p>Easy crypto payment integration</p> 
                </li>
                <li> 
                    <Message /> 
                    <p>Integration assistance</p> 
                </li>
            </ul>
            <div className='AuthButton'>
                <Button variant='primary' className="Button">Connect</Button>
                <Button variant='outline-primary' className="Button">Contact us</Button> 
            </div>
        </div>
    )
}

const HeroImg = () => {
    return (
        <img alt='mushee' srcSet='' src='https://cryptomus.com/img/title-phone-dark.png' />
    )
}

const Hero = () => {
  return (
    <header className='Hero'>
        <HeroText />
        <HeroImg />
    </header>
  )
}

export default Hero