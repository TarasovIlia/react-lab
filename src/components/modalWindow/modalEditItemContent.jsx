import React from 'react'
import { activModalEdit } from '../../features/modal/modalEdit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import EDIT_GAME_CARD from '../../api/editGameCard'


export default function EditMenu(props) {
    const dispatch = useDispatch()

    const [name, setName] = useState(props.data.gameName)
    const [img, setImg] = useState(props.data.imgGame)
    const [price, setPrice] = useState(props.data.priceGame)
    const [description, setDescription] = useState(props.data.discription)
    const [category, setCategory] = useState(props.data.genres)
    const [age, setAge] = useState(props.data.age)

    const newData = []

    const addNewData = () => {
        newData.push({gameName : name}, {imgGame : img}, {priceGame : price}, {description : description}, {genres : category}, {age : age})
        EDIT_GAME_CARD(props.data.key, newData)
    }

    return (
        <div className='edit-item-modal-window'>
        <p onClick={() => dispatch(activModalEdit())} className='close-btn'>close</p>
        <div className='main-modal-conteiner'>
            <h1>Edit card</h1>
            <div className='content-modal row'>
                <section className='img-edit-card'>
                    <p>Card image</p>
                    <img src={img} alt="" />
                </section>
                <section className='info-edit-card'>
                    <p>Informayion</p>
                    <form className='input-form'>
                        <div className='row'>
                            <label htmlFor=""><p>Name</p></label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='search-input' />
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>Catergory</p></label>
                            <input onChange={(e) => setCategory(e.target.value)} value={category} type="text" className='search-input' />
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>Price</p></label>
                            <input onChange={(e) => setPrice(e.target.value)} value={price} type="text" className='search-input' />
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>Image</p></label>
                            <input onChange={(e) => setImg(e.target.value)} value={img} type="text" className='search-input' />
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>Description</p></label>
                            <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" className='search-input' />
                        </div>
                        <div className='row'>
                            <p>Age</p>
                            <div className=''><p>{age}</p></div>
                        </div>
                        <div className='row'>
                            <p>Paltform</p>
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>PC</p></label>
                            <input type="checkbox" />
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>PlayStation 5</p></label>
                            <input type="checkbox" />
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>Xbox One</p></label>
                            <input type="checkbox" />
                        </div>
                    </form> 
                </section>
            </div>
            <div className='row edit-footer'>
                <button onClick={addNewData} className='modal-button'><p>Submit</p></button>
                <button className='modal-button'><p>Delete card</p></button>
            </div>
        </div>
    </div>
    )
}

EditMenu.propTypes = {
    data: PropTypes.any,
  };