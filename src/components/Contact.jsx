import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./styles/Contact.scss"
import { AutoAwesomeRounded, SettingsRounded, CheckCircleOutlineOutlined, MessageRounded, FreeBreakfast } from '@mui/icons-material'

export const Cryptocurency = () => {
    return(
        <div className='Container'>
            <img srcSet='' alt='Crypto-Images' src='https://cryptomus.com/img/cryptocurrencies.webp' />
            <div className='ContainerText'>
                <h1>Сryptocurrencies &<br /> blockchains</h1>
                <p>Pay and get paid in many currencies we support</p>
            </div>
        </div>
    )
}

const Contact = () => {
  return (
    <div className='Contact'>
        <div className='ContactText'>
            <h1>Do I need to pay for Mushee ?</h1>
            <ul>
                <li>
                    <FreeBreakfast /><p>Mushee is free!</p>
                </li>
            </ul>
            <h1>What can I do with Mushee</h1>
            <ul>
                <li>
                    <AutoAwesomeRounded /><p>Send and Receive tokens</p>
                </li>
                <li>
                    <SettingsRounded /><p>Token Swap</p>
                </li>
                <li>
                    <CheckCircleOutlineOutlined /><p>Buy & Sell tokens</p>
                </li>
                <li>
                    <MessageRounded /><p>Bridge</p>
                </li>
            </ul>
            
        </div>
        <div className='ContactForm'>
            <Form>
                <Form.Control type='text' placeholder='Full name*' required/>
                <Form.Control type='email' placeholder='Email*' required/>
                <Form.Control type='text' placeholder='Telegram'/>
                <Form.Check type='checkbox' label='I have read and agree to the Privacy Policy' />
                <Button variant='primary' className='Button'> Send</Button>
            </Form>
        </div>
    </div>
  )
}

export default Contact