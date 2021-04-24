import React, {useContext} from 'react'
import AppContext  from '../context/AppContex'
const Product = ({product}) => {
  const {addToCart} = useContext(AppContext)
  const handleClick = (product)=>{
    addToCart(product)
  }

  return (
      <div className="Products-item">
        <img src={product.image} alt={product.title}/>
        <div className="Product-item-info">
          <h2>
            {product.title}
            <span> ${product.price}</span>
          </h2>
          <p>{product.description}</p>
        </div>
        <button onClick={()=>{handleClick(product)}} type="button">Comprar</button>
      </div>
  )
}

export default Product
