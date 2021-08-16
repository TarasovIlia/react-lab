import React from 'react'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function UserProfile() {
    const [name, setName] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/User/1')
          .then(res => res.json())
          .then(
            (result) => {
                setName(result.email);
            }
          )
    })
    return (
        <div>
            <h1>hello, {name}!!!</h1>
        </div>
    )
}