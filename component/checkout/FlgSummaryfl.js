import React from "react";
import { Col, Row } from "react-bootstrap";

import { totalTravelTime } from "../../utils/dateCal";
import AirportData from "../../component/staticJson/AirportData.json";
import { findtravelClass } from "../../utils/static";

const FlgSummaryfl = (singleFlight) => {
  return (
    <Row className="flgak">
      {singleFlight.singleFlight.map((item) => {
        const fromDetails = AirportData.find(
          (items) => items.airportCode === item.fromAirport
        );
        const toDetails = AirportData.find(
          (items) => items.airportCode === item.toAirport
        );
        return (
          <>
            <Col xs={12} md={3} className="flgak-col mb-0">
              <div className="d-flex fbkconf-flg-name">
                <div>
                  {" "}
                  <img
                    src={`/images/airline-logo/${item.airline}.png`}
                    alt="Airline"
                    className="airline-pic"
                  />
                </div>
                <div className="pl flex-grow-1">
                  <h6>{item.airlineName}</h6>
                  <p className="eco-aa">
                    <span>
                      {item.airline} - {item.flightNo}
                    </span>
                  </p>
                  <p className="eco-aa">
                    <span>{findtravelClass(item.cabinClass)?.name}</span>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={9} className="flgak-col">
              <div className="flg-list-row ">
                <Row className="fbkconf-fromto g-3 abs-12">
                  <Col className="content">
                    <h5>
                      {item.fromAirport} -{" "}
                      {item.depDate.split("T")[1].substring(0, 5)}
                    </h5>
                    <h6>
                      {fromDetails.airportName} ({fromDetails.cityName})
                    </h6>
                    <p>
                      {new Date(item.depDate).toDateString().replace(" ", ", ")}
                    </p>
                    <span>
                      {" "}
                      {item.fromTerminal && <>Terminal - {item.fromTerminal}</>}
                    </span>
                  </Col>
                  <Col className="center">
                    <div className="arrw-airline-bg custom my-1">
                      <img src="/images/planegray-airline.png" />
                    </div>
                    <span>{totalTravelTime(item.eft)}</span>
                  </Col>
                  <Col className="content right">
                    <h5>
                      {item.toAirport} -{" "}
                      {item.reachDate.split("T")[1].substring(0, 5)}
                    </h5>
                    <h6>
                      {toDetails.airportName} ({toDetails.cityName})
                    </h6>
                    <p>
                      {new Date(item.reachDate)
                        .toDateString()
                        .replace(" ", ", ")}
                    </p>
                    <span>
                      {item.toTerminal && <>Terminal - {item.toTerminal}</>}
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
          </>
        );
      })}
    </Row>
  );
};

export default FlgSummaryfl;
