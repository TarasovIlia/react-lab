import React from 'react';

import CategoriesCards from './categoriesCards';

import CategoriesData from './data/categoriesData';

class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            datasCategories : CategoriesData
        }
    }
    
    render() {
        let categoriesList = this.state.datasCategories.map(categories => <CategoriesCards key={categories.key} name={categories.categoriesName} img={categories.imgOfCategoty}/>)
        return (
            <div className='main-wrapper-group'>
               <p>Categories</p>
               <div className='main-wrapper-group-grid-categories'>{categoriesList}</div>
            </div>
        )
    }
}
export default Categories; 