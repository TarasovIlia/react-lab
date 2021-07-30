import React, { Component} from 'react'
import { Link } from 'react-router-dom'


import NavigationData from '../data/navigationData'

import '../style/headerStyle.css'

const ButtonStyleActive = "2px 1px 6px 2px rgba(0, 0, 0, 0.247)"
const StyleForBtn =  { boxShadow : ButtonStyleActive } 


export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            data : NavigationData
        }
    }
render () {
    let host = window.location.pathname;
    host = host.split("/")[1]

        const navigation = this.state.data.map(data  => <Link key={data.key} to={data.href}><button style={ host === data.title ? StyleForBtn : null } className="link-btn"><p>{data.title}</p></button></Link>)
        return (
                <header className="header">
                    <h1>Games Market</h1>
                    <div className="nav_bar">
                        {navigation}
                    </div>
                </header>
        )
    }
}



