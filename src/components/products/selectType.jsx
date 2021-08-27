import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSortType } from '../../features/filter/sort/sortTypeSlice'
import PropTypes  from 'prop-types'

export default function SelectType(props) {
    const [openSelectList, setOpenSelectList] = useState(true)
    const [selected, setSelected] = useState(props.option1)
    const dispatch = useDispatch()
    dispatch(setSortType(selected))
    
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
        <div className='select-option'>
            <div className='select-content'>
                <p>{selected}</p>
                <input className='checbox' type="checkbox" id='list-button' />
                <label onClick={() => setOpenSelectList(!openSelectList)} className='fake-label' htmlFor="list-button">
                    <figure style={ !openSelectList ? OpenArrowState : CloseArrowState }  className='arrow' htmlFor="list-button"></figure>
                </label>
            </div>
            <div style={openSelectList ? OpenSelectList : CloseSelectList} className='option'>
                <p onClick={changeValue}>{props.option2}</p>
            </div>
        </div>
    )
}

SelectType.propTypes = {
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.string,
  };
