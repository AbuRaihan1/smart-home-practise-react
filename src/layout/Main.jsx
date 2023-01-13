import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
// import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);
const Main = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    return (
     <div>
        <ProductsContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
              <Header></Header>
              <Outlet></Outlet>
              <Footer></Footer>
            </CartContext.Provider>
        </ProductsContext.Provider>
    </div>
    );
};

export default Main;