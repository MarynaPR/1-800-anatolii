import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

//  cart as a prop
const Cart = ({ cart, handleRemoveFromCart, handleUpdateCartQty, handleEmptyCart }) => {
    // hook
    const classes = useStyles();
    // function that is returning jsx, displayed as subcomponent
    const EmptyCart = () => (
        <Typography varient="subtitle1">You have no items in your shopping cart.
            <Link to="/" className={classes.link}>Start adding some</Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        {/* looping through each item in the cart */}
                        <CartItem item={item}
                        onUpdateCartQty={handleUpdateCartQty}
                        onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formated_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={handleEmptyCart}
                    >Empty Cart</Button>
                    <Button 
                    component={Link} to="/checkout"
                    className={classes.checkoutButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )
    if (!cart.line_items) return 'Loading...';
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {/* if statement to determine if the cart is empty */}
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
