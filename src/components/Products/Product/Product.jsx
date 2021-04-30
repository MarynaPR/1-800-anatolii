import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
// import classes from '*.module.css';

//layout of one specific product/ add product to cart prop, then passed on Buttonclick below
const Product = ({ product, onAddToCart }) => {

    const classes = useStyles();
    // check which properties each product has from commerce.js
    // console.log(product);
    // return <div>test</div>

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    variant="body2"
                    color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton
                    area-label="Add to Cart"
                    // items added to the cart prop with id and always 1 as quantity
                    onClick={() => onAddToCart(product.id, 1)}
                >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
