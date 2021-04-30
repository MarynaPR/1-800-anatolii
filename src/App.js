import React, { useState, useEffect } from 'react';
// commerce does all the backend
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    // useState to add cart functionality
    const [cart, setCart] = useState({});
    const fetchProducts = async () => {
        // response=data
        const { data } = await commerce.products.list();
        setProducts(data);
    }
    // cart
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }
    //items in the cart with 2 parameters
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        // update the cart
        setCart(item.cart);
    }
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    console.log(cart);

    return (
        <div>
            <Navbar />
            {/* pass products as props */}
            <Products
                products={products}
                // inside the Product component to change what's in the Cart
                onAddToCart={handleAddToCart}
            />
        </div>
    )
}

export default App;

