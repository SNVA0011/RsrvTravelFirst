import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const AirlineRouteRow = ({ data, title }) => {
  return (
    <div className="flg-airline-card d-flex flex-column">
      <div className="wrap-inner flex-grow-1">
        <Row className="row-1">
          <Col xs={12} className="mb-2">
            <div className="d-flex fbkconf-flg-name">
              <div>
                {" "}
                <img
                  src={`/images/airline-logo/${data.airlineurl}.png`}
                  className="rounded-lg"
                  alt="airline"
                />
              </div>
              <div className="pl flex-grow-1">
                <h6>{title}</h6>
                <p>AA - 1128</p>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="d-flex flgairline-arrw">
              <div className="arrw-sp-1 flex-grow-1">
                <Row className="fbkconf-fromto align-items-center g-3  abs-11">
                  <Col className="content">
                    <h5>{data.from.code}</h5>
                    <p className="mb-3">{data.from.name}</p>
                    <p className="time">02:00</p>
                  </Col>
                  <Col className="center flex-grow-1">
                    <div className="arrw-airline-bg custom my-1">
                      <img src="/images/planegray-airline.png" alt="airline" />
                    </div>
                    <span>{data.time}</span>
                  </Col>
                  <Col className="content right">
                    <h5>{data.to.code}</h5>
                    <p className="mb-3">{data.to.name}</p>
                    <p className="time">03:30</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <hr className="hr-airline " />

        <Row className="row-2 align-items-center txfee-1">
          <Col sm={8} className="taxfees-1">
            <div className="taxfees">
              <strong>{data.price}</strong>
              <span className="person-txp">Person (taxes & fees included)</span>
            </div>
          </Col>
          <Col xs={4} className="taxfees-2 d-none d-sm-block">
            <button className="btn btn-site ripple-wv grad" type="button">
              <span>Select</span>
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AirlineRouteRow;
