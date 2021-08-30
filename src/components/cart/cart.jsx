import React from 'react';
import { useState } from 'react';

import GET_CART_ITEM from '../../api/getCardItem'
import REMOVE_FROM_CART from '../../api/removeFromCart'

import CardItem from './cartItem';

export default function Cart () {
    const data = GET_CART_ITEM()
    const [itemID, setItemID] = useState(null)
    const getItemID = (id) => setItemID(id)

    const cardItem = data.map(data => <CardItem getItemID={getItemID} key={data.key} data={data}/> )

    const totalprice = () => {
        let total = 0
        data.forEach((data) => {
            total += +data.priceGame * data.amount
        });
        return total.toFixed(2)
    } 

    const removeFromCart = () => {
        itemID ? REMOVE_FROM_CART(itemID) : null
    }

    return (
        <div className='home-wrapper'>
            <div className='main-wrapper-group main-wrapper-underline'>
                <p>Cart page</p>
                <table className='table'>
                    <tr className='table-tr table-header'>
                        <td className='name-table'>
                            <p>Name</p>
                        </td>
                        <td className='platform-table'>
                            <p>Platform</p>
                        </td>
                        <td className='order-date-table'>
                            <p>Order date</p>
                        </td>
                        <td className='amount-table'>
                            <p>Amount</p>
                        </td>
                        <td className='price-table'>
                            <p>Price</p>
                        </td>
                        <td/>
                    </tr>
                    {cardItem}
                    <tr className='table-tr'>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td>
                            <button onClick={removeFromCart} className='modal-button button-table'><p>Remove</p></button>
                        </td>
                    </tr>
                </table>
                <div className='footer'>
                    <section>
                        <p>Total cost: {totalprice()}</p>
                    </section>
                    <section>
                        <p>Your balance: {(10 + +totalprice())}</p>
                    </section>
                    <section>
                        <button  className='modal-button button-table'><p>Bye</p></button>
                    </section>
                </div>
            </div>
        </div>
    )
}