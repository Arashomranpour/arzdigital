import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../api'
import { Cryptostate } from '../CryptoContext'
import Coininfo from './Coininfo'
import "../App.css"
// import ReactHtmlParser fo
import { LinearProgress } from '@mui/material'
import { numberwithcommas } from './Carousel'
// import { ReactHtmlParser } from 'react-html-parser';
// import { ReactHtmlParser } from 're';
// import { ReactHtmlParser } from 'react-html-parser';
const Coins = () => {

    const { id } = useParams()
    const { currency } = Cryptostate()
    const [coin, setcoin] = useState()
    const fetchmycoin = async () => {
        const { data } = await axios.get(SingleCoin(id))
        setcoin(data)

        //  const Data=data
    }
    // console.log(coin)

    useEffect(() => {
        fetchmycoin()
    },)
    if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
    // console.log(arz);
    return (
        <div className="containerr">
            <div className='side'>
                <img src={coin.image.large} style={{ justifyContent: "center", alignItems: "center" }} alt={coin.name} height="200" />
                <h3 style={{marginTop:20 ,color:"white"}}>{coin.name}</h3>
                <div className='market'>
                    <span  style={{ display: "flex", marginTop: 15 }}>

                        <h5>Rank : {coin.market_cap_rank}</h5>
                        </span>
                    <h5>Symbol : {coin.symbol}</h5>

                    <h5>Price : {numberwithcommas(coin.market_data.current_price[currency.toLowerCase()])}</h5>
                    

                </div>
                {/* <img src={arz.image.large} height="200" /> */}
            </div>
            <Coininfo coin={coin} style={{marginLeft:20}}></Coininfo>
        </div>
    )
}

export default Coins
