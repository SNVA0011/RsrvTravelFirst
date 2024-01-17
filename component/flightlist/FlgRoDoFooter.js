import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Modal from "react-bootstrap/Modal";
import SelectRoundDom from "./SelectRoundDom";
import useWindowSize from "../../hooks/useWindowSize";
import { mostused } from "../../utils/staticCurrency";
import AnimatebyNumber from "../aboutus/AnimatebyNumber";
import { SelectFlight } from "../../utils/flightCheckoutUtils";
import { useRouter } from "next/router";

const FlgRoDoFooter = ({ data, airlines, airport, search }) => {
  console.log("data",data)
  const router = useRouter();
  const size = useWindowSize();
  const scrWidth = size.width;
  const outBound = data[0];
  const inBound = data[1];
  const outBoundAircode = outBound.outBound[0].airline;
  const inBoundAircode = inBound.inBound[0].airline;
  const outBoundAirline = airlines.find(
    (item) => item.code == outBoundAircode
  )?.name;
  const inBoundAirline = airlines.find(
    (item) => item.code == inBoundAircode
  )?.name;
  const outBoundDepAirport = outBound.outBound[0].fromAirport;
  const outBoundArrAirport =
    outBound.outBound[outBound.outBound.length - 1].toAirport;
  const inBoundDepAirport = inBound.inBound[0].fromAirport;
  const inBoundArrAirport =
    inBound.inBound[inBound.inBound.length - 1].toAirport;
  const outBoundFareAdult = outBound.fare.adultFare + outBound.fare.adultTax;
  const inBoundFareAdult = inBound.fare.adultFare + inBound.fare.adultTax;
  const totalFare = inBoundFareAdult + outBoundFareAdult;
  const dettimeStart = outBound.outBound[0].depDate
    .split("T")[1]
    .substring(0, 5);
  const deptimeEnd = outBound.outBound[outBound.outBound.length - 1].reachDate
    .split("T")[1]
    .substring(0, 5);
  const rettimeStart = inBound.inBound[0].depDate.split("T")[1].substring(0, 5);
  const rettimeEnd = inBound.inBound[inBound.inBound.length - 1].reachDate
    .split("T")[1]
    .substring(0, 5);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    SelectFlight(router);
  };
  const handleShow = () => setShow(true);
  const currencyLogo = mostused.find(
    (item) => item.value === search.currencyCode
  ).icon;

  return (
    <>
      <div className="listingbox-domestic-empty"></div>
      <div className="listingbox-domestic">
        <Row className="align-items-sm-center">
          <Col xs={4} className="colp brd-light">
            <div className="summary-list-item">
              <p className="airline-name">
                <strong>
                  Departure <Icon icon="mdi:airplane-takeoff" />
                </strong>
                <b className="d-none d-lg-inline-block mx-2"> <Icon icon="ph:dot-fill" color="#dc391b" /> </b>
                <span className="d-none d-lg-inline-block">
                  {outBoundAirline}
                </span>
              </p>

              <div className="summary-details full d-flex">
                <div className="airline-holder">
                  <img
                    src={`/images/airline-logo/${outBoundAircode}.png`}
                    alt="Airline"
                    className="airline-img"
                  />
                </div>
                <div className="summary-details-item flex-grow-1 px-2">
                  <p className="mr-n">
                    {dettimeStart} - {deptimeEnd}
                  </p>
                  <ul className="layovers  d-none d-lg-block">
                    <li>
                      <span>{outBoundDepAirport}</span>
                      <i></i>
                    </li>
                    <li>
                      <Icon icon="cil:arrow-right" className="mx-3" />
                    </li>
                    <li>
                      <span>{outBoundArrAirport}</span>
                      <i></i>
                    </li>
                  </ul>
                  <div className="summary-details-item d-lg-none">
                    {" "}
                    <p className="mr-price">
                      {search.currencyCode === "AED" ? (
                        <span>AED </span>
                      ) : (
                        <Icon icon={currencyLogo} className="lsc-currency" />
                      )}
                      {Math.round(outBoundFareAdult)}
                    
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="summary-details-item text-right d-none d-lg-block">
                  {" "}
                  <p className="mr-price">
                    {search.currencyCode === "AED" ? (
                      <span>AED </span>
                    ) : (
                      <Icon icon={currencyLogo} className="lsc-currency" />
                    )}
                    {Math.round(outBoundFareAdult)}
                    
                  </p>{" "}
                  <span className="fare-for d-none d-lg-block">Per adult</span>{" "}
                </div>
              </div>
            </div>
          </Col>

          <Col xs={4} className="colp brd-light">
            <div className="summary-list-item">
              <p className="airline-name">
                <strong>
                  Return <Icon icon="mdi:airplane-landing" />
                </strong>
                <b className="d-none d-lg-inline-block mx-2"> <Icon icon="ph:dot-fill" color="#dc391b" /> </b>
                <span className="d-none d-lg-inline-block">
                  {inBoundAirline}
                </span>
              </p>

              <div className="summary-details full d-flex">
                <div className="airline-holder">
                  <img
                    src={`/images/airline-logo/${inBoundAircode}.png`}
                    alt="Airline"
                    className="airline-img"
                  />
                </div>
                <div className="summary-details-item flex-grow-1 px-2">
                  <p className="mr-n">
                    {rettimeStart} - {rettimeEnd}
                  </p>
                  <ul className="layovers  d-none d-lg-block">
                    <li>
                      <span>{inBoundDepAirport}</span>
                      <i></i>
                    </li>
                    <li>
                      <Icon icon="cil:arrow-right" className="mx-3" />
                    </li>
                    <li>
                      <span>{inBoundArrAirport}</span>
                      <i></i>
                    </li>
                  </ul>

                  <div className="summary-details-item d-lg-none">
                    <p className="mr-price">
                      <p className="mr-price">
                        {search.currencyCode === "AED" ? (
                          <span>AED </span>
                        ) : (
                          <Icon icon={currencyLogo} className="lsc-currency" />
                        )}
                        {Math.round(inBoundFareAdult)}
                     
                      </p>
                    </p>
                  </div>
                </div>
                <div className="summary-details-item text-right d-none d-lg-block">
                  <p className="mr-price">
                    <p className="mr-price">
                      {search.currencyCode === "AED" ? (
                        <span>AED </span>
                      ) : (
                        <Icon icon={currencyLogo} className="lsc-currency" />
                      )}
                      {Math.round(inBoundFareAdult)}
                    </p>
                  </p>
                  <span className="fare-for d-none d-lg-block">Per adult</span>
                </div>
              </div>
            </div>
          </Col>

          <Col xs className="colp book">
            <div className="booknow-inc d-flex align-items-center flex-column flex-md-row">
              <div className="summary-price-details ar flex-grow-1 pe-2">
                <div className="ar-price">
                  <p className="summary-pricedom d-flex align-items-center">
                    <div>
                      {search.currencyCode === "AED" ? (
                        <span>AED </span>
                      ) : (
                        <Icon
                          icon={currencyLogo}
                          className="lsc-currency hcur"
                        />
                      )}
                    </div>
                    <AnimatebyNumber number={Math.round(totalFare)} />{" "}
                  </p>
                  <span className="fare-for d-block d-lg-none text-center">
                    Per adult
                  </span>
                </div>
                <span className="link-u" onClick={handleShow}>
                  <Icon
                    icon="material-symbols-light:airplane-ticket-outline-rounded"
                    className="d-none d-sm-inline-block"
                  />
                  <b>
                    Fare Details{" "}
                    <Icon
                      icon={`radix-icons:caret-${show ? "up" : "down"}`}
                      className="d-inline-block d-xl-none"
                    />
                  </b>
                </span>
              </div>
              <div className="btn-full mt-1 mt-sm-0">
                <button
                  className="btn btn-site ripple-wv flashsanimated"
                  onClick={() => SelectFlight(router)}
                >
                  <span>Book</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        backdrop="static"
        keyboard={false}
        centered
        scrollable
        className="review-onewaypopup faremodal-domestic"
        fullscreen={scrWidth < 992 ? true : false}
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

        <Modal.Body>
          <Container>
            {data.map((item, index) => (
              <>
                <div className="flgway-title">
                  <span>
                    {" "}
                    {index == 0 ? (
                      <>
                        <Icon icon="ic:baseline-flight-takeoff" /> Departing
                        Flight{" "}
                        <div className="fluent-inline ms-2">
                          <Icon icon="fluent:send-16-filled" color="#DC391B" />
                          <Icon icon="fluent:send-16-filled" color="#DC391B" />
                        </div>{" "}
                      </>
                    ) : (
                      <>
                        <Icon icon="ic:baseline-flight-land" /> Return Flight{" "}
                        <div className="fluent-inline ms-2">
                          <Icon icon="fluent:send-16-filled" color="#DC391B" />
                          <Icon icon="fluent:send-16-filled" color="#DC391B" />
                        </div>{" "}
                      </>
                    )}
                  </span>
                </div>

                <SelectRoundDom
                  key={index}
                  flightData={item}
                  airline={airlines}
                  airport={airport}
                  search={search}
                  defcollpase={true}
                  defmodalMob={false}
                />
              </>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer className="onewayfilter-off">
          <Container>
            <div className="footer-btn d-flex justify-content-between align-items-center">
              <div className="text-left">
                <div className="price-subprice-nk">Total Fare</div>
                <div className="price-nk text-nowrap">
                  <div className=" d-flex align-items-center">
                    <strong className=" d-flex align-items-center">
                      {search.currencyCode === "AED" ? (
                        <span>AED </span>
                      ) : (
                        <Icon
                          icon={currencyLogo}
                          className="lsc-currency mt-1"
                        />
                      )}
                      <AnimatebyNumber number={Math.round(totalFare)} />
                    </strong>
                  </div>
                </div>
              </div>

              <button className="btn btn-site ripple-wv w-auto bncont" onClick={handleClose}>
                <span>Book Now</span>
              </button>
            </div>{" "}
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FlgRoDoFooter;
