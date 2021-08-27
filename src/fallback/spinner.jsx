import React from 'react'
import SpinnerImg from '../icon/icons8-spinner-96.png' 

export default function Spinner() {
    return (
        <div className='spinner-container'>
            <img className='spinner' src={SpinnerImg} alt="" />
        </div>
    )
}