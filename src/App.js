import React, { Component } from 'react';

import { Route, Redirect, withRouter, Switch } from "react-router-dom";

import './App.css';
import './components/btn-style/link-Btn-Style.css';

import Home from './components/home/Home'
import About from './components/about/About'
import Products from './components/products/Products'
import Header from './components/header/header'
import Footer from './components/footer/Footer'



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
      window.location.pathname = "http://localhost:3000/home"
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
            </div>
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default withRouter(App);
