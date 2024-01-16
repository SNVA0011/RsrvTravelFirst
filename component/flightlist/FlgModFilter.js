import React, { useEffect, useMemo, useState } from "react";
import { Row, Col } from "react-bootstrap";
import FlglistCheckbox from "./filter/FlglistCheckbox";
import FlglistTime from "./filter/FlglistTime";
import FlgPriceRangle from "./filter/FlgPriceRangle";
import { resetFilter } from "../../utils/flightListingFilter";
import DurationRange from "./filter/DurationRange";
import { Icon } from "@iconify/react";
import {
  findAirlinePrice,
  findStopResult,
  travelDuration,
} from "../../utils/flightFilterUtils";
import useWindowSize from "../../hooks/useWindowSize";
import Offcanvas from "react-bootstrap/Offcanvas";
import SelectedFilter from "./SelectedFilter";
import Image from "next/image";
import { Chip } from "@mui/material";
import { totalTravelTime } from "../../utils/dateCal";

const Time = [
  {
    title: "05:00 AM - 11:59 AM",
    icon: "fltime-morning",
    value: "05:00:00-11:59:00",
  },
  {
    title: "12:00 PM - 05:59 PM",
    icon: "fltime-sun",
    value: "12:00:00-17:59:00",
  },
  {
    title: "06:00 PM - 11:59 PM",
    icon: "fltime-sunset",
    value: "18:00:00-23:00:00",
  },
  {
    title: "12:00 AM - 04:59 AM",
    icon: "fltime-moon",
    value: "00:00:00-04:59:00",
  },
];
const FlgModFilter = ({ flightResponse, dispatchFilter, search }) => {
  const duration = useMemo(
    () =>
      travelDuration(flightResponse.flightData.flightResult, search.tripType),
    [flightResponse.flightData.flightResult]
  );
  const findAirlinePriceMin = useMemo(
    () => findAirlinePrice(flightResponse),
    [flightResponse]
  );

  const CountStop = useMemo(
    () => findStopResult(flightResponse.flightData.flightResult),
    [flightResponse.flightData.flightResult]
  );
  console.log("CountStop",CountStop)
  const maxPrice = Math.round(flightResponse.flightData.maxPrice);
  const minPrice = Math.round(flightResponse.flightData.minPrice);
  const defaultValue = [minPrice, maxPrice];
  const maxDuration = duration[1];
  const minDuration = duration[0];
  const [value, setValue] = useState(defaultValue);
  const [traveltime, setTraveltime] = useState(duration);
  const [checkedValue, setCheckedValue] = useState([]);
  const [airlinechecked, setAirlineChecked] = useState([]);
  const [departureTime, setDepartureTime] = useState([]);
  const [arrivalTime, setArrivalTime] = useState([]);
  const [airlinecount, setAirlineCount] = useState(5);
  const [modifysort, setmodifysort] = useState(false);

  const handlecheckbox = (e) => {
    let list = [...checkedValue];
    if (e.target.checked) {
      list = [...checkedValue, Number(e.target.value)];
      setCheckedValue(list);
      // dispatchFilter({
      //   type: "stop",
      //   payload: {
      //     checkstop: list,
      //     airlinechecked: airlinechecked,
      //     departureTime: departureTime,
      //     arrivalTime: arrivalTime,
      //     value: value,
      //     initialValue: flightResponse.flightData.flightResult,
      //     durationTime: traveltime,
      //   },
      // });
    } else {
      const data = checkedValue.filter(
        (item) => item !== Number(e.target.value)
      );
      setCheckedValue(data);
      // dispatchFilter({
      //   type: "stop",
      //   payload: {
      //     checkstop: data,
      //     airlinechecked: airlinechecked,
      //     departureTime: departureTime,
      //     arrivalTime: arrivalTime,
      //     value: value,
      //     initialValue: flightResponse.flightData.flightResult,
      //     durationTime: traveltime,
      //   },
      // });
    }
  };

  const PricehandleChange = (event, newValue) => {
    setValue(newValue);
    // dispatchFilter({
    //   type: "Price",
    //   payload: {
    //     checkstop: checkedValue,
    //     airlinechecked: airlinechecked,
    //     departureTime: departureTime,
    //     arrivalTime: arrivalTime,
    //     value: newValue,
    //     initialValue: flightResponse.flightData.flightResult,
    //     durationTime: traveltime,
    //   },
    // });
  };
  const timehandleChange = (event, newValue) => {
    setTraveltime(newValue);
    // dispatchFilter({
    //   type: "time",
    //   payload: {
    //     checkstop: checkedValue,
    //     airlinechecked: airlinechecked,
    //     departureTime: departureTime,
    //     arrivalTime: arrivalTime,
    //     value: value,
    //     initialValue: flightResponse.flightData.flightResult,
    //     durationTime: newValue,
    //   },
    // });
  };

  const arrivalHandleTime = (item) => {
    let time = [...arrivalTime, item];
    if (arrivalTime.includes(item)) {
      const filtertime = time.filter((it) => it !== item);
      setArrivalTime(filtertime);
      // dispatchFilter({
      //   type: "ArrivalTime",
      //   payload: {
      //     checkstop: checkedValue,
      //     airlinechecked: airlinechecked,
      //     departureTime: departureTime,
      //     arrivalTime: filtertime,
      //     value: value,
      //     initialValue: flightResponse.flightData.flightResult,
      //     durationTime: traveltime,
      //   },
      // });
    } else {
      // dispatchFilter({
      //   type: "ArrivalTime",
      //   payload: {
      //     checkstop: checkedValue,
      //     airlinechecked: airlinechecked,
      //     departureTime: departureTime,
      //     arrivalTime: time,
      //     value: value,
      //     initialValue: flightResponse.flightData.flightResult,
      //     durationTime: traveltime,
      //   },
      // });
      setArrivalTime(time);
    }
  };
  const departureHandleTime = (item) => {
    let time = [...departureTime, item];
    if (departureTime.includes(item)) {
      const filtertime = time.filter((it) => it !== item);
      setDepartureTime(filtertime);
      // dispatchFilter({
      //   type: "DepartureTime",
      //   payload: {
      //     checkstop: checkedValue,
      //     airlinechecked: airlinechecked,
      //     departureTime: filtertime,
      //     arrivalTime: arrivalTime,
      //     value: value,
      //     initialValue: flightResponse.flightData.flightResult,
      //     durationTime: traveltime,
      //   },
      // });
    } else {
      // dispatchFilter({
      //   type: "DepartureTime",
      //   payload: {
      //     checkstop: checkedValue,
      //     airlinechecked: airlinechecked,
      //     departureTime: time,
      //     arrivalTime: arrivalTime,
      //     value: value,
      //     initialValue: flightResponse.flightData.flightResult,
      //     durationTime: traveltime,
      //   },
      // });
      setDepartureTime(time);
    }
  };

  const handleAirlineFilter = (e) => {
    let list = [...airlinechecked];
    if (e.target.checked) {
      list = [...airlinechecked, e.target.value];
      setAirlineChecked(list);
      // dispatchFilter({
      //   type: "Airline",
      //   payload: {
      //     checkstop: checkedValue,
      //     airlinechecked: list,
      //     departureTime: departureTime,
      //     arrivalTime: arrivalTime,
      //     value: value,
      //     initialValue: flightResponse.flightData.flightResult,
      //     durationTime: traveltime,
      //   },
      // });
    } else {
      const data = airlinechecked.filter((item) => item !== e.target.value);
      setAirlineChecked(data);
      // dispatchFilter({
      //   type: "Airline",
      //   payload: {
      //     checkstop: data,
      //     airlinechecked: data,
      //     departureTime: departureTime,
      //     arrivalTime: arrivalTime,
      //     value: value,
      //     initialValue: flightResponse.flightData.flightResult,
      //     durationTime: traveltime,
      //   },
      // });
    }
  };

  const filteredDelete = (type, value) => {
    switch (type) {
      case "stop":
        const stop = checkedValue.filter((item) => item !== value);
        setCheckedValue(stop);
        break;
      case "airline":
        const data = airlinechecked.filter((item) => item !== value);
        setAirlineChecked(data);
        break;
      case "arrivalTime":
        const filtertime = arrivalTime.filter((it) => it !== value);
        setArrivalTime(filtertime);
        break;
      case "departure":
        const depfiltertime = departureTime.filter((it) => it !== value);
        setDepartureTime(depfiltertime);
        break;
      case "Price":
        setValue(value);
        break;
      case "time":
        setTraveltime(value);
        break;
    }
  };

  const size = useWindowSize();
  const modalview = modifysort ? " show" : "";
  const tablet = setTimeout(() => {
    size.width < 1200;
  }, 2000);

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
            className={`fade offcanvas-backdrop ${modifysort ? "show" : "d-none"
              } fadeanim-offcanvas`}
            onClick={() => {
              setmodifysort(!modifysort);
            }}
          />

          <button
            type="button"
            className="oneway editfilter-icon flashsanimated"
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
      <div
        className={
          size.width < 1200 ? "onewayfilter-off" : "onewayfilter-off d-inline"
        }
      >
        <div
          className={
            (tablet
              ? "cpt offcanvas offcanvas-sidenav offcanvas-bottom"
              : "d-inline") + modalview
          }
        >
          {size.width < 1200 && (
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
          )}

          <Offcanvas.Body
            className={
              size.width < 1200
                ? "px-0 pb-2 pt-0 py-xl-0 d-flex flex-column"
                : "d-inline p-0"
            }
          >
            <aside className="flgmodf-filter stickyasd">
              <div className="">
                <div className="ptmy-20 d-none d-xl-block">
                  <Row className="align-items-center heading-row">
                    <Col xs={8}>
                      <h4>
                        {" "}
                        {checkedValue.length !== 0 ||
                          airlinechecked.length !== 0 ||
                          arrivalTime.length !== 0 ||
                          departureTime.length !== 0
                          ? "Applied Filters"
                          : "Filters"}
                      </h4>
                    </Col>
                    <Col xs={4} className="text-right">
                      {checkedValue.length !== 0 ||
                        airlinechecked.length !== 0 ||
                        arrivalTime.length !== 0 ||
                        departureTime.length !== 0 ||
                        value[0] !== minPrice ||
                        value[1] !== maxPrice ? (
                        <button
                          className="fi-btn btn"
                          onClick={() =>
                            resetFilter(
                              flightResponse.flightData.flightResult,
                              dispatchFilter,
                              setCheckedValue,
                              setAirlineChecked,
                              setArrivalTime,
                              setDepartureTime
                            )
                          }
                        >
                          {" "}
                          Reset{" "}
                        </button>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                </div>
                {checkedValue.length !== 0 ||
                  airlinechecked.length !== 0 ||
                  arrivalTime.length !== 0 ||
                  departureTime.length !== 0 ||
                  value[0] !== minPrice ||
                  value[1] !== maxPrice ? (
                  <Row className="align-items-center heading-row mt-3 mt-xl-0">
                    <Col xs={12} className="pb-3 px-3">
                      <SelectedFilter
                        stopFiltered={checkedValue}
                        airlineFiltered={airlinechecked}
                        arrivalFiltered={arrivalTime}
                        departureFiltered={departureTime}
                        stop={CountStop}
                        airline={findAirlinePriceMin}
                        deleteFilter={filteredDelete}
                        search={search}
                      />
                      <div className="filter-div-chip mv-chp">
                        {value[0] === minPrice && value[1] === maxPrice ? (
                          ""
                        ) : (
                          <span className="me-2 mb-2 d-inline-block">
                            <Chip
                              label={`${search.currencyCode} : ${value[0]} - ${value[1]}`}
                              onDelete={() => filteredDelete("Price", defaultValue)}
                              color='primary' style={{backgroundColor:'#DC391B',fontSize : '12px'}}  
                            />
                          </span>
                        )}

                        {traveltime[0] == minDuration &&
                          traveltime[1] == maxDuration ? (
                          ""
                        ) : (
                          <span className="me-2 mb-2 d-inline-block"> 
                            <Chip
                              label={`${totalTravelTime(
                                traveltime[0]
                              )} - ${totalTravelTime(traveltime[1])}`}
                              onDelete={() => filteredDelete("time", duration)}
                              color='primary' style={{backgroundColor:'#DC391B',fontSize : '12px'}}  
                            />
                          </span>

                        )}
                      </div>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}

                <hr></hr>
              </div>

              <FlglistCheckbox
                title={`Stops From ${search.originAirport}`}
                data={CountStop}
                currency={search.currencyCode}
                handlecheckbox={handlecheckbox}
                checked={checkedValue}
              />
              <hr></hr>
              <FlgPriceRangle
                title={`One Way Price`}
                startRange={minPrice}
                endRange={maxPrice}
                step={10}
                currency={search.currencyCode}
                value={value}
                handleChange={PricehandleChange}
              />
              <hr></hr>
              <DurationRange
                title={`Onward Duration`}
                startRange={minDuration}
                endRange={maxDuration}
                step={10}
                value={traveltime}
                handleChange={timehandleChange}
              />
              <hr></hr>
              <hr></hr>

              <hr></hr>
              <FlglistCheckbox
                title={`Airlines`}
                currency={search.currencyCode}
                data={findAirlinePriceMin.slice(0, airlinecount)}
                handlecheckbox={handleAirlineFilter}
                checked={airlinechecked}
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
              <FlglistTime
                title={`Departure From ${search.originAirport}`}
                data={Time}
                handleChange={departureHandleTime}
                value={departureTime}
              />
              <hr></hr>
              <FlglistTime
                title={`Arrival at ${search.destinationAirport}`}
                data={Time}
                handleChange={arrivalHandleTime}
                value={arrivalTime}
              />
            </aside>
          </Offcanvas.Body>

          {size.width < 1200 && (
            <div className="footer-btn d-flex justify-content-between align-items-center">
              {checkedValue.length !== 0 ||
                airlinechecked.length !== 0 ||
                arrivalTime.length !== 0 ||
                departureTime.length !== 0 ? (
                <button
                  className="fi-btn-heads btn ripple-wv"
                  onClick={() =>
                    resetFilter(
                      flightResponse.flightData.flightResult,
                      dispatchFilter,
                      setCheckedValue,
                      setAirlineChecked,
                      setArrivalTime,
                      setDepartureTime
                    )
                  }
                >
                  <span>
                    Reset <Icon icon="system-uicons:reset-forward" />
                  </span>
                </button>
              ) : (
                ""
              )}

              <button
                className="btn btn-site ripple-wv"
                onClick={() => {
                  setmodifysort(false);
                }}
              >
                <span>Show Flights</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FlgModFilter;
