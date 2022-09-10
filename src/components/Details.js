import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Details = ({ title, description, imgUrl }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <section className="banner">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7} className="skill-bx">
                        <h2>{title}</h2>
                        <p>{description}</p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={imgUrl} alt=""/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Details