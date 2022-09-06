import React, {useState} from 'react'

const FetchAPI = () => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 6, // (causes 2500.99 to be printed as $2,501)
    });

    const [cryptos, setCryptos] = useState([]);

    const fetchCryptoData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false")
        .then((response) => {return response.json()})
        .then((response) => {setCryptos(response)})
        // .then((response) => {console.log("Answer from api: ", response)})
        .catch((err) => {console.log("API Error: ", err)});
    console.log("I am running while waiting for data");
    }

    return (
        <div>
            <h1>Fetch Crypto API</h1>
            <button onClick={fetchCryptoData}>Click for Crypto Data</button>
            {
                cryptos.map((coin, index) => {return(
                    <div key={index}>
                        <img src={coin.image} alt="Crypto Image" height="50"></img><h3>{coin.name} ({coin.symbol}) {formatter.format(coin.current_price)}</h3>
                    </div>
                )})
            }
        </div>
    )
}

export default FetchAPI