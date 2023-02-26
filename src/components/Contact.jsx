import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./styles/Contact.scss"
import { AutoAwesomeRounded, SettingsRounded, CheckCircleOutlineOutlined, MessageRounded } from '@mui/icons-material'


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
            <h1>Send your contacts and get<br />
            the most suitable solution<br />
            for your business</h1>
            <ul>
                <li>
                    <AutoAwesomeRounded /><p>We will provide you with the best solution for your business</p>
                </li>
                <li>
                    <SettingsRounded /><p>We will provide you with the best solution for your business</p>
                </li>
                <li>
                    <CheckCircleOutlineOutlined /><p>We will provide you with the best solution for your business</p>
                </li>
                <li>
                    <MessageRounded /><p>We will provide you with the best solution for your business</p>
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