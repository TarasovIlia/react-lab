import React, { useState, useEffect} from 'react';

import CategoriesCards from './categoriesCards';

/* eslint @typescript-eslint/no-var-requires: "off" */

export default function Categories ()  {
    const [data, setItems] = useState([]);
    const axios = require('axios')
    useEffect(() => {
      axios.get('http://localhost:3000/CategoriesData')
          .then(request => setItems(request.data) )
      })
    const categoriesList = data.map(categories => <CategoriesCards key={categories.key} link={categories.link} name={categories.categoriesName} img={categories.imgOfCategoty}/>)
    return (
        <div className='main-wrapper-group main-wrapper-underline'>
           <p>Categories</p>
           <div className='main-wrapper-group-grid-categories'>{categoriesList}</div>
        </div>
    )
}