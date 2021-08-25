import { useSelector } from 'react-redux'
import { useState} from 'react';

/* eslint @typescript-eslint/no-var-requires: "off" */
const axios = require('axios')
    
export default function SORT_BY_PARAMS(sortParams) {
    const [data, setData] = useState([]);
    const genresFilter = useSelector((state) => state.genres.value)
    const ageFilter = useSelector((state) => state.age.value)

    axios.get('http://localhost:3000/NewGameData')
        .then(function(responce) { if (responce) setData(responce.data) })

    const AgeFilter = data.filter(data => data.age >= ageFilter)
    const GenresFilter = AgeFilter.filter(data => data.genres.toLowerCase().match(genresFilter))

        if (sortParams === 'price') {
            const sortPrice = GenresFilter.sort((a,b) => {
                if ( a.priceGame > b.priceGame ) return -1
                if ( a.priceGame < b.priceGame ) return 1
                return 0
            })
            return sortPrice
        }
        else if (sortParams === 'name'){
            const sortName = GenresFilter.sort((a,b) => {
                if ( a.gameName > b.gameName ) return 1
                if ( a.gameName < b.gameName ) return -1
                return 0
            })
            return sortName
        }
        else if (sortParams === 'rating'){
            const sortName = GenresFilter.sort((a,b) => {
                if ( a.stars > b.stars ) return -1
                if ( a.stars < b.stars ) return 1
                return 0
            })
            return sortName
        }
    }