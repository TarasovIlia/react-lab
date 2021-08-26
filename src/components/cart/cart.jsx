import React from 'react';
import CardItem from './cartItem';
import GET_CART_ITEM from '../../api/getCardItem'
import REMOVE_FROM_CART from '../../api/removeFromCart'
import { useState } from 'react';

export default function Cart () {
    const data = GET_CART_ITEM()
    const [cost, setTotalCost] = useState(0)
    const [itemID, setItemID] = useState(null)
    const getTotalCost = (price) => setTotalCost(price)
    const getItemID = (id) => setItemID(id)

    const cardItem = data.map(data => <CardItem getItemID={getItemID}  getTotalCost={getTotalCost} key={data.key} data={data}/> )

    const totalCost = cost

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
                            <button onClick={() => itemID ? REMOVE_FROM_CART(itemID) : null} className='modal-button button-table'><p>Remove</p></button>
                        </td>
                    </tr>
                </table>
                <div className='footer'>
                    <section>
                        <p>Game cost: {totalCost}</p>
                    </section>
                    <section>
                        <p>Your balance: {10 + +totalCost}</p>
                    </section>
                    <section>
                        <button  className='modal-button button-table'><p>Bye</p></button>
                    </section>
                </div>
            </div>
        </div>
    )
}