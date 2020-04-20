import React, {useEffect, useState, Fragment} from 'react';
import ReactDOM from 'react-dom'
import {token} from '../API_token/config'
import fetchData from '../utils/fetchData'
import Search from './Components/Search'
import './index.css'

function App () {


function searchForSymbol (inputText) {
    const fetchUrl = `https://api.worldtradingdata.com/api/v1/history?api_token=${token}&symbol=${inputText}`
    fetchData(fetchUrl)
     .then(res => console.log(res))
}

    return (
        <Fragment>
            <Search searchForSymbol={searchForSymbol} />
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
