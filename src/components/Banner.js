import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import headerImg from '../assets/img/ig-logo.png';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Innovation Garage", "Centre for Innovation and Incubation", "Party Club"]; 
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 300;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      },delta)

      return () => { clearInterval(ticker); }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText == '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }

    }

    const handleOnClick = () => {
        window.scrollTo({ top: 900, behavior: 'smooth' });
    }

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    {/* <span className="tagline">Welcome to our Website</span> */}
                    <h2>{`Welcome to `}<h1><span className="wrap">{text}|</span></h1></h2>
                    <button onClick={handleOnClick}>Explore <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner;