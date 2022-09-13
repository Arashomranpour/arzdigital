import React, { useState, useEffect } from 'react'
import { Cryptostate } from '../CryptoContext'
// import { axios as ax } from 'axios';
import { HistoricalChart } from '../api';
// import { axios } from 'axios';
// import { HistoricalChart } from './../api';
import {LinearProgress } from '@mui/material'
// import { axios } from 'axios';
import { Line } from 'react-chartjs-2';
// import {} from 'react-html-parser'
import { ChartDays } from "./data"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Selectedbutton from './selectedbutton';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Coininfo = ({ coin }) => {
  const { currency } = Cryptostate()
  const [days, setdays] = useState(30)
  const [histo, sethisto] = useState()

  const getc = async () => {

    fetch(HistoricalChart(coin.id, days, currency)).then(response => {
      return response.json();
    }).then(data => {
      sethisto(data.prices);
    })
    // const { data } = await axios.get(HistoricalChart(coin.id,days,currency))
    // sethisto(data)


  }

  // console.log(histo)

  useEffect(() => {
    getc()
// eslint-disable-next-line
  }, [days, currency]);


  return (

    // style={{ width: "75%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 20 }}
    <div className='rightt' style={{ width: "75%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
      {!histo ? <LinearProgress style={{ backgroundColor: "gold" }}></LinearProgress> :
        (<Line style={{ marginLeft: 2 }}
          options={{ elements: { point: { radius: 0.3 } } }}
          data={{
            labels: histo.map(coin => {
              let date = new Date(coin[0])
              let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()}pm` : `${date.getHours()}:${date.getMinutes()}am`
              return days === 1 ? time : date.toLocaleDateString()

            }),
            datasets: [{
              data: histo.map((coin) => coin[1])
              , label: `Price past ${days}`
              , borderColor: "#EEBC1D"
            }]
          }}
        ></Line>)}
      <div className="" style={{ display: "flex", marginTop: 20, justifyContent: "space-between" }}>
        {ChartDays.map(day => (<Selectedbutton selected={day.value === days} onClick={() => { setdays(day.value) }} key={day.value}>{day.label}</Selectedbutton>))}
        {/* 
        <Button variant="outlined" color="success" style={{ marginBottom:40,marginRight: 20, marginLeft: 20, width: "90%" }}
        >24 Hours</Button>
        <Button variant="outlined" color="success" style={{ marginBottom: 40, marginRight: 20, marginLeft: 20, width: "90%" }}
        >30 Days</Button>
        <Button variant="outlined" color="success" style={{ marginBottom: 40, marginRight: 20, marginLeft: 20, width: "90%" }}
        >3 Months</Button>
        <Button variant="outlined" color="success" style={{ marginBottom: 40, marginRight: 20, marginLeft: 20, width: "90%" }}
        >1 Year</Button> */}
      </div>
    </div>
  )
}

export default Coininfo