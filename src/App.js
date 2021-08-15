import React, { Component } from 'react';

import { Route, Redirect, withRouter, Switch } from "react-router-dom";

import Home from './components/home/Home'
import About from './components/about/About'
import Products from './components/products/Products'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import PcComponetns from './components/categries/PC/PcComponent';
import Playstation5Componetns from './components/categries/Playstation5/Playstation5';
import XboxOneComponetns from './components/categries/XboxOne/XboxOneComponents';



class App extends Component  {
  constructor(props) {
    super(props)
    this.state = { error : null }
  }

  componentDidCatch(error) {
    this.setState({
      error: error,
    })
  }
  

  render() {
    const history  = this.props

    if (this.state.error) {
      console.error()
      // window.location.pathname = "http://localhost/home"
      return (
        <h1>что то пошло не так</h1>
      );
    }

    return (
      <div className="mainWrapper">
          <Header />
          <Switch>
            <div className="content">
              <Redirect from='/' to='/home'/>
              <Route history={history} path='/about' component={About} />
              <Route history={history} path='/home' component={Home} />
              <Route history={history} path='/products' component={Products} />
              <Route history={history} path='/PC' component={PcComponetns} />
              <Route history={history} path='/Playstation5' component={Playstation5Componetns} />
              <Route history={history} path='/XboxOne' component={XboxOneComponetns} />
            </div>
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default withRouter(App);
