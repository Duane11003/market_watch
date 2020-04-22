import React, {Fragment, useEffect, useState} from 'react'
import fetchData from '../utils/fetchData'
import {token2} from '../../API_token/config'

function StockInfo () {

 const [tradingVolume, setTradingVolume] = useState(null)

    useEffect(() => {
      
    }, [])

 return (
    <Fragment>
        <p>stock info component</p>
    </Fragment>
 )
}

export default StockInfo;