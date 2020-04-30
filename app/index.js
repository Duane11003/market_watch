import React, {useEffect, useState, Fragment} from 'react';
import ReactDOM from 'react-dom'
import {token, token2} from '../API_token/config'
import fetchData from '../utils/fetchData'
import Search from './Components/Search'
import './index.css'
import Favorites from './Components/Favorites'

function App () {

    const [symbol, setSymbol] = useState(null)
    const [dailyOpenPrice, setDailyOpenPrice] = useState(null)
    const [dailyLowPrice, setDailyLowPrice] = useState(null)
    const [dailyHighPrice, setDailyHighPrice] = useState(null)
    const [dailyClosingPrice, setDailyClosingPrice] = useState(null)
    const [error, setError] = useState(false)
    const [favoriteStock, setFavoriteStock] = useState([])

    function generateId () {
        return '_' + Math.random().toString(36).substr(2, 9);
      }


    const addToFav = () => {
        setFavoriteStock((favoriteStock) => favoriteStock.concat({
            text: symbol,
            id: generateId()
        }))
    }
      
    const deleteFavorite = (id) => setFavoriteStock((favoriteStock) => favoriteStock.filter((item) => item.id !== id))

    function searchForSymbol (inputText) {
        const fetchUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${inputText}&apikey=${token2}`
        fetchData(fetchUrl)
        .then(res => { 
            if (!res) setError(true)
            const arrFromObject = Object.values(res['Time Series (Daily)'])
            const currentDayPrices = arrFromObject[arrFromObject.length-1]
            setSymbol(res['Meta Data']['2. Symbol'])
            setDailyOpenPrice(Math.ceil(currentDayPrices['1. open'] * 100) / 100)
            setDailyHighPrice(Math.ceil(currentDayPrices['2. high'] * 100) / 100)
            setDailyLowPrice(Math.ceil(currentDayPrices['3. low'] * 100) / 100)
            setDailyClosingPrice(Math.ceil(currentDayPrices['4. close'] * 100) / 100)
        }).catch((err) => {
            setError('There was an error:', err)
        })
    }

    console.log(favoriteStock)
    return (
        <Fragment>
            <Search searchForSymbol={searchForSymbol} />
            <div>
                <h3>{symbol}</h3>
                {error === null ? <p>There was an error {error}</p> : null}
                {dailyOpenPrice !== null ? <p> Open Price: ${dailyOpenPrice}</p> : null}
                {dailyHighPrice !== null ? <p>High Price: ${dailyHighPrice}</p> : null}
                {dailyLowPrice !== null ? <p>Low Price: ${dailyLowPrice}</p> : null}
                {dailyClosingPrice !== null ? <p>Closing Price: ${dailyClosingPrice}</p> : null}
                {symbol !== null ? <button onClick={() => addToFav(symbol)}>Add to Favorites</button> : null}
                {/* {symbol !== null ? <button onClick={(id) => deleteFavorite(id)}>Delete Favorite</button> : null} */}
            </div>
            {symbol !== null ? <Favorites favoriteStock={favoriteStock} /> : null}
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
