import React from 'react'
import "./styles/Hero.scss"
import Button from 'react-bootstrap/Button'
import { Bolt, ArrowDownward, AccountBalanceWallet, Message } from '@mui/icons-material';


const HomeHeroText = () => {
    return (
        <div className='HomeHero_Text'>
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

const HomeHeroImg = () => {
    return (
        <img alt='mushee' srcSet='' src='https://cryptomus.com/img/title-phone-dark.png' />
    )
}

const BusinessHeroText = () => {
    return(
        <div className='BusinessHero_Text'>
            <p>PAYMENT GATEWAY</p>
            <h1>
                Accept payments in Bitcoin and other<br /> currencies with our crypto gateway
            </h1> 
            <p>Is your business ready to classic payment systems replacement?<br/>
                We are here to help you make it more sophisticated and attract those modern<br />
                clients who prefer to pay in crypto.</p>           
            <div className='AuthButton'>
                <Button variant='primary' className="Button">Connect</Button>
                <Button variant='outline-primary' className="Button">Contact us</Button> 
            </div>
        </div>
    )
}

export const BusinessHero = () => {
    return(
        <header className='BusinessHero'>
            <BusinessHeroText />
        </header>
    )
}

const HomeHero = () => {
  return (
    <header className='HomeHero'>
        <HomeHeroText />
        <HomeHeroImg />
    </header>
  )
}

export default HomeHero