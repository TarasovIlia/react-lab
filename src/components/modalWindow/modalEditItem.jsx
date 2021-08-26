import React from 'react'
import GET_USER_BY_ID from '../../api/getUserById'
import { useSelector } from 'react-redux'
import EditMenu from './modalEditItemContent'

export default function ModalEditItem () {
    const id = useSelector((state) => state.id.value)
    const data = GET_USER_BY_ID(id)

    const editModal = data.map(data => <EditMenu key={data.key} data={data} />)

    return (
        <div className='wrapper-modal-window'>
            {editModal}
        </div>
    )
}