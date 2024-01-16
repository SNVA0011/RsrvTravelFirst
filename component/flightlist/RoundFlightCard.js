import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { stop } from "../../utils/static";
import { totalTravelTime } from "../../utils/dateCal";
import FlgLuggageInfo from "./filter/FlgLuggageInfo";
import { mostused } from "../../utils/staticCurrency";
import useWindowSize from "../../hooks/useWindowSize";
import { Icon } from "@iconify/react";
import Modal from "react-bootstrap/Modal";
import { SelectFlight } from "../../utils/flightCheckoutUtils";
import { useRouter } from "next/router";
import Image from "next/image";

const RoundFlightCard = ({ flightData, airline, airport, search }) => {
  const router = useRouter();
  const [collpase, setCollpase] = useState(false);
  const airlineCode = flightData.outBound[0].airline;
  const inBoundairlineCode = flightData.inBound[0].airline;
  const inBoundflightCode = flightData.inBound[0].flightNo;
  const airlineName = airline.find((item) => item.code === airlineCode)?.name;
  const inBoundairlineName = airline.find(
    (item) => item.code === inBoundairlineCode
  )?.name;
  const inBoundlength = flightData.inBound.length;
  const outBoundlength = flightData.outBound.length;
  const depAiportcodefrom = flightData.outBound[0].fromAirport;
  const depAiportcodeto = flightData.outBound[outBoundlength - 1].toAirport;
  const retAiportcodefrom = flightData.inBound[0].fromAirport;
  const retAiportcodeto = flightData.inBound[inBoundlength - 1].toAirport;
  const flightcode = flightData.outBound[0].flightNo;
  const deptravelstart = new Date(
    flightData.outBound[0].depDate
  ).toDateString();
  const deptravelend = new Date(
    flightData.outBound[outBoundlength - 1].reachDate
  ).toDateString();
  const rettravelstart = new Date(flightData.inBound[0].depDate).toDateString();
  const rettravelend = new Date(
    flightData.inBound[inBoundlength - 1].reachDate
  ).toDateString();
  const depStop = stop.find((item) => item.value === outBoundlength).title;
  const retStop = stop.find((item) => item.value === inBoundlength).title;
  const dettimeStart = flightData.outBound[0].depDate
    .split("T")[1]
    .substring(0, 5);
  const deptimeEnd = flightData.outBound[outBoundlength - 1].reachDate
    .split("T")[1]
    .substring(0, 5);
  const rettimeStart = flightData.inBound[0].depDate
    .split("T")[1]
    .substring(0, 5);
  const rettimeEnd = flightData.inBound[inBoundlength - 1].reachDate
    .split("T")[1]
    .substring(0, 5);
  const totaldepTime = totalTravelTime(flightData.outEFT);
  const totalretTime = totalTravelTime(flightData.inEFT);
  const price = flightData.fare.adultFare + flightData.fare.adultTax;
  const currencyLogo = mostused.find(
    (item) => item.value === search.currencyCode
  ).icon;

  const size = useWindowSize();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    SelectFlight(router, flightData.deeplinkUrl);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="flg-airline-card round-int"
        onClick={size.width < 768 ? handleShow : null}
      >
        <div className="wrap-inner">
          {size.width < 768 ? (
            <div className="head-oneway-mobile">
              <div className="d-flex align-items-center mb-sltd">
                <div className="airline-title mb-0 flex-grow-1">
                  {airlineName}
                  <span className="mx-2">•</span>
                  {airlineCode} - {flightcode}
                </div>
                <div className="text-right ps-2">
                  <div className="price-nk text-nowrap">
                    <strong>
                      {search.currencyCode === "AED" ? (
                        <span>AED </span>
                      ) : (
                        <Icon icon={currencyLogo} className="lsc-currency" />
                      )}
                      {Math.round(price)}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="d-flex fbkconf-flgname align-items-center">
                <div>
                  <img
                    src={`/images/airline-logo/${airlineCode}.png`}
                    alt="Airline"
                    className="airline-pic"
                  />
                </div>

                <div className="arrw-sp-1 flex-grow-1 ps-3 pe-2">
                  <div className="fbkconf-fromto align-items-center abs-2">
                    <div className="way-to pt-1 d-flex">
                      <div>{dettimeStart}</div>
                      <div className="px-3">
                        <Icon icon="solar:arrow-right-broken" />
                      </div>
                      <div> {deptimeEnd}</div>
                    </div>
                    <span className="stops">
                      <b>{totaldepTime}</b> <span className="sltd">|</span>
                      <b>
                        {depAiportcodefrom} - {depAiportcodeto}
                      </b>{" "}
                      <span className="sltd">|</span>
                      <b>{depStop}</b>{" "}
                    </span>
                  </div>
                </div>

                <div className="price-subprice-nk rt dep">
                  <img
                    src="/images/fromeng-plane.png"
                    className="ret-intplane"
                  ></img>{" "}
                  <span>Departure</span>{" "}
                </div>
                <div></div>
              </div>

              <hr className="hr-airline int"></hr>

              <div className="d-flex fbkconf-flgname align-items-center">
                <div>
                  <img
                    src={`/images/airline-logo/${inBoundairlineCode}.png`}
                    alt="Airline"
                    className="airline-pic"
                  />
                </div>
                <div className="arrw-sp-1 flex-grow-1 ps-3 pe-2">
                  <div className="fbkconf-fromto align-items-center abs-3">
                    <div className="way-to pt-1 d-flex">
                      <div>{rettimeStart}</div>
                      <div className="px-3">
                        <Icon icon="solar:arrow-right-broken" />
                      </div>
                      <div>{rettimeEnd}</div>
                    </div>
                    <span className="stops">
                      <b>{totalretTime}</b> <span className="sltd">|</span>
                      <b>
                        {depAiportcodeto} - {depAiportcodefrom}
                      </b>{" "}
                      <span className="sltd">|</span>
                      <b>{retStop}</b>{" "}
                    </span>
                  </div>
                </div>
                <div className="price-subprice-nk rt">
                  <img
                    src="/images/toeng-plane.png"
                    className="ret-intplane"
                  ></img>{" "}
                  <span>Return</span>{" "}
                </div>
              </div>
            </div>
          ) : (
            <Row className="row-1">
              <Col xs={12} md={3}>
                <div className="d-flex fbkconf-flg-name mb-5">
                  <div>
                    <img
                      src={`/images/airline-logo/${airlineCode}.png`}
                      alt="Airline"
                    />
                  </div>
                  <div className="pl">
                    <h6>{airlineName}</h6>
                    <p>
                      {airlineCode} - {flightcode}
                    </p>
                  </div>
                </div>
                <div className="d-flex fbkconf-flg-name">
                  <div>
                    <img
                      src={`/images/airline-logo/${inBoundairlineCode}.png`}
                      alt="Airline"
                    />
                  </div>
                  <div className="pl">
                    <h6>{inBoundairlineName}</h6>
                    <p>
                      {inBoundairlineCode} - {inBoundflightCode}
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={9}>
                <div className="d-flex flgairline-arrw">
                  <div className="flex-grow-1">
                    <div className="arrw-sp-1">
                      <Row className="fbkconf-fromto align-items-center abs-4">
                        <Col className="content">
                          <h5>
                            {depAiportcodefrom} - {dettimeStart}
                          </h5>
                          <p>{deptravelstart.replace(" ", ", ")}</p>
                        </Col>
                        <Col className="center flex-grow-1">
                          <span>{totaldepTime}</span>
                          <div className="arrw-airline-bg custom my-1">
                            <img src="/images/planegray-airline.png" />
                          </div>
                          <span className="esstop">({depStop})</span>
                        </Col>
                        <Col className="content right">
                          <h5>
                            {depAiportcodeto} - {deptimeEnd}
                          </h5>
                          <p> {deptravelend.replace(" ", ", ")}</p>
                        </Col>
                      </Row>
                    </div>
                    <hr className="hr-airline-round" />
                    <div className="arrw-sp-1">
                      <Row className="fbkconf-fromto align-items-center abs-5">
                        <Col className="content">
                          <h5>
                            {retAiportcodefrom} - {rettimeStart}
                          </h5>
                          <p>{rettravelstart.replace(" ", ", ")}</p>
                        </Col>
                        <Col className="center flex-grow-1">
                          <span>{totalretTime}</span>
                          <div className="arrw-airline-bg custom my-1">
                            <img src="/images/planegray-airline.png" />
                          </div>
                          <span className="esstop">({retStop})</span>
                        </Col>
                        <Col className="content right">
                          <h5>
                            {retAiportcodeto} - {rettimeEnd}
                          </h5>
                          <p>{rettravelend.replace(" ", ", ")}</p>
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div className="arrw-sp-2">
                    <button
                      className={`btn ${collpase ? "active" : ""}`}
                      onClick={() => setCollpase(!collpase)}
                      aria-expanded={collpase}
                    >
                      <Image
                        src="/images/clstrv-arrow.png"
                        height={15}
                        width={15}
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          )}

          {size.width > 767 && (
            <>
              <FlgLuggageInfo
                collpase={collpase}
                flightDatOutBound={flightData.outBound}
                flightDatInBound={flightData.inBound}
                airline={airline}
                airport={airport}
                search={search}
              />

              <hr className="hr-airline" />

              <Row className="row-2 align-items-center txfee-2">
                <Col xs={12} md={4} className="taxfees-1">
                  <div className="taxfees">*taxes & fees included</div>
                </Col>
                <Col
                  xs={12}
                  md={8}
                  className="taxfees-2 d-flex justify-content-end align-items-center"
                >
                  <div className="taxfees me-3 ms-2">
                    <strong>
                      {search.currencyCode === "AED" ? (
                        <span>AED </span>
                      ) : (
                        <Icon icon={currencyLogo} className="lsc-currency" />
                      )}
                      {Math.round(price)}
                    </strong>{" "}
                    / person
                  </div>
                  <button
                    className="btn btn-site ripple-wv"
                    type="button"
                    onClick={() => SelectFlight(router, flightData.deeplinkUrl)}
                  >
                    <span>Select Flight</span>
                  </button>
                </Col>
              </Row>
            </>
          )}
        </div>
      </div>

      {size.width < 768 && (
        <Modal
          show={show}
          onHide={handleClose}
          fullscreen={true}
          className="review-onewaypopup"
        >
          <Modal.Header>
            <Container>
              <Modal.Title>
                <button className="btn" onClick={handleClose}>
                  <Icon icon="ion:chevron-back" />
                </button>
                Review Flight Details
              </Modal.Title>
            </Container>
          </Modal.Header>
          <Modal.Body className="pt-3 pb-4">
            <Container>
              <div className="flg-list-row oneway a">
                <FlgLuggageInfo
                  collpase={true}
                  flightDatOutBound={flightData.outBound}
                  flightDatInBound={flightData.inBound}
                  airline={airline}
                  airport={airport}
                  search={search}
                />
              </div>
            </Container>
          </Modal.Body>

          <Modal.Footer className="onewayfilter-off">
            <Container>
              <div className="footer-btn d-flex justify-content-between align-items-center">
                <div className="text-left">
                  <div className="price-subprice-nk">Fare</div>
                  <div className="price-nk text-nowrap">
                    <strong>
                      {search.currencyCode === "AED" ? (
                        <span>AED </span>
                      ) : (
                        <Icon icon={currencyLogo} className="lsc-currency" />
                      )}
                      {Math.round(price)}
                    </strong>
                  </div>
                </div>

                <button
                  className="btn btn-site ripple-wv w-auto bncont"
                  onClick={handleClose}
                >
                  <span>Continue</span>
                </button>
              </div>
            </Container>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default RoundFlightCard;
