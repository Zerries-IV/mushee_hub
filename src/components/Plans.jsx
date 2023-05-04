import { useState } from 'react'
import { Button } from 'react-bootstrap'
import "./styles/Plans.scss"
import { CheckCircle, BoltRounded, ShieldMoonRounded, Circle } from '@mui/icons-material'

export const CryptoForBusiness = () => {
  return(
    <div className='CryptoForBusiness'>
      <h2> Cryptocurrency for business</h2>
      <div className='Card'>
        <CardFlexible />
        <CardFast />
        <CardSecure />
      </div>
    </div>
  )
}

const CardFlexible = () => {
  return(
    <div className='CryptoForBusinessCard'>
      <CheckCircle />
      <h2> Flexible </h2>
      <p>Accept payments wherever it is convenient<br /> for you – on your business’ website, in a bot<br /> or the mobile app.</p>
    </div>
  )
}

const CardFast = () => {
  return(
    <div className='CryptoForBusinessCard'>
      <BoltRounded />
      <h2> Fast </h2>
      <p>The quickest transactions you’ve ever seen,<br /> try it yourself.</p>
    </div>
  )
}

const CardSecure = () => {
  return(
    <div className='CryptoForBusinessCard'>
      <ShieldMoonRounded />
      <h2> Secure </h2>
      <p>Totally anonymous and fully protected –<br /> security is the key.</p>
    </div>
  )
}

const AFTERPRESALE = [
  {
    icon: <Circle />,
    text: 'Pre-sale'
  },
  {
    icon: <Circle />,
    text: 'Launch Pancakeswap'
  },
  {
    icon: <Circle />,
    text: 'Updates on wallets logos and price track'    
  },
  {
    icon: <Circle />,
    text: 'Exchange listing I'
  },
  {
    icon: <Circle />,
    text: 'Publication of news articles and advertisement '
  },
  {
    icon: <Circle />,
    text: 'Exchange listing II '
  },
  {
    icon: <Circle />,
    text: 'Listing Mushee on Coingecko, Coinmarketcap '
  },
  {
    icon: <Circle />,
    text: 'Listing Mushee on data tracking sites.'
  },
  {
    icon: <Circle />,
    text: 'Forge more cooperation I '
  },
  {
    icon: <Circle />,
    text: 'Mushee light wallet on Google Play '
  },
  {
    icon: <Circle />,
    text: 'Exchange listing III'
  },
  {
    icon: <Circle />,
    text: 'Mushee update on Google Play and Appstore'
  },
  {
    icon: <Circle />,
    text: 'Forge more cooperations II'
  },
  {
    icon: <Circle />,
    text: 'Partnership with Dex services '
  },
  {
    icon: <Circle />,
    text: 'Website updates'
  },
  {
    icon: <Circle />,
    text: 'Highlight plan for the year announcements'
  },
  {
    icon: <Circle />,
    text: 'Exchange listing IV'
  },
  {
    icon: <Circle />,
    text: 'Add Mushee launchpad to Mushee wallet'
  },
  {
    icon: <Circle />,
    text: 'Add Swap, Earn to Mushee wallet'
  },
  {
    icon: <Circle />,
    text: 'Mushee launchpad {Pending testing}'
  },
  {
    icon: <Circle />,
    text: 'Mushee P2P {Pending testing}'
  },
  {
    icon: <Circle />,
    text: 'Partnership ENS Domain {Pending}'
  },
  {
    icon: <Circle />,
    text: 'Summarizing and planning'
  },
  {
    icon: <Circle />,
    text: 'Mushee madness {Pending}'
  },
  {
    icon: <Circle />,
    text: 'Exchange listing V'
  },
  {
    icon: <Circle />,
    text: 'Forge more cooperations III'
  },
  {
    icon: <Circle />,
    text: 'Mushee Integration Payer - P2P platform'
  },
  {
    icon: <Circle />,
    text: 'Cross-chain transactions'
  },
  {
    icon: <Circle />,
    text: 'More DApps in Services and options for sponsoring'
  },
  {
    icon: <Circle />,
    text: 'Exploring exchange listing & Community options'
  },
]

const AfterPresale = () => {
  const [ more, setMore ] = useState(10);

  const handleMore = (e) => {
    e.preventDefault();
    setMore(more + 5);    
  }

  const handleLess = (e) => {
    e.preventDefault();
    setMore( more - 20)

  }
  return(
    <div className='AfterPresale'>
      <h2> Solutions for Business </h2>
      <ul>
        {
          AFTERPRESALE.slice(0, more).map( (afterpresale, index) => (
            <li key={index}>
              {afterpresale.icon}       
              <p>{afterpresale.text}</p>
            </li>
          ))
        }
        <Button variant='outline-primary' className='More' onClick={
          more === 30 ? handleLess : handleMore
        }>{
          more === 30 ? <em>less</em> : <em>more</em>
        }</Button>    
      </ul>
    </div>
  )
}

const BeforePresale = () => {
  return(
    <div className='BeforePresale'>
      <h2> Before Presale </h2>
      <ul>
        <li>
        <CheckCircle />
        <p> Creation of token </p>
        </li>
        <li>
        <CheckCircle />
        <p> Whitepaper and roadmap highlights </p>
        </li>
        <li>
        <CheckCircle />
        <p> Contract verification </p>
        </li>
        <li>
        <Circle />
        <p> Token Audit </p>
        </li>
        <li>
        <Circle />
        <p> Partnerships & News articles  </p>
        </li>        
      </ul>
      {/* <Button variant='primary' className='Button' href=''>Presale page</Button> */}
    </div>
  )
}

const Plans = () => {
  return (
    <header className='Plans'>
      <h1>Presale Plan</h1>
      <h5>We have a diverse set of plans for both before and after presale. Everyone would get what they need</h5>
      <div className='Container'>
        <AfterPresale />
        <BeforePresale />
      </div>
    </header>
  )
}

export default Plans