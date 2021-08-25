import React from 'react'
import { useEffect, useState } from 'react';

/* eslint @typescript-eslint/no-var-requires: "off" */

export default function UserProfile() {
    const [name, setName] = useState('')
    const axios = require('axios')

    useEffect(() => {
        axios.get('http://localhost:3000/SignIn')
            .then(function(response) {
                if (response.ok) {setName(response.data[0].email)}
            })
    })
    return (
        <div>
            <h1>hello, {name}!!!</h1>
        </div>
    )
}