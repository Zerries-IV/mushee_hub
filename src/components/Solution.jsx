import React from 'react'
import { LaptopChromebook, Telegram, Storefront, BookOnline, WarningAmberRounded, SportsEsportsRounded } from '@mui/icons-material'
import "./styles/Solution.scss"

const LIST = [
    {
        icon: <LaptopChromebook className='muiIcon'/>,
        text: 'Online Services',
        subText: 'Easily accept payments for subscriptions and services'
    },
    {
        icon: <Telegram className='muiIcon'/>,
        text: 'Telegram bots',
        subText: 'Fully automated payment system for bots – could you imagine something more convenient?'
    },
    {
        icon: <Storefront className='muiIcon'/>,
        text: 'E-commerce',
        subText: 'Attract new customers with an unusual payment method'
    },
    {
        icon: <BookOnline className='muiIcon'/>,
        text: 'Online schools',
        subText: 'Selling educational courses with our solution is as simple as it is possible'
    },
    {
        icon: <WarningAmberRounded className='muiIcon'/>,
        text: 'High-risk projects ?',
        subText: 'Offer your clients an alternative to fiat payments'
    },
    {
        icon: <SportsEsportsRounded className='muiIcon'/>,
        text: 'Gaming service',
        subText: 'Sell video games and in-game items with crypto with no extra fees'
    },
]

const Solution = () => {
  return (
    <div className='Solution'>
        <h1>Mushee - one solution<br /> for many businesses</h1>
        <div className='SolutionList'>
            {
                LIST.map(list => {
                    return(
                        <div className='List' key={list.text}>
                            {list.icon}
                            <div>
                                <h2>{list.text}</h2>
                                <p>{list.subText}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Solution