import { useSelector } from 'react-redux'
import { useState} from 'react';

/* eslint @typescript-eslint/no-var-requires: "off" */
const axios = require('axios')
    
export default function SORT_BY_PARAMS(sortParams) {
    const [data, setData] = useState([]);
    const genresFilter = useSelector((state) => state.genres.value)
    const ageFilter = useSelector((state) => state.age.value)
    const sortTypeParams = useSelector((state) => state.sortTypeParams.value)

    axios.get('http://localhost:3000/NewGameData')
        .then(function(responce) { if (responce) setData(responce.data) })

    const sortTypeOne = sortTypeParams
    const sortTypeMinusOne = -sortTypeOne

    const AgeFilter = data.filter(data => data.age >= ageFilter)
    const GenresFilter = AgeFilter.filter(data => data.genres.toLowerCase().match(genresFilter))

        if (sortParams === 'price') {
            const sortPrice = GenresFilter.sort((a,b) => {
                if ( a.priceGame > b.priceGame ) return sortTypeMinusOne
                if ( a.priceGame < b.priceGame ) return sortTypeOne
                return 0
            })
            return sortPrice
        }
        else if (sortParams === 'name'){
            const sortName = GenresFilter.sort((a,b) => {
                if ( a.gameName > b.gameName ) return sortTypeOne
                if ( a.gameName < b.gameName ) return sortTypeMinusOne
                return 0
            })
            return sortName
        }
        else if (sortParams === 'rating'){
            const sortName = GenresFilter.sort((a,b) => {
                if ( a.stars > b.stars ) return sortTypeMinusOne
                if ( a.stars < b.stars ) return sortTypeOne
                return 0
            })
            return sortName
        }
    }