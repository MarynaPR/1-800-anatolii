import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Cart from '../Cart/Cart';

function Main({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case 'about':
                return <About />;
            case 'blog':
                return < Blog />;
            case 'contact':
                return <Contact />;
            default:
                return <Cart />;
        }
    };

    return (
        <section>
            <h2>{(currentPage.name)}</h2>
            <div>{renderPage(currentPage)} </div>
        </section>
    );
}
export default Main;