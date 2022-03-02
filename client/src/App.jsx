import React, { useEffect, useState } from "react"
import MejorpostorContract from "./contracts/Mejorpostor.json";
import getWeb3 from "./getWeb3";
import './styles/styles.css'
//const  ABI =[
//   {
//     "inputs": [],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Approval",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Transfer",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       }
//     ],
//     "name": "allowance",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "approve",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "balanceOf",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [],
//     "name": "currentOwner",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [],
//     "name": "decimals",
//     "outputs": [
//       {
//         "internalType": "uint8",
//         "name": "",
//         "type": "uint8"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "subtractedValue",
//         "type": "uint256"
//       }
//     ],
//     "name": "decreaseAllowance",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "addedValue",
//         "type": "uint256"
//       }
//     ],
//     "name": "increaseAllowance",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "name",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [],
//     "name": "previousOwner",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [],
//     "name": "symbol",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [],
//     "name": "totalSupply",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "transfer",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "transferFrom",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "sendMoney",
//     "outputs": [],
//     "stateMutability": "payable",
//     "type": "function",
//     "payable": true
//   },
//   {
//     "inputs": [],
//     "name": "getBalanceContract",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [],
//     "name": "getBalance",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function",
//     "constant": true
//   },
//   {
//     "inputs": [],
//     "name": "postulate",
//     "outputs": [],
//     "stateMutability": "payable",
//     "type": "function",
//     "payable": true
//   }
// ]
const App = () => {
    const [values, setValues]= useState(
      { 
        balance:0,
        web3: null,
        accounts: null, 
        contract: null 
      }
    );
    const[infoOwners, setInfoOwners] = useState({
      currentOwner:'',
      previousOwner:''
    })
    const[tokenvalue, setTokenValue] = useState([{
      amount:0,
      symbol:'',
      name:''
    }])
    const[showPostulate, setShowPostulate] =useState(false)
    const[showResultTokens, setShowResultTokens] = useState(false)
    const[valueWeis, setValueWeis]= useState(0)

    async function getInstance (){
      console.log("get instance")
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        //console.log(accounts)
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        console.log(`network id: ${networkId}`)
        const deployedNetwork = MejorpostorContract.networks[networkId];
        const instance = new web3.eth.Contract(
          MejorpostorContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
        console.log('instance')
        console.log(instance)
        // const instance = new web3.eth.Contract(
        //   ABI,
        //   '0x3D0Cb53AF13CE4C420e04FB3c4636AD704b51477'
        // );
        
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        setValues({...values, web3:web3, accounts:accounts, contract:instance})
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Please login in your wallet or check console for details.`,
        );
        console.error(error);
      }
    }

    async function getBalanceF(){
      try {
        console.log('exec get balance')
        // console.log(values.contract)
        const response = await values.contract.methods.getBalance().call();
        const currentOwner = await  values.contract.methods.currentOwner().call();
        const previousOwner = await  values.contract.methods.previousOwner().call();
        // console.log(`response: ${response}`)
        setValues({ ...values, balance: response})
        setInfoOwners({currentOwner:currentOwner, previousOwner:previousOwner})
        setShowPostulate(true)
      } catch (error) {
        console.log(error)
      }
    }
    async function getBalanceTokensF(){
      try {
        console.log('exec get balance Tokens')
      const amount = await values.contract.methods.balanceOf(values.accounts[0]).call();
      const name = await values.contract.methods.name().call();
      const symbol  = await values.contract.methods.symbol().call();
      setTokenValue({
        amount:amount,
        symbol:symbol,
        name:name})
      setShowResultTokens(true)
      } catch (error) {
        console.log(error)
      }
      
    }

    async function postulateF(e){
      try {
        e.preventDefault()
        console.log(`sending weis: ${valueWeis}`)
          // console.log('exec get balance')
        if (valueWeis > values.balance){
          const response = await values.contract.methods.postulate().send({from:values.accounts[0] ,value: valueWeis});
        console.log(`response:`)
        console.log(response)
        }else{
          alert(`Estas intentando postularte con ${valueWeis}Weis. El valor debe ser mayor a ${values.balance} Weis`)
        }
          
      } catch (error) {
        console.log(error)
      }
      //getBalanceF()
        //setValues({ ...values, balance: response})
      }
    function handlerChange(e){
      e.preventDefault()
      setValueWeis(e.target.value)
    }
    useEffect(()=>{
      getInstance()
    },[])
    //useEffect(()=>setShowPostulate(true), values.balance)


    const Interface =()=>{
      return(
        <div className="container">
        <h1 className="title">Dapp El Mejor P ostor</h1>
          <section className="first-grid">
          <div className="info-account">
              <h2>Your Address:</h2>
              <strong>  {values.accounts?? values.accounts}</strong>
            </div>
            <div>
              <button className="btn-def" onClick={()=>getBalanceF()}>Consultar Balance Actual</button>
              {
                values.balance > 0 &&
                <div>
                  <p>Balance Actual : {values.balance} Weis</p>
                  <p>Mayor postor : {infoOwners.currentOwner}</p>
                </div> 
              }
            </div>
          </section>
          <section className="first-grid">
          

          <div>
            <h2>Tokens:</h2>
            <button className="btn-def" onClick={()=>getBalanceTokensF()}>Consultar Tokens</button>
            {showResultTokens &&
              <div>
              {
                tokenvalue.amount>0 
                ?
                <p>En <strong> {tokenvalue.name}'s </strong> , tienes: <strong> {tokenvalue.amount} {tokenvalue.symbol} </strong></p>
                :
                <p>No tienes tokens</p>
              }
              </div>
            }
          
          </div>
          <div>
            <h2>Postularte:</h2>
            { showPostulate
              ? 
              <form action="" onSubmit={(e)=>postulateF(e)} onChange={(e)=>handlerChange(e)}>
                <div className="input-container">
                  <label htmlFor="inputWeis"> Ingresa un valor en Weis para postularte. Recuerda <br /> que debe ser mayor a {values.balance} Weis </label>
                  <input type="number" id="inputWeis" min={0} value={valueWeis} />
                </div>
                <button className="btn-def" type="submit">Postular</button>
              </form>
              :
              <h4>Consulta el balance actual para postularte</h4>
            
          }
          </div>
          </section>
          
        </div>
      )
    }
    return (
      <>
      {values.contract===null
        ? <div className="container"> 
        <h1>Cargando contrato...</h1> 
        <div id="loading-icon"></div>
        <p>Recuerda que tu Wallet debe estar conectada a <strong> Rinkeby Test Network </strong> </p>
        </div> 
        :
          <Interface></Interface>}
      </>
      
    
    )
  
}

export default App