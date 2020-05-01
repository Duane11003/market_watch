import React, {Fragment} from 'react'

function Favorites({favoriteStock}) {
    return (
        <div>
             <h3>Favorites:</h3>
            <ul>
            {favoriteStock.map((item) => {
                return (
                    <Fragment>
                        <li key={item.id}>{item.text}</li>
                        <button key={item.id}>Delete</button>
                    </Fragment>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites