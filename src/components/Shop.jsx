import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext, ProductsContext } from '../layout/Main';
import { addToDb } from '../utils/fakeDB';
import Product from './Product';

const Shop = () => {
  const productsData = useContext(ProductsContext);
  const [cart, setCart] =  useContext(CartContext);

  // add to cart handler 
  const handleAddToCart = (product) => {
    let newCart = [];
    const isThisItemExistInCart = cart.find(existItem => existItem.id === product.id);
    if(!isThisItemExistInCart) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(restItem => restItem.id !== product.id);
      newCart = [...rest, isThisItemExistInCart]
      product.quantity = product.quantity + 1;
    }
    setCart(newCart);
    addToDb(product.id);
    toast.success('product added', {autoClose : 500})
  }




  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
         {
          productsData.map(product=> <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
         }
      </div>
    </div>
  )
}

export default Shop
