import React, { useState, useEffect } from 'react';
// commerce does all the backend
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        // response=data
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(products);

    return (
        <div>
            <Navbar />
            {/* pass products as props */}
            <Products products={products} />
        </div>
    )
}

export default App;

