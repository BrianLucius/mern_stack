import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UseEffectCrypto = () => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 6, // (causes 2500.99 to be printed as $2,501)
    });

    const [cryptos, setCryptos] = useState([]);
    let [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false")
        .then((response) => {setCryptos(response.data)})
        // .then((response) => {console.log("Answer from api: ", response.data)})
        .catch((err) => {console.log("API Error: ", err)});
        console.log("I am running while waiting for data");
    }, [buttonClicked]);

    return (
        <div>
            <h1>Fetch Crypto API</h1>
            {/* <button onClick={fetchCryptoData}>Click for Crypto Data</button> */}
            <button onClick={() => {setButtonClicked(!buttonClicked)}}>Refresh Crypto Prices</button>
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

export default UseEffectCrypto