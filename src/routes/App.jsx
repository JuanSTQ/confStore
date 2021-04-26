import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Success from '../containers/Success'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout';
import "../styles/components/App.css"
import AppContext from '../context/AppContex'
import useInitialState from '../hooks/useInitialState'


const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.products).length;

  return (
    <>
        {isEmpty>0 ?  
          <AppContext.Provider value={initialState} >
            <BrowserRouter>
              <Layout>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/checkout" component={Checkout} /> 
                    <Route exact path="/checkout/info"  component={Information} />
                    <Route exact path="/checkout/payment" component={Payment} />
                    <Route exact path="/checkout/success"  component={Success} />
                    <Route component={NotFound} />
                  </Switch>
              </Layout>
            </BrowserRouter>  
          </AppContext.Provider>
        : <h1>LOADING....</h1> 
       }
    </>
  )
}

export default App
