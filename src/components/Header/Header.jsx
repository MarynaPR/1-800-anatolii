
// import { Col, Row } from 'react-bootstrap';
import React from 'react';
// import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
// import { ShoppingCart } from '@material-ui/icons';
// import logo from '../../assets/green-logo.png';
// import useStyles from './styles';
// import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            {/* <Row className="h2-header"> */}
            {/* <Col xs={8} md={3}> */}
            {/* </Col> */}
            <h2>thanks for visiting</h2>
            {/* </Row> */}
            {props.children}
        </header>
    )
}

export default Header;