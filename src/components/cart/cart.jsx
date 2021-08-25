import React from 'react';
import CardItem from './cartItem';
import GET_CART_ITEM from '../../api/getCardItem'

export default function Cart () {
    const data = GET_CART_ITEM()
    const cardItem = data.map(data => <CardItem key={data.key} data={data}/> )

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
                            <button className='modal-button button-table'><p>Remove</p></button>
                        </td>
                    </tr>
                </table>
                <div className='footer'>
                    <section>
                        <p>Game cost:</p>
                    </section>
                    <section>
                        <p>Your balance:</p>
                    </section>
                    <section>
                        <button  className='modal-button button-table'><p>Bye</p></button>
                    </section>
                </div>
            </div>
        </div>
    )
}