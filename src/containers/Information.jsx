import React, { useContext, useRef} from 'react'
import AppContext from '../context/AppContex'
import {Link, useHistory} from 'react-router-dom'
import "../styles/components/Information.css"
const Information = (props) => {
  const {state:{cart}, addToBuyer} = useContext(AppContext);
  const form = useRef(null);

  const history = useHistory();
  
  const handleSubmit = ()=>{
    console.log(form.current.focus())
    const formData = new FormData(form.current);
    console.log(formData)
    const buyer = {
      'name': formData.get('name'),
      'email':formData.get('email'),
      'address':formData.get('address'),
      'apto':formData.get('apto'),
      'city':formData.get('city'),
      'country':formData.get('country'),
      'state':formData.get('state'),
      'cp':formData.get('cp'),
      'phone':formData.get('phone'),
    }
    addToBuyer(buyer)
    history.push('/checkout/payment')
  }
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de Contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form} action="">
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              <button>
                Regresar
              </button>
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos: </h3>
        {
          cart.map(({title, price,id})=>{
            return (
              <div key={title} className="Information-item">
                <div className="Information-element">
                  <h4>{title}</h4>
                  <span>{`price: $ ${price}`}</span>
                </div>
              </div>
            )
          })   
        }

      </div>
    </div>
  )
}

export default Information
