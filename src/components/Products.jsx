import React, { useContext } from 'react'
import Product from '../components/Product'
import AppContext from '../context/AppContex'
import '../styles/components/Products.css'
export const Products = () => {
  const {products} = useContext(AppContext)
  
  return (
    <div className="Products">
      <div className="Products-items">
        {

            products.map((product)=>{
              return (
                <Product key={product.id} product={product} />
              )
            })
          
        }
      </div>      
    </div>
  )
}
export default Products