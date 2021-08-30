import React from 'react'
import PropTypes from 'prop-types'
import { useState, useMemo } from 'react'
import INCREMENT_AMOUNT from '../../api/incrementAmount'

export default function CardItem(props) {
    const [amount, setAmount] =useState(props.data.amount)
    const ID = props.data.id
    const [checked, setChecked] = useState(false)
    const setID = () => {
        setChecked(!checked)
        !checked ? props.getItemID(props.data.id) : props.getItemID(null)
    }
    const price = (props.data.priceGame * amount).toFixed(2)

    const increment = () => {
        setAmount(amount +1)
    }

    const decrement = () => {
        if (amount >= 2) 
        setAmount(amount -1)
    }

    INCREMENT_AMOUNT(ID, amount)

    return (
        <tr className='table-tr item-cart'>
            <td className='name-table'>
                <p>{props.data.gameName}</p>
            </td>
            <td className='platform-table'>
                <p>{props.data.platform.PC ? "PC" : null}</p>
                <p>{props.data.platform.XboxOne ? "Xbox One" : null}</p>
                <p>{props.data.platform.Playstation5 ? "Playstation 5" : null}</p>
            </td>
            <td className='order-date-table'>
                <p>Order date</p>
            </td>
            <td className='amount-table'>
                <button className='close-btn card-btn'><h1 onClick={decrement}>-</h1></button>
                <p>{amount}</p>
                <button className='close-btn card-btn'><h1 onClick={increment}>+</h1></button>
            </td>
            <td className='price-table'>
                <p>{price}</p>
            </td>
            <td className='remove-table'>
                <input checked={checked} onChange={setID} type="checkbox" />
            </td>
        </tr>
    )
}
CardItem.propTypes = {
    data: PropTypes.any,
    getTotalCost: PropTypes.number,
    getItemID: PropTypes.number,
    gameName: PropTypes.string,
    amount: PropTypes.number
  };