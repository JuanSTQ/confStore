import React, { useContext } from 'react'
import Map from '../components/Map';
import AppContext from '../context/AppContex'
import "../styles/components/Success.css"
import useGoogleAddress from '../hooks/useGoogleAddress'
const Success = () => {
  const {state} = useContext(AppContext); 
  const {buyer} = state;
  const [location] = useGoogleAddress(buyer[buyer.length-1].address)
  
  return (

    <div className="Success">
      <div className="Success-content">
        <h2>{`Gracias por tu compra `}  {buyer.length>0 && buyer[buyer.length-1].name}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  )
}

export default Success
