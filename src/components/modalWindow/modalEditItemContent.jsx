import React from 'react'
import { activModalEdit } from '../../features/modal/modalEdit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import EDIT_GAME_CARD from '../../api/editGameCard'
import DELETE_GAME_CARD from '../../api/deleteGame'


export default function EditMenu(props) {
    const dispatch = useDispatch()

    const [name, setName] = useState(props.data.gameName)
    const [img, setImg] = useState(props.data.imgGame)
    const [price, setPrice] = useState(props.data.priceGame)
    const [description, setDescription] = useState(props.data.discription)
    const [category, setCategory] = useState(props.data.genres)
    const [age, setAge] = useState(props.data.age)
    const [PC, setPC] = useState(props.data.platform.PC)
    const [XboxOne, setXboxOne] = useState(props.data.platform.XboxOne)
    const [Playstation5, setPlaystation5] = useState(props.data.platform.Playstation5)

    const [confirmPanel, setConfirmPanel] = useState(false)

    const newData = []

    const addNewData = () => {
        newData.push({gameName : name},
            {imgGame : img},
            {priceGame : price},
            {description : description},
            {genres : category},
            {age : age},
            {platform : {
                PC : PC,
                XboxOne : XboxOne,
                Playstation5 : Playstation5
            }})
        EDIT_GAME_CARD(props.data.key, newData)
    }
    const confirmDelete = () => {
        DELETE_GAME_CARD(props.data.key)
        dispatch(activModalEdit())
    }
    const deleteGame = () => {
        setConfirmPanel(!confirmPanel)
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
                            <input onChange={(e) => setAge(e.target.value)} value={age} type="number" className='search-input age-input' />
                        </div>
                        <div className='row'>
                            <p>Paltform</p>
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>PC</p></label>
                            <input onChange={() => setPC(!PC)} checked={PC} type="checkbox" />
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>PlayStation 5</p></label>
                            <input onChange={() => setXboxOne(!XboxOne)} checked={XboxOne} type="checkbox" />
                        </div>
                        <div className='row'>
                            <label htmlFor=""><p>Xbox One</p></label>
                            <input onChange={() => setPlaystation5(!Playstation5)} checked={Playstation5} type="checkbox" />
                        </div>
                    </form> 
                </section>
            </div>
            <div  className={ confirmPanel ? 'row edit-footer disactive' : 'row edit-footer active'}>
                <button onClick={addNewData} className='modal-button'><p>Submit</p></button>
                <button onClick={deleteGame} className='modal-button'><p>Delete card</p></button>
            </div>
            <div className={ confirmPanel ? 'footer-confirm active' : 'footer-confirm disactive'}>
                <p>Delete {name}?</p>
                <div className='row edit-footer'>
                    <button onClick={confirmDelete} className='modal-button'><p>Yes</p></button>
                    <button onClick={deleteGame} className='modal-button'><p>No</p></button>
                </div>
            </div>
        </div>
    </div>
    )
}

EditMenu.propTypes = {
    data: PropTypes.any,
  };