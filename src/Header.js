import React from 'react'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import './App.css';
import FormHelperText from '@mui/material/FormHelperText'
// import { useNavigate } from 'react-router-dom';
import { MenuItem, Select, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Cryptostate } from './CryptoContext';
const Header = () => {

    const { currency, setcurrency }=Cryptostate()

    // console.log(currency)

    // const theme = createTheme({
    //     palette:{
    //         primary:{
    //             main:"#fff"
    //         },
    //         type:"dark"
    //     }
    // });
    return (
        // <ThemeProvider theme={theme}>
        <AppBar color='transparent' position='static'>
                <Container >
                    <Toolbar >
                    <Typography variant='h5' className='titlee'>
                       <a href="/">
                            Crypto by Arash
                       </a>  
                    </Typography>
                    <FormHelperText style={{color:"grey",marginBottom:7}}>select currency  : </FormHelperText>

                    <Select variant="standard"
                    value={currency}
                    onChange={(e)=>setcurrency(e.target.value)}
                    style={{ width:100,height:40,marginRight:15 ,color:"grey"}}
                    >
                        <MenuItem value={"USD"}>
                            USD
                        </MenuItem>
                        <MenuItem value={"EUR"}>
                            EUR
                        </MenuItem>
                    </Select>
                </Toolbar>
            </Container>

        </AppBar>
        // </ThemeProvider>

    )
}

export default Header
