import React, { useState, useEffect } from 'react';
// commerce does all the backend
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout, Header } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

    const [pages] = useState([
        { name: "about" },
        { name: "blog" },
        { name: "contact" },
    ])
    const [currentPage, setCurrentPage] = useState(pages[0]);
    const [products, setProducts] = useState([]);
    // useState to add cart functionality
    const [cart, setCart] = useState({});
    // checkout
    const [order, setOrder] = useState({});
    //error handling 
    const [errorMessage, setErrorMessage] = useState('');

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
        const { cart } = await commerce.cart.add(productId, quantity);
        // update the cart
        setCart(cart);
    }
    // update quantity in cart
    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
    }
    // remove items from cart
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }
    //this function is called after checkout to remove items from the cart
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }
    //checkout
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    console.log(cart);

    return (
        <Router>
            <div>
                <Header>
                    <Navbar
                        // pass total number of items in the cart after they were added
                        totalItems={cart.total_items}
                        pages={pages}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </Header>
                {/* switch between showing product or cart */}
                <Switch>
                    <Route exact path="/">
                        {/* pass products as props */}
                        <Products products={products}
                            // inside the Product component to change what's in the Cart
                            onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart} />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;