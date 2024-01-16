import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FlgLuggageInfo from "./filter/FlgLuggageInfo";
import { totalTravelTime } from "../../utils/dateCal";
import { stop } from "../../utils/static";
import { mostused } from "../../utils/staticCurrency";
import { Icon } from "@iconify/react";
import useWindowSize from "../../hooks/useWindowSize";
import Modal from "react-bootstrap/Modal";
import { SelectFlight } from "../../utils/flightCheckoutUtils";
import { useRouter } from "next/router";
import Image from "next/image";

const SelectFlightCard = ({
  flightData,
  airline,
  airport,
  search,
  defcollpase = false,
}) => {
  const [collpase, setCollpase] = useState(defcollpase);
  const router = useRouter();
  const airlineCode = flightData.outBound[0].airline;
  const airlineName = airline.find((item) => item.code === airlineCode)?.name;
  const length = flightData.outBound.length;
  const flightcode = flightData.outBound[0].flightNo;
  const fromAirportCode = flightData.outBound[0].fromAirport;
  const toAirportCode = flightData.outBound[length - 1].toAirport;
  const price = flightData.fare.adultFare + flightData.fare.adultTax;
  const travelstart = new Date(flightData.outBound[0].depDate).toDateString();
  const travelend = new Date(
    flightData.outBound[length - 1].reachDate
  ).toDateString();
  const timeStart = flightData.outBound[0].depDate
    .split("T")[1]
    .substring(0, 5);

  const timeEnd = flightData.outBound[length - 1].reachDate
    .split("T")[1]
    .substring(0, 5);
  const totalTime = totalTravelTime(flightData.outEFT);
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
        className="flg-airline-card"
        onClick={size.width < 768 ? handleShow : null}
      >
        <div className="wrap-inner">
          {size.width < 768 ? (
            <div className="head-oneway-mobile oneway">
              <div className="airline-title">
                {airlineName}
                <span className="mx-2">•</span>
                {airlineCode} - {flightcode}
              </div>

              <div className="d-flex fbkconf-flgname">
                <div>
                  {" "}
                  <img
                    src={`/images/airline-logo/${airlineCode}.png`}
                    alt="Airline"
                    className="airline-pic"
                  />
                </div>

                <div className="arrw-sp-1 flex-grow-1 ps-3 pe-2">
                  <div className="fbkconf-fromto align-items-center abs-6">
                    <div className="way-to d-flex">
                      <div>{timeStart}</div>
                      <div className="px-3">
                        <Icon icon="solar:arrow-right-broken" />
                      </div>
                      <div>{timeEnd}</div>
                    </div>

                    <div className="way-tocode">
                      <span className="d-inline-block first">
                        {fromAirportCode}
                      </span>
                      <span className="d-inline-block">{toAirportCode}</span>
                    </div>

                    <span className="stops">
                      <b>{totalTime}</b> <span className="sltd">|</span>
                      <b>
                        {" "}
                        {stop.find((stops) => stops.value === length).title}
                      </b>
                    </span>
                  </div>
                </div>

                <div className="text-right">
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
                  <div className="price-subprice-nk">Per traveler</div>
                </div>
              </div>
            </div>
          ) : (
            <Row className="row-1">
              <Col xs={12} md={3}>
                <div className="d-flex fbkconf-flg-name">
                  <div>
                    {" "}
                    <img
                      src={`/images/airline-logo/${airlineCode}.png`}
                      alt="Airline"
                    />
                  </div>
                  <div className="pl">
                    <h6>{airlineName}</h6>
                    <p>
                      <span>
                        {airlineCode} - {flightcode}
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={9}>
                <div className="d-flex flgairline-arrw">
                  <div className="arrw-sp-1 flex-grow-1">
                    <Row className="fbkconf-fromto align-items-center abs-7">
                      <Col className="content">
                        <h5>
                          {fromAirportCode} - {timeStart}
                        </h5>
                        <p>{travelstart.replace(" ", ", ")}</p>
                      </Col>
                      <Col className="center flex-grow-1">
                        <span>{totalTime}</span>
                        <div className="arrw-airline-bg custom my-1">
                          <img src="/images/planegray-airline.png" />
                        </div>
                        <span className="esstop">
                          {stop.find((stops) => stops.value === length).title}
                        </span>
                      </Col>
                      <Col className="content right">
                        <h5>
                          {toAirportCode} - {timeEnd}
                        </h5>
                        <p>{travelend.replace(" ", ", ")}</p>
                      </Col>
                    </Row>
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

              <hr className="hr-airline sep" />

              <Row className="row-2 align-items-center txfee-3">
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

export default SelectFlightCard;
