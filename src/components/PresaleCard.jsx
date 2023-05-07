import { Divider } from "@mui/material"
import "./styles/PresaleCard.scss"
import { Button } from 'react-bootstrap'
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import Web3Connect from "../web3";
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import { ADDRESS } from "../Constants";
import ABI from '../abi.json'
import Web3 from "web3";



const TokenSchema = Yup.object().shape({
    TokenPrice: Yup.number().min(0.01, 'Price too small'),
    address : Yup.string().min(39, 'Invalid address')
})

const TokenSale = () => {
    const [buttonClicked, setButtonClicked] = useState('BUY TOKEN')
    const buyMushee = async (price) => {
        const web3 = new Web3(window.ethereum)
        if (window.ethereum) {
        try {
            setButtonClicked('LOADING...')
            const newAccounts = await web3.eth.getAccounts();
            const newContract = new web3.eth.Contract(ABI, ADDRESS);
            const userAddress = newAccounts.toString()
                await newContract.methods.buy(userAddress, price).send({from:ADDRESS, value:price})
                .on('transactionHash', (hash) => {
                    console.log(`Transaction hash: ${hash}`);
                })
                .on('confirmation', (confirmationNumber, receipt) => {
                    console.log(`Confirmation number: ${confirmationNumber}`);
                    console.log(`Receipt: ${receipt}`);
                })
                .on('error', (error) => {
                    console.error(error);
                })
            setButtonClicked('BUY TOKEN')  
        } catch (error) {
            setButtonClicked('BUY TOKEN')  
            if(error.code === 4001){
                Swal.fire(
                    'Buy Alert',
                    'User denied transaction',
                    'error'
                )
            } else if(error.code === 'INVALID_ARGUMENT') {
                Swal.fire(
                    'Buy Alert',
                    'Connect your wallet',
                    'error'
                )
            }else {
                console.error(error.code)
                Swal.fire(
                    'Buy Alert',
                    'Buy as low as 0.01 BNB.',
                    'error'
                )
              }
          }
        }  else {
            Swal.fire(
              'Connection error',
              'Try connecting your account first',
              'error'
            )
        }
    };

    const handleBuy = (values) => {
        buyMushee(Number(values.TokenPrice)* 1e5);
    }

    function countdown() {
        const targetDate = new Date('May 31, 2023 23:59:59').getTime();
        
        const intervalId = setInterval(() => {
          const now = new Date().getTime();
          const timeRemaining = targetDate - now;
          
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
          
          const countdownElement = document.getElementById('countdown');
          if (days && hours && minutes && seconds !== null){
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
          }    

          if (timeRemaining < 0) {
            clearInterval(intervalId);
            countdownElement.innerHTML = "EXPIRED";
          }
        }, 1000);
    }
      
    countdown();
  return(
    <div className='TokenSaleCard'>
      <h1> Presale </h1>
      <Web3Connect />
      <h2>Presale ends in</h2>
      <h2 id='countdown'></h2>
        <p>Buy 0.01 BNB = 500 MSH</p>
        <Divider color='white'/>
        <p>Buy 0.1 BNB = 500 MSH</p>
        <Divider color='white'/>
        <p>Buy 1 BNB = 500 MSH</p>
        <Divider color='white'/>
        <p>Buy 2 BNB = 500 MSH</p>
        <Divider color='white'/>
        <Formik initialValues={{
            TokenPrice: 0
        }}
        validationSchema={TokenSchema}
        onSubmit={handleBuy}>
            {({ errors, values }) => (
            <Form>
                { errors.TokenPrice ? (
                    <div style={{color: 'red'}}>{errors.TokenPrice}</div>
                ) : <div></div>}
                <Field type='text' id='TokenPrice' name='TokenPrice' placeholder='0.01' min='0.01' required/>
                {
                    values.TokenPrice < 0.009 ?
                    <Button variant='primary' className='Button' disabled>BUY TOKEN</Button>
                    :
                    <Button variant='primary' type='submit' className='Button' >{buttonClicked}</Button> 
                }
            </Form>
            )}
        </Formik>
    </div>
  )
}

const Referral = () => {
    const validateBSCAddress = (address) => {
        const bscAddressRegex = /^0x[0-9a-fA-F]{40}$/;
        return bscAddressRegex.test(address);
    }

    let refLink = ''

    const getReferralLink = (address) => {
        validateBSCAddress(address) ?
        refLink = 'https://mushee.shop/?ref=' + address
        : Swal.fire(
            'Referral Alert',
            'Referral error has ocurred',
            'error'
        )
    }


    const getAirdrop = async () => {
        const web3 = new Web3(window.ethereum);
        if (window.ethereum){
            try {
                const airdropVal = Number(1) * 1e6
                const accounts = await web3.eth.getAccounts();
                const newContract = new web3.eth.Contract(ABI, ADDRESS);
                    await newContract.methods.airdrop(accounts, airdropVal).send({from:accounts[0], value:airdropVal})
                    .on('transactionHash', (hash) => {
                        console.log(`Transaction hash: ${hash}`);
                    })
                    .on('confirmation', (confirmationNumber, receipt) => {
                        console.log(`Confirmation number: ${confirmationNumber}`);
                        console.log(`Receipt: ${receipt}`);
                    })
                    .on('error', (error) => {
                        console.error(error);
                    });
            } catch (error) {
                if(error.code === 4001){
                    Swal.fire(
                        'Buy Alert',
                        'User denied transaction',
                        'error'
                    )
                } else {
                    console.error(error)
                    Swal.fire(
                        'Buy Alert',
                        'Buy as low as 0.01 BNB.',
                        'error'
                    )
                  }
            }
        } else {
            Swal.fire(
              'Connection error',
              'Try connecting your account first',
              'error'
            )
        }
    };
    
    const handleAirdrop = () => {
        getAirdrop();
    }

    function handleSubmit(value){
        getReferralLink(value.address)
    }

    const copyToClipboard = () => {
       if(refLink.startsWith('https')){
        navigator.clipboard.writeText(refLink);
        Swal.fire(
            'Copy Success',
            'success'
        )
       } else {
        Swal.fire(
            'Copy Error',
            'Generate a referral link first',
            'error'
        )
       }
    }

  return(
    <div className='Referral'>
      <h2> Airdrop </h2>
      <p> Claim Airdrop or Buy MSH Tokens using your personal Referral Link</p>
      <Formik initialValues={{
            address: ''
        }}
        validationSchema={TokenSchema}
        onSubmit={handleSubmit}>
            {({ errors }) => (
            <Form>
                <Button variant='outline-primary' className='Button' onClick={handleAirdrop}>CLAIM MSH</Button>
                { errors.address ? (
                    <div style={{color: 'red'}}>{errors.address}</div>
                ) : <div></div>}
                <Field id='address' name='address' placeholder='BEP-20 address' required/>
                {
                    refLink === '' ?
                    <div></div>
                    :
                    <p style={{ width: 'fit-content', height: 'fit-content', fontSize: '8px'}}>{refLink}</p>
                }
                {
                    errors.address ?
                    <Button variant='outline-primary' type='submit' className='Button' disabled >GET REFERRAL LINK</Button>
                    :
                    <Button variant='outline-primary' type='submit' className='Button'>GET REFERRAL LINK</Button>
                }
                <p onClick={copyToClipboard}>copy link</p>
            </Form>
            )}
        </Formik>
    </div>
  )
}

const PresaleCard = () => {
  return (
    <header className='PresaleCard'>
      <div className='Container'>
        <TokenSale />
        <Referral />
      </div>
    </header>
  )
}

export default PresaleCard