<div align="center">

# 🪙 Crypto Tracker (React)

**A cryptocurrency dashboard with live market data, a trending carousel, a searchable coin table and per-coin price charts.**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)
![CoinGecko](https://img.shields.io/badge/CoinGecko-API-8DC647)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

</div>

---

## ✨ Features

- 🏠 **Home banner** with a carousel of the **top trending coins** (24h change).
- 📋 **Coin table** - top 100 coins by market cap with live search.
- 💱 **Currency** kept in a shared React context, used by every API call.
- 📈 **Coin page** - description, market data and a historical **price chart** with selectable time ranges (powered by Chart.js).
- 🌐 Uses the free [CoinGecko API](https://www.coingecko.com/en/api) - no key required.

## 🚀 Getting Started

```bash
git clone https://github.com/Arashomranpour/arzdigital.git
cd arzdigital
npm install
npm start       # http://localhost:3000
```

Build for production:

```bash
npm run build
```

## 🔗 Routes

| Route | Page |
|---|---|
| `/` | Home - banner, trending carousel, coin table |
| `/Coins/:id` | Coin details and historical chart |

## 📁 Project Structure

```
src/
├── App.js  Header.js  CryptoContext.js  api.js
└── components/
    ├── Banner.js  Carousel.js        # Trending section
    ├── Cointeble.js  Homepage.js     # Market table
    ├── Coins.js  Coininfo.js         # Coin detail page + chart
    └── selectedbutton.js  data.js
```

## 🛠️ Tech Stack

`React` · `React Router` · `Chart.js (react-chartjs-2)` · `Axios` · `CoinGecko API`
