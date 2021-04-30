import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';


// products created
const products = [
    { id: 1, name: 'Stands', description: 'paper stand holder', price: '$15', image: '' },
    { id: 2, name: 'Tray', description: 'wood product display tray', price: '$25', image: '' },
]

const Products = () => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            {/* keeps products from hiding under navbar */}
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;