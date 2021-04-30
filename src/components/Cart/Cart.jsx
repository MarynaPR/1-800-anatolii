import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
// import classes from '*.module.css';
//  cart as a prop
const Cart = ({ cart }) => {
    // hook
    const classes = useStyles();
    // function that is returning jsx, displayed as subcomponent
    const EmptyCart = () => (
        <Typography varient="subtitle1">You have no items in your shopping cart. Keep shopping!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
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
                        color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton}
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
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            {/* if statement to determine if the cart is empty */}
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
