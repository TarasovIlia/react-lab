import React, { useState } from 'react';


export default function Search (){
    const [value, setValue] = useState('')

    function handlChange(e) {
        setValue(e.target.value)
    }
        return (
            <div>
                <input onChange={handlChange} className='searchInput' type='text' placeholder='search..' />
                <p>{value}</p>
            </div>
        )
}
