import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../../assets/1.png'
import second from '../../../../assets/2.png'
import third from '../../../../assets/3.png'
import { FaCalendar } from 'react-icons/fa';

const BellowPart = () => {
    return (

        <div>
            <Row xs={1} md={1} lg={1} className="g-4">
                <Col className='mt-5'>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                <div className='d-flex justify-content-between mt-3'>
                                    <h6>Sports</h6>
                                    <p><small><FaCalendar></FaCalendar> Jan 4, 2022</small> </p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                <div className='d-flex justify-content-between mt-3'>
                                    <h6>Sports</h6>
                                    <p><small><FaCalendar></FaCalendar> Jan 4, 2022</small> </p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                <div className='d-flex justify-content-between mt-3'>
                                    <h6>Sports</h6>
                                    <p><small><FaCalendar></FaCalendar> Jan 4, 2022</small> </p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>


    );
};

export default BellowPart;