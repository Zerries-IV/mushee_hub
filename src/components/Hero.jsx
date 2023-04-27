import React from 'react'
import "./styles/Hero.scss"
import Button from 'react-bootstrap/Button'
import { Bolt, ArrowDownward, AccountBalanceWallet, Message } from '@mui/icons-material';


const HomeHeroText = () => {
    return (
        <div className='HomeHero_Text'>
            <h1>
                Decentralized wallet platform <br />with Mushee
            </h1>
            <p>Mushee is building a decentralized ecosystem focusing on assets, identity, and socializing. 
            <br />We are constantly building and expanding our scope to include more advanced DeFi </p>
            <ul>
                <li> 
                    <ArrowDownward /> 
                    <p>Tokens For Presale: 240,000MSH </p> 
                </li>
                <li> 
                    <Bolt /> 
                    <p>Initial Marketcap (estimate): $98,431</p> 
                </li>
                <li> 
                    <AccountBalanceWallet /> 
                    <p>Soft cap:  30BNB</p> 
                </li>
                <li> 
                    <Message /> 
                    <p>Presale Ends: 29-04-23 00:00</p> 
                </li>
            </ul>
            <div className='AuthButton'>
                <Button variant='primary' className="Button" href='https://mushee.gitbook.io/mushee/tokenomics-and-roadmap/mushee-token'>Token information</Button>
                <Button variant='outline-primary' className="Button" href='https://www.pinksale.finance/launchpad/0x6C05D1A3B0dbb890bb32f36ba13b6957ed18EA0E?chain=BSC'>Presale information</Button> 
            </div>
        </div>
    )
}

const HomeHeroImg = () => {
    return (
        <img alt='mushee' className='HomeHero_Img' srcSet='' src='https://1118740874-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FIIgoyPe5vwhGAXRZWQIA%2Fuploads%2FF3fUjvUqoKJJVs7SZomr%2FIMG_20230222_171353_660.jpg?alt=media&token=89ca6311-c011-4b22-8d3f-154137843199' />
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