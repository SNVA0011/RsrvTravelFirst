import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AnimatebyNumber from "./AnimatebyNumber";

const AboutStats = ({ content }) => {
  return (
    <section className="our-achievements">
      <Container className="text-center spcmy-60">
        <Row>
          {content.map((item, index) => {
            return (
              <Col xs={6} md={3} key={index}>
                <p>
                  <span className="d-inline-block">
                    <AnimatebyNumber
                      number={item.number}
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                      ]}
                    />
                  </span>
                </p>
                <h3>{item.title}</h3>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default AboutStats;
