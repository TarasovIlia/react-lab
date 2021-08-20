import React from 'react'
import { useEffect, useState } from 'react';

/* eslint @typescript-eslint/no-var-requires: "off" */

export default function UserProfile() {
    const axios = require('axios')
    const userName = localStorage.getItem("email")

    return (
        <div>
            <h1>hello, {userName}!!!</h1>
        </div>
    )
}