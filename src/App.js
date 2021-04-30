import React, { useState, useEffect } from 'react';
// commerce does all the backend
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Router>
            <div>
                <Navbar
                    // pass total number of items in the cart after they were added
                    totalItems={cart.total_items}
                />
                {/* switch between showing product or cart */}
                <Switch>
                    <Route exact path="/">
                        {/* pass products as props */}
                        <Products products={products}
                            // inside the Product component to change what's in the Cart
                            onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;

