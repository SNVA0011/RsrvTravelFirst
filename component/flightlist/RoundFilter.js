import React, { useEffect, useState } from "react";
import FlglistCheckbox from "./filter/FlglistCheckbox";
import FlgPriceRangle from "./filter/FlgPriceRangle";
import DeReFilter from "./filter/DeReFilter";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import useWindowSize from "../../hooks/useWindowSize";
import Offcanvas from "react-bootstrap/Offcanvas";
import moment from "moment/moment";
import DurationRange from "./filter/DurationRange";
import { useMemo } from "react";
import {
  findAirlinePrice,
  travelDuration,
} from "../../utils/flightFilterUtils";
// import { roundStopCount } from "../../utils/roundFilter";
import Image from "next/image";
const RoundFilter = ({ flightResponse, waytrip, search, setFilterData }) => {
  const findAirlinePriceMin = useMemo(
    () => findAirlinePrice(flightResponse),
    [flightResponse]
  );
  const duration = useMemo(() =>
      travelDuration(flightResponse.flightData.flightResult, search.tripType),
    [flightResponse.flightData.flightResult]
  );
  // const stopCount = roundStopCount(flightResponse.flightData.flightResult);
  // console.log("stop", stopCount);
  const outBoundTime = duration[0];
  const inBoundTime = duration[1];
  const outBoundMinTime = Number(outBoundTime.split("-")[0]);
  const outBoundMaxTime = Number(outBoundTime.split("-")[1]);
  const inBoundMinTime = Number(inBoundTime.split("-")[0]);
  const inBoundMaxTime = Number(inBoundTime.split("-")[1]);
  const maxPrice = Math.round(flightResponse.flightData.maxPrice);
  const minPrice = Math.round(flightResponse.flightData.minPrice);
  const defaultValue = [minPrice, maxPrice];
  const [modifysort, setmodifysort] = useState(false);
  const [airlinecount, setAirlineCount] = useState(5);
  const [airlineReturn, setAirlineReturn] = useState([]);
  const [airlineDep, setAirlineDep] = useState([]);
  const [priceReturn, setPriceReturn] = useState(defaultValue);
  const [priceDep, setPriceDep] = useState(defaultValue);
  const [inBTime, setInBTime] = useState([inBoundMinTime, inBoundMaxTime]);
  const [outBTime, setOutBTime] = useState([outBoundMinTime, outBoundMaxTime]);

  const handlepriceReturn = (event, newValue) => {
    setPriceReturn(newValue);
    setFilterData({
      type: "inBprice",
      inBprice: newValue,
      flightData: flightResponse.flightData.flightResult,
    });
  };
  const handlepriceDep = (event, newValue) => {
    setPriceDep(newValue);
    setFilterData({
      type: "outBprice",
      outBprice: newValue,
      flightData: flightResponse.flightData.flightResult,
    });
  };
  const handleinBTime = (event, newValue) => {
    setInBTime(newValue);
    setFilterData({
      type: "inBoundTime",
      inBoundTime: newValue,
      flightData: flightResponse.flightData.flightResult,
    });
  };
  const handleouBTime = (event, newValue) => {
    setOutBTime(newValue);
    setFilterData({
      type: "outBoundTime",
      outBoundTime: newValue,
      flightData: flightResponse.flightData.flightResult,
    });
  };
  const handleAirlineReturn = (e) => {
    let airCode = [...airlineReturn];
    if (e.target.checked) {
      airCode = [...airCode, e.target.value];
      setAirlineReturn(airCode);
      setFilterData({
        type: "airlineReturn",
        airlineReturn: airCode,
        flightData: flightResponse.flightData.flightResult,
      });
    } else {
      const aircode = airlineReturn.filter((ite) => ite !== e.target.value);
      setAirlineReturn(aircode);
      setFilterData({
        type: "airlineReturn",
        airlineReturn: airCode,
        flightData: flightResponse.flightData.flightResult,
      });
    }
  };
  const handleAirlineDep = (e) => {
    let airCode = [...airlineDep];
    if (e.target.checked) {
      airCode = [...airCode, e.target.value];
      setAirlineDep(airCode);
      setFilterData({
        type: "airlineDep",
        airlineDep: airCode,
        flightData: flightResponse.flightData.flightResult,
      });
    } else {
      const aircode = airlineDep.filter((ite) => ite !== e.target.value);
      setAirlineDep(aircode);
      setFilterData({
        type: "airlineDep",
        airlineDep: aircode,
        flightData: flightResponse.flightData.flightResult,
      });
    }
  };

  const size = useWindowSize();
  const tablet = setTimeout(() => {
    size.width < 1200;
  }, 2000);
  const modalview = modifysort ? " show" : "";

  useEffect(() => {
    if (tablet) {
      try {
        if (modifysort) {
          document.body.classList.add("modal-open");
        } else {
          document.body.classList.remove("modal-open");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [modifysort]);

  return (
    <>
      {size.width < 1200 && (
        <>
          <div
            className={`fade offcanvas-backdrop ${
              modifysort ? "show" : "d-none"
            } fadeanim-offcanvas`}
            onClick={() => {
              setmodifysort(!modifysort);
            }}
          />

          <button
            type="button"
            className={`${waytrip} editfilter-icon flashsanimated`}
            onClick={() => {
              setmodifysort(!modifysort);
            }}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <Icon icon="streamline:interface-setting-slider-horizontal-adjustment-adjust-controls-fader-horizontal-settings-slider" />

            <span className="fw-semibold">Filters</span>
          </button>
        </>
      )}

      {/*-------- offcanvas-top --------*/}
      <div className={tablet ? "onewayfilter-off ct-3 domestic" : "d-inline"}>
        <div
          className={
            (tablet
              ? "cpt offcanvas offcanvas-sidenav offcanvas-bottom onewayfilter-off"
              : "d-inline") + modalview
          }
        >
          {size.width < 1200 && (
            <>
              <Offcanvas.Header className="d-flex justify-content-center align-items-center">
                <Icon
                  icon="streamline:interface-setting-slider-horizontal-adjustment-adjust-controls-fader-horizontal-settings-slider"
                  className="me-auto cil-fil"
                />

                <Offcanvas.Title>Filters</Offcanvas.Title>
                <button
                  type="button"
                  className="btn-close text-white d-flex"
                  onClick={() => {
                    setmodifysort(!modifysort);
                  }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <Icon icon="ic:round-close" color="#000000" />
                </button>
              </Offcanvas.Header>
            </>
          )}

          <Offcanvas.Body
            className={
              size.width < 1200
                ? "px-0 pb-2 pt-0 py-xl-0 d-flex flex-column"
                : "d-inline p-0"
            }
          >
            <aside className="flgmodf-filter stickyasd">
              <div className="flight-luggage-info filter">
                <div className="tab-flginfo">
                  <div className={`icvfare-tab`}>
                    <Tabs defaultActiveKey="departe" className="fil-domint">
                      <Tab
                        eventKey="departe"
                        title={
                          <>
                            <div className="icvfare-title tab-1">
                              <b className="d-block">
                                {search.originAirport}
                                <Icon icon="solar:arrow-right-broken" />{" "}
                                {search.destinationAirport}
                              </b>
                              <span>
                                {moment(search.fromDate).format("DD MMM, YYYY")}
                              </span>
                            </div>
                            <div className="icvfaresub">
                              <span>Departure</span>
                            </div>
                          </>
                        }
                      >
                        <FlgPriceRangle
                          title={`Price`}
                          startRange={minPrice}
                          endRange={maxPrice}
                          step={10}
                          value={priceDep}
                          currency={search.currencyCode}
                          handleChange={handlepriceDep}
                        />
                        <hr></hr>

                        <DurationRange
                          title={`Onward Duration`}
                          startRange={outBoundMinTime}
                          endRange={outBoundMaxTime}
                          step={10}
                          value={outBTime}
                          handleChange={handleouBTime}
                        />
                        <hr></hr>
                        <DeReFilter
                          currency={search.currencyCode}
                          DepartTitle={`Departure from ${search.originAirport}`}
                        />
                        <FlglistCheckbox
                          title={`Airlines`}
                          currency={search.currencyCode}
                          data={findAirlinePriceMin.slice(0, airlinecount)}
                          handlecheckbox={handleAirlineDep}
                        />
                        {findAirlinePriceMin.length >= 5 && (
                          <div className="btn-footer btn">
                            <Row
                              className="align-items-center heading-row"
                              onClick={() =>
                                airlinecount == 5
                                  ? setAirlineCount(findAirlinePriceMin.length)
                                  : setAirlineCount(5)
                              }
                            >
                              {airlinecount == 5 ? (
                                <Col xs={8}>
                                  Show more ({findAirlinePriceMin.length - 5})
                                </Col>
                              ) : (
                                <Col xs={8}>Show less</Col>
                              )}

                              <Col xs={4} className="text-right">
                                <Image
                                  src="/images/clstrv-arrow.png"
                                  height={15}
                                  width={15}
                                  alt="arrow"
                                />
                              </Col>
                            </Row>
                          </div>
                        )}
                      </Tab>
                      <Tab
                        eventKey="return"
                        title={
                          <>
                            <div className="icvfare-title tab-2">
                              <b className="d-block">
                                {" "}
                                {search.destinationAirport}
                                <Icon icon="solar:arrow-right-broken" />{" "}
                                {search.originAirport}
                              </b>
                              <span>
                                {moment(search.toDate).format("DD MMM, YYYY")}
                              </span>
                            </div>
                            <div className="icvfaresub">
                              <span>Return</span>
                            </div>
                          </>
                        }
                      >
                        <FlgPriceRangle
                          title={`Price`}
                          startRange={minPrice}
                          endRange={maxPrice}
                          step={10}
                          value={priceReturn}
                          currency={search.currencyCode}
                          handleChange={handlepriceReturn}
                        />
                        <hr></hr>

                        <DurationRange
                          title={`Return Duration`}
                          startRange={inBoundMinTime}
                          endRange={inBoundMaxTime}
                          step={10}
                          value={inBTime}
                          handleChange={handleinBTime}
                        />
                        <hr></hr>
                        <DeReFilter
                          currency={search.currencyCode}
                          DepartTitle={`Departure from ${search.destinationAirport}`}
                        />
                        <hr></hr>
                        <FlglistCheckbox
                          title={`Airlines`}
                          currency={search.currencyCode}
                          data={findAirlinePriceMin.slice(0, airlinecount)}
                          handlecheckbox={handleAirlineReturn}
                        />
                        {findAirlinePriceMin.length >= 5 && (
                          <div className="btn-footer btn">
                            <Row
                              className="align-items-center heading-row"
                              onClick={() =>
                                airlinecount == 5
                                  ? setAirlineCount(findAirlinePriceMin.length)
                                  : setAirlineCount(5)
                              }
                            >
                              {airlinecount == 5 ? (
                                <Col xs={8}>
                                  Show more ({findAirlinePriceMin.length - 5})
                                </Col>
                              ) : (
                                <Col xs={8}>Show less</Col>
                              )}

                              <Col xs={4} className="text-right">
                                <Image
                                  src="/images/clstrv-arrow.png"
                                  height={15}
                                  width={15}
                                  alt="arrow"
                                />
                              </Col>
                            </Row>
                          </div>
                        )}
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </aside>
          </Offcanvas.Body>

          {size.width < 1200 && (
            <>
              <div className="footer-btn d-flex justify-content-between align-items-center">
                <button className="fi-btn-heads btn ripple-wv">
                  <span>
                    Reset <Icon icon="system-uicons:reset-forward" />
                  </span>
                </button>

                <button
                  className="btn btn-site ripple-wv"
                  onClick={() => {
                    setmodifysort(false);
                  }}
                >
                  <span>Show Flights</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RoundFilter;
