import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";

const FlglistTime = ({ title, data, handleChange, value }) => {
  return (
    <div className="ptmy-20">
      <Row className="align-items-center heading-row">
        <Col xs={12}>
          <h4>{title}</h4>

          {data.length > 0 && (
            <Row className="flgmodf-time">
              {data.map((item, index) => {
                return (
                  <Col key={index} xs={6}>
                    <div
                      className={`flgmodftime-btn ${
                        value.includes(item.value) ? "active" : null
                      }`}
                      onClick={() => {
                        handleChange(item.value);
                      }}
                    >
                      <div className="icon d-flex">
                        <div className="m-auto">
                          {" "}
                          <Image
                            src={`/images/${item.icon}.png`}
                            width={30}
                            height={30}
                            alt="time"
                          />
                        </div>
                      </div>
                      <label className="title">{item.title}</label>
                    </div>
                  </Col>
                );
              })}
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default FlglistTime;
