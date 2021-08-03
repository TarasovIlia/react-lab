import React from 'react';

class Search extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
                <input className='searchInput' type='text' placeholder='search..' />
        )
    }
}
export default Search; 