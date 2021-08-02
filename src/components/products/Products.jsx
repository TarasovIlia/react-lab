import React from 'react';
import '../style/productStyle.css'

function Products () {

    let errorTrigger = 1
    if (errorTrigger) {
        throw new Error('I crashed!');
      }
    // симуляция ошибки
    return (
        <div className="ProductWrapper">
            <h1>Product</h1>
        </div>
    )
}

export default Products