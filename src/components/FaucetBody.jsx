import "./styles/FaucetBody.scss"
import { Button } from 'react-bootstrap'
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { FAUCETADDRESS } from "../Constants";
import * as ABI from '../../build/contracts/TestFaucet.json'
import Web3 from "web3";
import Countdown from "./Countdown";

const TokenSchema = Yup.object().shape({
    address: Yup.string().matches(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address')
})

const TokenSale = () => {
    const web3 = new Web3(window.ethereum)
    const [contract, setContract] = useState(null)
    const [requestCooldown, setRequestCooldown] = useState(0);
    const [web, setWeb] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState('');


    useEffect(() => {
      const initializeContract = async () => {
          try {
            setSelectedAddress('')
            const contractInstance = new web3.eth.Contract(ABI.abi, FAUCETADDRESS);            
            setContract(contractInstance)
            return contractInstance;
          } catch (error) {
            console.log(error)
              Swal.fire({
                  title: "Error",
                  text: "Make sure Metamask is installed",
                  icon: "error",
              });
          }
      };
        const fetchData = async () => {
          try {
           await initializeContract();
          } catch (error) {
            Swal.fire({
              title: error.message,
              icon: 'error',
            });
          }
        };    
        fetchData();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new Web3(window.ethereum);
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x61', // BSC Testnet chain ID
              chainName: 'Binance Smart Chain Testnet',
              nativeCurrency: {
                name: 'TestnetBNB',
                symbol: 'tBNB',
                decimals: 18,
              },
              rpcUrls: ['https://data-seed-prebsc-2-s3.binance.org:8545'], // BSC Testnet RPC URL
              blockExplorerUrls: ['https://testnet.bscscan.com'], // BSC Testnet explorer URL
            },
          ],
        });
        setWeb(provider);
        
        const accounts = await provider.eth.getAccounts();
        setSelectedAddress(accounts[0]);
        Swal.fire({
          title: 'Connected to wallet',
          text: selectedAddress,
          icon: 'success',
        });
      } catch (error) {
        Swal.fire({
          title: 'Error connecting to wallet',
          text: error.message,
          icon: 'error',
        });
      }
    }
    else if (window.BinanceChain) { // Check for Trust Wallet
      try {
        const provider = new Web3(window.BinanceChain);
        await window.BinanceChain.request({ 
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x61', // BSC Testnet chain ID
            chainName: 'Binance Smart Chain Testnet',
            nativeCurrency: {
              name: 'TestnetBNB',
              symbol: 'tBNB',
              decimals: 18,
            },
            rpcUrls: ['https://data-seed-prebsc-2-s3.binance.org:8545'], // BSC Testnet RPC URL
            blockExplorerUrls: ['https://testnet.bscscan.com'], // BSC Testnet explorer URL
          },
        ],
       });
       await window.ethereum.request({ method: 'eth_requestAccounts' });

        setWeb(provider);
        
        const accounts = await provider.eth.getAccounts();
        setSelectedAddress(accounts[0]);
        Swal.fire({
          title: 'Connected to wallet',
          text: selectedAddress,
          icon: 'success',
        });
      } catch (error) {
        Swal.fire({
          title: 'Error connecting to wallet',
          text: error.message,
          icon: 'error',
        });
      }
    }  else {
      Swal.fire({
          title: 'No Ethereum provider found. Please install MetaMask or other compatible wallet.',
          icon: 'error',
        });
    }
  };

  const getCooldownForAddress = async (address) => {
    try{
      const contractInstance = new web3.eth.Contract(ABI.abi, FAUCETADDRESS)
      if (contractInstance) {
        const coolDown = await contractInstance.methods.getCooldownForAddress(address).call();
        console.log(coolDown)
        setRequestCooldown(parseInt(coolDown));  
      } else {
        const coolDown = await new web3.eth.Contract(ABI.abi, FAUCETADDRESS).methods.requestCooldown().call();
        setRequestCooldown(parseInt(coolDown));  
        Swal.fire({
          title: "No connected accounts found.",
          icon: 'error',
        });
      }
      
    } catch (error){
      console.log(error)
    }
  }

  const requestToken = async (values) => {
      try{
          const receipt = await contract.methods.requestTokens().send({ from: values.address });
          console.log(receipt)
          const address = (values.address).toString()
          await getCooldownForAddress(address)
          Swal.fire({
            title: 'Mushee Sent',
            icon: 'success',
          });
      } catch (err) {
          console.error(err);
          Swal.fire({
            title: err.message,
            icon: 'error',
          });
      }
  }

      
  return(
    <div className='FaucetCard'>
      <h1> Get Test Tokens </h1>
      <p>This faucet transfers Test Tokens and Gas Tokens on Mushee. Confirm details before submitting</p>
      {
        selectedAddress === '' ?
        <Button variant='primary' className='Button' onClick={connectWallet}>Connect Wallet</Button>
        :
        <p>{selectedAddress}</p>
      }
      <Countdown seconds={requestCooldown} />
        <Formik initialValues={{ address: '' }}
        validationSchema={TokenSchema}
        onSubmit={requestToken}>
            {({ errors }) => (
            <Form>
                <div style={{color: 'red'}}>{errors.address}</div>
                <Field type='text' id='address' name='address' placeholder='0xxxxxxxxxxxxxxxxxxxxxx' required/>
                <Button variant='primary' className='Button' type="submit">Submit</Button>    
            </Form>
            )}
        </Formik>
    </div>
  )
}

const FaucetBody = () => {
  return (
    <header className='FaucetBody'>
      <div className='Container'>
        <TokenSale />
      </div>
    </header>
  )
}

export default FaucetBody