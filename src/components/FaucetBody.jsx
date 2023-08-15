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


    useEffect(() => {
      const initializeContract = async () => {
          try {
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