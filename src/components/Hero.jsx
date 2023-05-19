import "./styles/Hero.scss"
import Button from 'react-bootstrap/Button'
import { Bolt, ArrowDownward, AccountBalanceWallet, Message } from '@mui/icons-material';
import { useState } from "react";
import Web3 from "web3";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'



const HomeHeroText = () => {
    const [buttonClicked, setButtonClicked] = useState('ADD MSH')
    const addWallet = async () => {
        if (window.ethereum){
            const web3 = new Web3(window.ethereum);
            try {
                setButtonClicked('ADDING...')
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                  web3.currentProvider.sendAsync({
                    method: 'wallet_watchAsset',
                    params: {
                        'type': 'ERC20',
                        'options': {
                        'address': '0x6e937ec2a209060278f591b026b386db0c7b88d0',
                        'symbol': 'MSH',
                        'decimals': '18',
                        'image': 'https://raw.githubusercontent.com/nnoromiv/mushee/master/src/assets/mushee.jpg',
                        },
                    },
                    id: Math.round(Math.random() * 100000)
                    })
                setButtonClicked('ADDED')
            } catch (error) {
                if(error.code === 4001){
                    Swal.fire(
                        'Buy Alert',
                        'User denied transaction',
                        'error'
                    )
                } else {
                    Swal.fire(
                        'Buy Alert',
                        'Buy as low as 0.01 BNB.',
                        'error'
                    )
                  }
                  setButtonClicked('TRY AGAIN')  
            }
        }
    };

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
                    <p>Total Token: 1,100,000 MSH </p> 
                </li>
                <li> 
                    <Bolt /> 
                    <p>Constantly building and expanding</p> 
                </li>
                <li> 
                    <AccountBalanceWallet /> 
                    <p>Mushee is building</p> 
                </li>
                <li> 
                    <Message /> 
                    <p>Advanced DeFi</p> 
                </li>
            </ul>
            <div className='AuthButton'>
                {/* <Button variant='primary' className="Button" onClick={addWallet}>{buttonClicked}</Button> */}
                {/* <Button variant='outline-primary' className="Button" href='https://bscscan.com/token/0x6e937ec2a209060278f591b026b386db0c7b88d0'>BSC SCAN</Button>  */}
                <Button variant='outline-primary' className="Button" href=''>Token Information</Button> 
            </div>
        </div>
    )
}

export const HomeHeroImg = () => {
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