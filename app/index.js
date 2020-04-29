import React, {useEffect, useState, Fragment} from 'react';
import ReactDOM from 'react-dom'
import {token, token2} from '../API_token/config'
import fetchData from '../utils/fetchData'
import Search from './Components/Search'
import './index.css'

function App () {

    const [symbol, setSymbol] = useState(null)
    const [dailyOpenPrice, setDailyOpenPrice] = useState(null)
    const [dailyLowPrice, setDailyLowPrice] = useState(null)
    const [dailyHighPrice, setDailyHighPrice] = useState(null)
    const [dailyClosingPrice, setDailyClosingPrice] = useState(null)

function searchForSymbol (inputText) {
    const fetchUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${inputText}&apikey=${token2}`
    fetchData(fetchUrl)
     .then(res => {
        const arrFromObject = Object.values(res['Time Series (Daily)'])
        const currentDayPrices = arrFromObject[arrFromObject.length-1]
        setSymbol(res['Meta Data']['2. Symbol'])
        setDailyOpenPrice(currentDayPrices['1. open'])
        setDailyHighPrice(currentDayPrices['2. high'])
        setDailyLowPrice(currentDayPrices['3. low'])
        setDailyClosingPrice(currentDayPrices['4. close'])
     })
}

    return (
        <Fragment>
            <Search searchForSymbol={searchForSymbol} />
            <div>
                <h3>{symbol}</h3>
                {dailyOpenPrice !== null ? <p> Open Price: ${dailyOpenPrice}</p> : null}
                {dailyHighPrice !== null ? <p>High Price: ${dailyHighPrice}</p> : null}
                {dailyLowPrice !== null ? <p>Low Price: ${dailyLowPrice}</p> : null}
                {dailyClosingPrice !== null ? <p>Closing Price: ${dailyClosingPrice}</p> : null}
            </div>
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
