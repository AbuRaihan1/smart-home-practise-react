import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../layout/Main'
import Product from './Product';

const Shop = () => {
  const productsData = useContext(ProductsContext);
   
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
         {
          productsData.map(product=> <Product product={product} key={product.id}></Product>)
         }
      </div>
    </div>
  )
}

export default Shop
