import React from "react";
import Collapse from "react-bootstrap/Collapse";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Col, Row } from "react-bootstrap";
import { findtravelClass } from "../../../utils/static";
import { totalTravelTime } from "../../../utils/dateCal";
import { Icon } from "@iconify/react";
import { useState } from "react";
import moment from "moment/moment";

const FlgLuggageInfo = ({
  collpase,
  flightDatOutBound,
  flightDatInBound,
  airline,
  airport,
  search,
}) => {
  const [valueroute, setValueRoute] = useState(0);
  const ChangeRoute = (event, newValue) => {
    setValueRoute(newValue);
  };

  return (
    <>
      <Collapse in={collpase}>
        <div className="flight-luggage-info">
          <Tabs defaultActiveKey="flginfo" className="inptab">
            <Tab
              eventKey="flginfo"
              title={
                <>
                  <img src="/images/flginf-ico-1.png" />{" "}
                  <span>
                    Flight <b>Information</b>
                  </span>
                </>
              }
            >
              <div className="tab-flginfo">
                <div
                  className={`icvfare-tab ${
                    flightDatInBound ? "inbtrue" : "inbfalse"
                  }`}
                >
                  <Tabs defaultActiveKey="departe" className="domint-tab">
                    {flightDatOutBound && (
                      <Tab
                        eventKey="departe"
                        title={
                          <>
                            <div className="icvfare-title tab-1">
                              <b className="d-block">
                                {search.originAirport}{" "}
                                <Icon icon="solar:arrow-right-broken" />{" "}
                                {search.destinationAirport}
                              </b>
                              <span>
                                {moment(search.fromDate).format("DD MMM, YYYY")}{" "}
                              </span>
                            </div>

                            <div className="icvfaresub">
                              <span>Departure</span>
                            </div>
                          </>
                        }
                      >
                        <section className="rtrip-departure">
                          {flightDatOutBound.map((item, i) => {
                            const airlineName = airline.find(
                              (items) => items.code === item.airline
                            )?.name;
                            const fromairportName = airport.find(
                              (air) => air.airportCode === item.fromAirport
                            );
                            const toairportName = airport.find(
                              (air) => air.airportCode === item.toAirport
                            );
                            const travelstart = new Date(
                              item.depDate
                            ).toDateString();
                            const travelend = new Date(
                              item.reachDate
                            ).toDateString();
                            const totalTime = totalTravelTime(item.eft);
                            const timeStart = item.depDate
                              .split("T")[1]
                              .substring(0, 5);
                            const timeEnd = item.reachDate
                              .split("T")[1]
                              .substring(0, 5);
                            return (
                              <>
                                <Row key={i}>
                                  <Col xs={12} md={3}>
                                    <div className="d-flex fbkconf-flg-name mb-0">
                                      <div>
                                        {" "}
                                        <img
                                          src={`/images/airline-logo/${item.airline}.png`}
                                          alt="Airline"
                                        />
                                      </div>
                                      <div className="pl">
                                        <h6>{airlineName}</h6>
                                        <p>
                                          <span>
                                            {item.airline} - {item.flightNo}
                                          </span>
                                        </p>
                                        <p>
                                          <span>
                                            {" "}
                                            {
                                              findtravelClass(item.cabinClass)
                                                ?.name
                                            }
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col
                                    xs={12}
                                    md={9}
                                    className="zzss mt-3 mt-md-0"
                                  >
                                    <Row className="fbkconf-fromto align-items-center g-3  abs-12">
                                      <Col className="content">
                                        <h5>
                                          {item.fromAirport} - {timeStart}
                                        </h5>
                                        <h6>
                                          {fromairportName?.airportName} (
                                          {fromairportName?.cityName})
                                        </h6>
                                        <p>{travelstart.replace(" ", ", ")}</p>
                                        {item.fromTerminal && (
                                          <span>
                                            Terminal -{item.fromTerminal}
                                          </span>
                                        )}
                                      </Col>
                                      <Col className="center">
                                        <div className="arrw-airline-bg custom my-1">
                                          <img src="/images/planegray-airline.png" />
                                        </div>
                                        <span>{totalTime}</span>
                                      </Col>
                                      <Col className="content right">
                                        <h5>
                                          {item.toAirport} - {timeEnd}
                                        </h5>
                                        <h6>
                                          {toairportName?.airportName} (
                                          {toairportName?.cityName})
                                        </h6>
                                        <p>{travelend.replace(" ", ", ")}</p>
                                        {item.toTerminal && (
                                          <span>
                                            Terminal -{item.toTerminal}
                                          </span>
                                        )}
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>

                                {item.layOverTime !== 0 && (
                                  <>
                                    <div className="layovertime-between">
                                      <span className="badge-gray">
                                        Layover :{" "}
                                        <b>
                                          {totalTravelTime(item.layOverTime)}
                                        </b>{" "}
                                      </span>
                                    </div>
                                  </>
                                )}
                              </>
                            );
                          })}
                        </section>
                      </Tab>
                    )}

                    {flightDatInBound?.length > 0 && (
                      <Tab
                        eventKey="return"
                        title={
                          <>
                            <div className="icvfare-title tab-2">
                              <b className="d-block">
                                {" "}
                                {search.destinationAirport}{" "}
                                <Icon icon="solar:arrow-right-broken" />{" "}
                                {search.originAirport}
                              </b>
                              <span>
                                {moment(search.toDate).format("DD MMM, YYYY")}{" "}
                              </span>
                            </div>
                            <div className="icvfaresub">
                              <span>Return</span>
                            </div>
                          </>
                        }
                      >
                        <section className="rtrip-departure rtrip-return">
                          {flightDatInBound.map((items, ind) => {
                            const airlineName = airline.find(
                              (item) => item.code === items.airline
                            )?.name;
                            const fromairportName = airport.find(
                              (air) => air.airportCode === items.fromAirport
                            );
                            const toairportName = airport.find(
                              (air) => air.airportCode === items.toAirport
                            );
                            const travelstart = new Date(
                              items.depDate
                            ).toDateString();
                            const travelend = new Date(
                              items.reachDate
                            ).toDateString();
                            const totalTime = totalTravelTime(items.eft);
                            const timeStart = items.depDate
                              .split("T")[1]
                              .substring(0, 5);
                            const timeEnd = items.reachDate
                              .split("T")[1]
                              .substring(0, 5);
                            return (
                              <>
                                <Row key={ind}>
                                  <Col xs={12} md={3}>
                                    <div className="d-flex fbkconf-flg-name">
                                      <div>
                                        {" "}
                                        <img
                                          src={`/images/airline-logo/${items.airline}.png`}
                                          alt="Airline"
                                        />
                                      </div>
                                      <div className="pl">
                                        <h6>{airlineName}</h6>
                                        <p>
                                          <span>
                                            {items.airline} - {items.flightNo}
                                          </span>
                                        </p>
                                        <p>
                                          <span>
                                            {" "}
                                            {
                                              findtravelClass(items.cabinClass)
                                                ?.name
                                            }
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col xs={12} md={9}>
                                    <Row className="fbkconf-fromto abs-10">
                                      <Col className="content">
                                        <h5>
                                          {items.fromAirport} - {timeStart}
                                        </h5>
                                        <h6>
                                          {fromairportName?.airportName} (
                                          {fromairportName?.cityName})
                                        </h6>
                                        <p>{travelstart.replace(" ", ", ")}</p>
                                        {items.fromTerminal && (
                                          <span>
                                            Terminal -{items.fromTerminal}
                                          </span>
                                        )}
                                      </Col>
                                      <Col className="center">
                                        <div className="arrw-airline-bg custom my-1">
                                          <img src="/images/planegray-airline.png" />
                                        </div>
                                        <span>{totalTime}</span>
                                      </Col>
                                      <Col className="content right">
                                        <h5>
                                          {items.toAirport} - {timeEnd}
                                        </h5>
                                        <h6>
                                          {toairportName?.airportName} (
                                          {toairportName?.cityName})
                                        </h6>
                                        <p>{travelend.replace(" ", ", ")}</p>
                                        {items.toTerminal && (
                                          <span>
                                            Terminal -{items.toTerminal}
                                          </span>
                                        )}
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>

                                {items.layOverTime !== 0 && (
                                  <>
                                    <div className="layovertime-between">
                                      <span className="badge-gray">
                                        Layover :{" "}
                                        <b>
                                          {totalTravelTime(items.layOverTime)}
                                        </b>{" "}
                                      </span>
                                    </div>
                                  </>
                                )}
                              </>
                            );
                          })}
                        </section>
                      </Tab>
                    )}
                  </Tabs>
                </div>
              </div>
            </Tab>

            <Tab
              eventKey="farerule"
              title={
                <>
                  <img src="/images/flginf-ico-2.png" />{" "}
                  <span>
                    Fare <b>Rule</b>
                  </span>
                </>
              }
              className="content"
            >
              <div className="tab-farerule">
                <Row>
                  <Col xs={4} sm={2}>
                    <h6>Airline</h6>
                    <p>{flightDatOutBound[0].airline}</p>
                  </Col>
                  <Col xs={8} sm={4}>
                    <h6>Time from the date of Departure</h6>
                    <p>0 hours ~ 365 Days</p>
                  </Col>
                  <Col xs={12} sm={6} className="mt-3 mt-sm-0">
                    <h6>Cancellation fee (Airline Fee + HEG Fee)</h6>
                    <p>Non-Refundable</p>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col xs={4} sm={2}>
                    <h6>Airline</h6>
                    <p>{flightDatOutBound[0].airline}</p>
                  </Col>
                  <Col xs={8} sm={4}>
                    <h6>Time from the date of Departure</h6>
                    <p>0 hours ~ 365 Days</p>
                  </Col>
                  <Col xs={12} sm={6} className="mt-3 mt-sm-0">
                    <h6>Date change Fee (Airline Fee + HEG Fee + Fare)</h6>
                    <p>Non-Refundable</p>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab
              eventKey="importantinfo"
              title={
                <>
                  <img src="/images/flginf-ico-3.png" />{" "}
                  <span>
                    Important <b>Info</b>
                  </span>
                </>
              }
              className="content"
            >
              <div className="tab-importantinfo">
                <h6>Important Information</h6>
                <ul>
                  <li>Convenience Fee is non-refundable.</li>
                  <li>
                    Normal Cancellation : Airline cancellation penalty +
                    Reservationsdeal service fee and Balance amount will be
                    refunded to the same bank account.
                  </li>
                  <li>
                    Flight Cancellation from Airlines end : Full Refund in the
                    same bank account after charging the applicable
                    Reservationsdeal service Fee + payment gateway charges .
                  </li>
                  <li>
                    ConPlease Note: Cancellation terms and conditions are
                    subject to change without any notice.
                  </li>
                  <li>
                    Travel related advisory is subject to change without notice,
                    for the latest update please check state government websites
                    only.
                  </li>
                </ul>
                <p>
                  The airline fee is indicative. Reservationsdeal does not
                  guarantee the accuracy of this information. All fees mentioned
                  are per passenger. Date change charges are applicable only on
                  selecting the same airline on a new date. The difference in
                  fares between the old and the new booking will also be payable
                  by the user.
                </p>
              </div>
            </Tab>

            <Tab
              eventKey="luggageinfo"
              title={
                <>
                  <img src="/images/flginf-ico-4.png" />{" "}
                  <span>
                    Luggage <b>Info</b>
                  </span>
                </>
              }
              className="content"
            >
              <div className="tab-luggageinfo">
                <Row>
                  <Col xs={12} md={4}>
                    <div className="d-flex fbkconf-flg-name">
                      <div>
                        {" "}
                        <img
                          src={`/images/airline-logo/${flightDatOutBound[0].airline}.png`}
                          alt="Airline"
                        />
                      </div>
                      <div className="pl">
                        <h6>{flightDatOutBound[0].airlineName}</h6>
                        <p>
                          <span>
                            {flightDatOutBound[0].airline} -{" "}
                            {flightDatOutBound[0].flightNo}
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* <p className="operated">
                      Operated by KLM Royal Dutch Airlines
                    </p> */}
                  </Col>
                  <Col xs={12} md={4} className="dutch-kl">
                    <div className="luggageinfo-card">
                      <img src="/images/solar-bag.png" />
                      <p>Cabin-Baggage</p>
                      <p>7 Kg / person</p>
                    </div>
                  </Col>
                  <Col xs={12} md={4} className="dutch-kl">
                    <div className="luggageinfo-card">
                      <img src="/images/flginf-ico-4.png" />
                      <p>Check-In-Baggage</p>
                      <p>15 Kg / person</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Collapse>
    </>
  );
};

export default FlgLuggageInfo;
