import { getStoredCart } from "../utils/fakeDB";

const cartAndProductsLoader = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const initialCart = [];
  const savedCart = getStoredCart();
  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }
  return {products, initialCart};
};

export default cartAndProductsLoader;
