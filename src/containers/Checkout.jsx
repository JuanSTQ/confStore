import React, { useContext } from 'react'
import AppContext from '../context/AppContex'
import "../styles/components/Checkout.css"
import {handleSumTotal} from '../utils/handleSumTotal'
import {Helmet} from 'react-helmet'

const Checkout = (props) => {
  const {state,removeFromCart} = useContext(AppContext)
  const handleRemove = (product)=>{
    removeFromCart(product)
  }
  return (
    <>
      <Helmet>
          <title>Lista de pedidos</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
            <h3>{state.cart.length> 0 ? "Lista de pedidos":"Sin pedidos"}</h3>
            {
              state.cart.map((item)=>{
                return (
                <div key={item.id} className="Checkout-item">
                  <div className="Checkout-element">
                    <h4>{item.title}</h4>
                    <span>{item.price}</span>
                  </div>
                  <button onClick={()=>{handleRemove(item)}}    type="button" ><i className="fas fa-trash-alt"></i></button>
                </div>
                )
              })
            }
            
        </div>

        <div className="Checkout-sidebar">
          <h3>Precio Total: {handleSumTotal(state)||0}</h3>
          <button onClick={()=>{props.history.push('/checkout/info')}} type="button" >Cotinuar Pedido</button>
        </div>
      </div>
    </>
  )
}

export default Checkout
