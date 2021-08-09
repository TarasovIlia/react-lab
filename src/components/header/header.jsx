import React, { Component} from 'react';


import NavigationData from '../data/navigationData'
import NavigationButton from '../button/navigationButton'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            data : NavigationData,
        }
    }
render () {

        const navigation = this.state.data.map(data  => <NavigationButton key={data.key} item={data.categories} data={data}/>)
        
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



