import React, { useState, useEffect } from 'react'
import { CoinList } from '../api'
import { Cryptostate } from '../CryptoContext'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Container } from '@mui/system'
import { LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
// import { Navigate } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { numberwithcommas } from './Carousel';
const Cointeble = () => {
    const [coins, setcoins] = useState([])
    const [loading, setloading] = useState(false)
    const { currency } = Cryptostate()
    const [search, setsearch] = useState("bitcoin")

    const Navigate = useNavigate()

    const fetchcoins = async () => {
        setloading(true)
        const { data } = await axios.get(CoinList(currency))
        setcoins(data)
        setloading(false)
        console.log(coins)
    }
    useEffect(() => {
        fetchcoins()

// eslint-disable-next-line
    }, [currency])

    const handlesearch = () => {
        // console.log(coins)
        return coins.filter((coin) => (coin.id.includes(search) || coin.name.toLowerCase().includes(search)))
        // console.log(coins)
        
    }
    // const history = ()
    return (
        <Container style={{ textAlign: "center" }}>
            <h4 style={{ margin: 18, color: "grey" }}>Crypto Prices by market cap</h4>
            <Button variant="text" style={{ color:"DarkSeaGreen", marginTop: 5,marginBottom:10 }} onClick={() => setsearch("")} >SHOW All</Button>

            <TextField variant="filled" onChange={(e) => { setsearch(e.target.value) }} style={{ marginBottom: 20, width: "100%", backgroundColor: "gold", borderRadius: 2 }} label="Search for Crypto"></TextField>
            <TableContainer>
                {loading ? (
                    <LinearProgress style={{ backgroundColor: "gold" }}></LinearProgress>
                ) : (<Table>
                    <TableHead ><TableRow>
                        {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (<TableCell key={head} align={head === "Coin" ? "" : "right"} style={{ color: "gold" }}> {head} </TableCell>))}



                    </TableRow></TableHead>
                    <TableBody >
                        {handlesearch().map((row) => {
                    
                            const profit = row.price_change_percentage_24h > 0;
                            return (
                         // eslint-disable-next-line 
                                <TableRow className="roww" key={row.name} onClick={() => Navigate(`/Coins/${row.id}`)}>
                                    {/* {console.log(row)} */}
                                    <TableCell  component='th' scope="row" style={{ display: "flex", gap: 15, color: "white" }}>
                                        <img src={row.image} alt={row.name} height="50"  style={{ marginBottom: 10 }}></img>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <span>
                                                {row.symbol}
                                            </span>
                                            <span style={{ color: "grey" }}>{row.name}</span>
                                        </div>


                                    </TableCell>
                                    {/* <TableCell component="th" scope="row" style={{ display: "flex", gap: 15 ,color:"white"}}></TableCell> */}

                                    <TableCell align='right' style={{ color: "grey" }}>
                                        {numberwithcommas(row.current_price.toFixed(2))}
                                    </TableCell>
                                    <TableCell align='right' style={{ color: profit > 0 ? "green" : "red" }}>
                                        {profit && "+"}
                                        {row.price_change_percentage_24h.toFixed(2)}%
                                    </TableCell>
                                    <TableCell align='right' style={{ color: "grey" }}>
                                        {numberwithcommas(row.market_cap.toString().slice(0, -6))}m
                                    </TableCell>
                                </TableRow>)
                        })}

                    </TableBody>
                </Table>)}
            </TableContainer>




        </Container>
    )
}

export default Cointeble
