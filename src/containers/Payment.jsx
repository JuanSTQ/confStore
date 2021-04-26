import React, { useContext } from 'react'
import "../styles/components/Payment.css"
import AppContext from '../context/AppContex'
import {PayPalButton} from 'react-paypal-button'
import {handleSumTotal} from '../utils/handleSumTotal'
const Payment = ({history}) => {

  const {state, addNewOrder} =  useContext(AppContext)
  const {cart, buyer} = state
    

  const paypalOptions = {
    clientId: 'AcjYS0kexI_DBqHVc6XzABs1DXGol1LKsvlimA_XFlO3TFRWB4l9aUcEmrYNpH_pQ4D8gHQK-xh_cG1r',
    intent:'capture',
    currency:'USD'
  }
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }
  //↓ Lo usaremos cuando el pago se haga completado para registrar esa orden
  const handlePaymentSuccess = (data)=>{
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>resumen del pedido</h3>
        {
          cart.map((item)=>{
            return (
              <div className="Payment-item" key={item.title}>
                <div className="Payment-element">
                  <h4>{item.title}</h4>
                  <span>{`$ ${item.price}`}</span>
                </div>
              </div>
            )
          })
        }
        <div className="Payment-item Payment-total">
                <div className="Payment-element">
                  <h4>Total</h4>
                  <span>{`$ ${handleSumTotal(state)}`}</span>
                </div>
         </div>
        <div className="Payment-button">
          <PayPalButton  
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(state)||0.00}
            onPaymentStart={()=>{console.log('START PAYMENT')}}
            onPaymentSuccess={ data => handlePaymentSuccess(data) }
            onPaymentError={ error=> console.log(error) }
            onPaymentCancel={ data => console.log(data) }
         />
        </div>
      </div>

    </div>
  )
}

export default Payment
