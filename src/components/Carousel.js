import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { TrendingCoins } from "../api"
import "../App.css"
import { Cryptostate } from '../CryptoContext'



export function numberwithcommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
const Carousel = () => {
    // eslint-disable-next-line 
    const [trending, settrending] = useState([])
    const { currency } = Cryptostate()

    const fetchtrending = async () => {
        const { data } = await axios.get(
            TrendingCoins(currency)

        )
        settrending(data)
        // console.log(data);
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchtrending() }, [currency])

    const items = trending.map((coin) => {

        let profit = coin.price_change_percentage_24h >= 0

        return (<Link className='caro' to={`/Coins/${coin.id}`}><img src={coin.image} alt={coin.name} height="60" style={{ marginBottom: 12 }} />
            <span>{coin.symbol} </span>
            <span>{profit && "+"}{coin.price_change_percentage_24h.toFixed(2)}%</span>
            <span>{numberwithcommas(coin.current_price.toFixed(2))}</span>

        </Link>)
    })
    const responsive = { 0: { items: 2 }, 512: { items: 4 }, }
    return (
        <div className='Carousel'>
            <AliceCarousel mouseTracking disableButtonsControls infinite autoPlay={1000} animationDuration={1500} disableDotsControls responsive={responsive} items={items}></AliceCarousel>


        </div>
    )
}

export default Carousel