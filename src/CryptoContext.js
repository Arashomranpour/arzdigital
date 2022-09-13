import React, { createContext, useContext, useState } from 'react'
const Crypto=createContext()
const CryptoContext = ({children}) => {

    const [currency, setcurrency] = useState("USD")

    // useEffect(() => {

    // },[])

  return (
      <Crypto.Provider value={{currency,setcurrency}}>
        {children}
      </Crypto.Provider>
  )
}

export default CryptoContext

export const Cryptostate=()=>{
  return  useContext(Crypto)
}