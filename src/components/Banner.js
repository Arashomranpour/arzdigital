import { Container } from '@mui/system';
import React from 'react'


import '../App.css';
import { Typography } from '@mui/material';
import Carousel from './Carousel';



const Banner = () => {
    return (
        <div className="banner">
            <Container className="bannercontext">
                <div
                className="tagline">
                    <h3 style={{"fontWeight":"bold","marginTop":10,"color":"gold"}}>Crypto Arash</h3>
                    <Typography variant='subtitle2' style={{color:"darkgrey",textAlign:"center",marginTop:20}}>GET All THE INFO YOU NEED FROM ME</Typography>
                </div>
                <Carousel></Carousel>
            </Container>
        </div>
    )
}

export default Banner
