import React, {useEffect, useState, Fragment} from 'react';
import ReactDOM from 'react-dom'
import {token, token2} from '../API_token/config'
import fetchData from '../utils/fetchData'
import Search from './Components/Search'
import './index.css'

function App () {


function searchForSymbol (inputText) {
    const fetchUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${inputText}&apikey=${token2}`
    fetchData(fetchUrl)
     .then(res => console.log(res['Meta Data']['2. Symbol']))
}

    return (
        <Fragment>
            <Search searchForSymbol={searchForSymbol} />
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
