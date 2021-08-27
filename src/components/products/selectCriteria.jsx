import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSortParams } from '../../features/filter/sort/sortSlice'
import PropTypes  from 'prop-types'

export default function SelectCriteria(props) {
    const [openSelectList, setOpenSelectList] = useState(true)
    const [selected, setSelected] = useState(props.option1)
    const dispatch = useDispatch()
    dispatch(setSortParams(selected))
    
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
                <p onClick={changeValue}>{props.option2}</p>
                <p onClick={changeValue}>{props.option3}</p>
            </div>
        </div>
    )
}

SelectCriteria.propTypes = {
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.string,
  };