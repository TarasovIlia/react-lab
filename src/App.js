const modalSingIn = document.getElementById('modal-sign-in')
const modalSingUp = document.getElementById('modal-sign-up')
const modalCahngePassword = document.getElementById('modal-change-pass')
const modalEditItem = document.getElementById('modal-edit-item')

import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Home from './components/home/Home'
const About = React.lazy (() => import ('./components/about/About'))
const Products = React.lazy (() => import ('./components/products/Products'))
const Header = React.lazy (() =>  import ('./components/header/header'))
const Footer = React.lazy (() => import ('./components/footer/Footer'))
import PcComponetns from './components/categries/PC/PcComponent';
import Playstation5Componetns from './components/categries/Playstation5/Playstation5';
import XboxOneComponetns from './components/categries/XboxOne/XboxOneComponents';
const UserProfile = React.lazy (() => import ('./components/user-profile/userProfile'));
const Cart = React.lazy (() => import ('./components/cart/cart'))

import ModalSignUp from './components/modalWindow/modalSignUp';
import ModalSignIn from './components/modalWindow/modalSignIn';
import ModalCahngePassword from './components/modalWindow/modalCahngePassword';
import ModalEditItem from './components/modalWindow/modalEditItem'

import Spinner from './fallback/spinner';
import reactDom from 'react-dom';



function App (){
  const modalUp = useSelector((state) => state.modalUp.value)
  const modalIn = useSelector((state) => state.modalIn.value)
  const ChangePassword = useSelector((state) => state.modalChangePassword.value)
  const modalEdit = useSelector((state) => state.edit.value)
  

return (
    <div>
      <div className="mainWrapper">
          <React.Suspense fallback={<Spinner />}>
            <Header/>
          </React.Suspense>
          <Switch>
            <div className="content">
              <Redirect from='/' to='/home'/>
              <React.Suspense fallback={<Spinner />}>
                <Route history={history} path='/about' component={About} />
              </React.Suspense>
              <Route history={history} path='/home' component={Home} />
              <React.Suspense fallback={<Spinner />}>
                <Route history={history} path='/products' component={Products} />
              </React.Suspense>
              <Route history={history} path='/PC' component={PcComponetns} />
              <Route history={history} path='/Playstation5' component={Playstation5Componetns} />
              <Route history={history} path='/XboxOne' component={XboxOneComponetns} />
              <React.Suspense fallback={<Spinner />}>
                <Route history={history} path='/profile' component={UserProfile} />
              </React.Suspense>
              <React.Suspense fallback={<Spinner />}>
                <Route history={history} path='/cart' component={Cart} />
              </React.Suspense>
            </div>
          </Switch>
          <React.Suspense fallback={<Spinner />}>
            <Footer />            
          </React.Suspense>
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
        {ChangePassword && ReactDOM.createPortal (
          <ModalCahngePassword/>,
          modalCahngePassword
        )}
        {modalEdit && ReactDOM.createPortal (
          <ModalEditItem/>,
          modalEditItem
        )}
      </main>
    </div>
  );
}

export default withRouter(App);
