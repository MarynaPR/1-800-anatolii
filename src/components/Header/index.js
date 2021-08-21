import React from 'react'
import { Col, Row } from 'react-bootstrap';


function Header(props) {
    return (
        <header className="header">
            <Row className="h2-header">
                <Col xs={8} md={3}>
                </Col>
                <h2>thanks for visiting</h2>
            </Row>
            {props.children}
        </header>
    )
}

export default Header