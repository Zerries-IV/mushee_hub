import { useState } from 'react';
import Web3 from "web3";
import "./styles/web3js.scss"
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

function Web3Connect(){
  const [accounts, setAccounts] = useState([])
  const initWeb3 = async () => {
    if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const connectId = await web3.eth.getChainId();
        if (connectId !== 56)
          Swal.fire(
            'Connect Alert',
            'Please Connect on Smart Chain',
            'error'
          )
        const newAccounts = await web3.eth.getAccounts();
        setAccounts(newAccounts)
    } catch (error) {
        if(error.code === 4001){
            Swal.fire(
              "Error",
              "Please install Metamask, or paste URL link into Trustwallet (Dapps)...",
              "error"
            );        } else {
          console.log(error)
          Swal.fire("Error", "Failed to connect to wallet", "error");
        }
      }
    }
};

  const handleConnect = () => {
    initWeb3();
  }

  const handleDisconnect = async () =>  {
    setAccounts([])
  }

  return(
    <div>
      {
        accounts.length < 1 ?
      <>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
        <div style={{ height: '10px', width: '10px', backgroundColor: 'red', borderRadius: '50%',}}>
          </div><p style={{ margin: '-10px 0 0 10px', color: 'red'}}>DISCONNECTED</p>
        </div>
        <Button variant='primary' className='Connect' onClick={handleConnect}>Connect wallet</Button>
      </>
       :
      <>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
          <div style={{ height: '10px', width: '10px', backgroundColor: 'green', borderRadius: '50%',}}>
            </div><p style={{ margin: '-10px 0 0 10px', color: 'green'}}>CONNECTED</p>
          </div>
          <Button variant='primary' className='Connect' onClick={handleDisconnect}>Disconnect</Button>
      </>
    }
    </div>
  )
}

export default Web3Connect