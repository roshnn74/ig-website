import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import MemberCard from "./MemberCard";
import Img1 from "../assets/img/lead.png";
import Img2 from "../assets/img/tech.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

const Teams = () => {

  const teamMembers = [
    {
      title: "Ishita Gupta",
      description: "Team Lead",
      imgUrl: Img1,
    },
    {
      title: "Roshan Kuriakose",
      description: "Upcoming Team Lead",
      imgUrl: Img2,
    },
    {
      title: "Rithik Marudappa",
      description: "Backend takes real skill bro",
      imgUrl: Img2,
    },
    {
      title: "Manav Bhadoria",
      description: "Fork the github repo",
      imgUrl: Img2,
    },
    {
      title: "Sahana Murali",
      description: "Web Development",
      imgUrl: Img2,
    },
    {
      title: "Adrao",
      description: "App Development",
      imgUrl: Img2,
    },
  ];

  return (
    <section className="project" id="teams">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Teams</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tech Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Design Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">PR Team</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          teamMembers.map((members, index) => {
                            return (
                              <MemberCard
                                key={index}
                                {...members}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Connect Backend to fill other teams</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Connect Backend to fill other teams</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}

export default Teams;