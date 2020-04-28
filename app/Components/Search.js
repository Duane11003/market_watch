import React, {useEffect, useState} from 'react'

function Search ({searchForSymbol}) {

const [input, setInput] = useState('')

function symbolCall () {
  searchForSymbol(input);
  setInput('');
}

 return (
     <div>
        <input
          type='text'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder='Search for Symbol' />
        <button onClick={() => symbolCall()}>Search</button>
     </div>
 )
}

export default Search;