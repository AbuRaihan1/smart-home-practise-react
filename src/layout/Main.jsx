import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const ProductsContext = createContext([]);

const Main = () => {
    const productsData = useLoaderData();
    return (
     <div>
        <ProductsContext.Provider value={productsData}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </ProductsContext.Provider>
    </div>
    );
};

export default Main;