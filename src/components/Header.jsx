import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Header.css'
import { StateContext } from '../context/StateContext';
export default function Header() {

    const { clickHeaderBtn } = useContext(StateContext)
    return (
        <div>
            <Container style={{ marginTop: '70px' }}>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <h1 style={{ fontFamily: 'DM Sans', textAlign: 'center' }}>Album example</h1>
                        <p style={{ fontFamily: 'DM Sans', textAlign: 'center' }}>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                        <Row>
                            <Col md={6} style={{ marginTop: 10 }}>
                                <Button className="float-none float-md-end mx-auto d-block headerBtn1">Button 1</Button>
                            </Col>
                            <Col md={6} style={{ marginTop: 10 }}>
                                <Button className="float-none float-md-start mx-auto d-block headerBtn2" onClick={() => clickHeaderBtn('Arvind')}>Button 2</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}></Col>
                </Row>

            </Container>
        </div>
    )
}
