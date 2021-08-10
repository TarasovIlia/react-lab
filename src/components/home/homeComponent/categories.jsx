import React, { useState, useEffect} from 'react';

import CategoriesCards from './categoriesCards';

import CategoriesData from './data/categoriesData';

export default function Categories ()  {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/cat')
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
              setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
              }
          )
      }, [])
    
    console.log(items)
        
    const categoriesList = CategoriesData.map(categories => <CategoriesCards key={categories.key} link={categories.link} name={categories.categoriesName} img={categories.imgOfCategoty}/>)
    return (
        <div className='main-wrapper-group'>
           <p>Categories</p>
           <div className='main-wrapper-group-grid-categories'>{categoriesList}</div>
        </div>
    )
}