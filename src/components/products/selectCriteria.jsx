import React from 'react'
import { useState } from 'react'

export default function SelectCriteria() {
    const [openSelectList, setOpenSelectList] = useState(true)
    const [selected, setSelected] = useState('Name')
    
    const OpenSelectList =  {transform: "translateY(-100%)", opacity: '0'}
    const CloseSelectList =  {transform: "translateY(0%)", opacity: '1'}

    const OpenArrowState =  {transform: "rotate(-225deg)", borderBottom: "3px solid blueviolet", borderLeft: "3px solid blueviolet"}
    const CloseArrowState =  {transform: "rotate(-45deg)", borderBottom: "3px solid #fff", borderLeft: "3px solid #fff"}

    const changeValue = (e) => {
        setSelected(e.target.innerHTML)
        e.target.innerHTML = selected
        setOpenSelectList(!openSelectList)
    }

    return (
        <div style={{zIndex : '2'}} className='select-option'>
            <div className='select-content'>
                <p>{selected}</p>
                <input className='checbox' type="checkbox" id='list-button' />
                <label onClick={() => setOpenSelectList(!openSelectList)} className='fake-label' htmlFor="list-button">
                    <figure style={ !openSelectList ? OpenArrowState : CloseArrowState }  className='arrow' htmlFor="list-button"></figure>
                </label>
            </div>
            <div style={openSelectList ? OpenSelectList : CloseSelectList} className='option'>
                <p onClick={changeValue}>Price</p>
                <p onClick={changeValue}>Rating</p>
            </div>
        </div>
    )
}