const modalSingIn = document.getElementById('modal-sign-in')
const modalSingUp = document.getElementById('modal-sign-up')

import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Home from './components/home/Home'
import About from './components/about/About'
import Products from './components/products/Products'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import PcComponetns from './components/categries/PC/PcComponent';
import Playstation5Componetns from './components/categries/Playstation5/Playstation5';
import XboxOneComponetns from './components/categries/XboxOne/XboxOneComponents';

import ModalSignUp from './components/modalWindow/modalSignUp';
import ModalSignIn from './components/modalWindow/modalSignIn';

import UserProfile from './components/user-profile/userProfile';
import Cart from './components/cart/cart'



function App (){
  const modalUp = useSelector((state) => state.modalUp.value)
  const modalIn = useSelector((state) => state.modalIn.value)
return (
    <div>
      <div className="mainWrapper">
          <Header/>
          <Switch>
            <div className="content">
              <Redirect from='/' to='/home'/>
              <Route history={history} path='/about' component={About} />
              <Route history={history} path='/home' component={Home} />
              <Route history={history} path='/products' component={Products} />
              <Route history={history} path='/PC' component={PcComponetns} />
              <Route history={history} path='/Playstation5' component={Playstation5Componetns} />
              <Route history={history} path='/XboxOne' component={XboxOneComponetns} />
              <Route history={history} path='/profile' component={UserProfile} />
              <Route history={history} path='/cart' component={Cart} />
            </div>
          </Switch>
          <Footer />
      </div>
      <main>
        {modalIn && ReactDOM.createPortal (
          <ModalSignIn/>,
          modalSingIn
        )}
        {modalUp && ReactDOM.createPortal (
          <ModalSignUp/>,
          modalSingUp
        )}
      </main>
    </div>
  );
}

export default withRouter(App);
