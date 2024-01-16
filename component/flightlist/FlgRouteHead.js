import React from "react";
import { Icon } from "@iconify/react";
import AirportData from "../../component/staticJson/AirportData.json";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import useWindowSize from "../../hooks/useWindowSize";

const FlgRouteHead = ({
  travelFrom,
  travelTo,
  travelStart,
  setFilterData,
  data,
  Bound,
}) => {
  const [fromCity, setfromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [upAnddown, setUpAnddown] = useState(true);
  const [active, setActive] = useState("priceSort");
  const serachAirport = () => {
    const form =
      travelFrom &&
      AirportData.find((item) => item.airportCode === travelFrom).airportCode;
    const to =
      travelTo &&
      AirportData.find((item) => item.airportCode === travelTo).airportCode;
    setfromCity(form);
    setToCity(to);
  };
  useEffect(() => {
    serachAirport();
  }, [travelFrom]);

  const [sticky, setSticky] = useState("");
  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const size = useWindowSize();
  const scwidth =
    size.width <= 1199 && size.width >= 992
      ? 181
      : size.width < 992
      ? 160
      : 181;

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= scwidth ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  return (
    <>
      {sticky && <div className={`empty-headbysort d-xl-none`}></div>}
      <div className={`route-headby-sort ${sticky}`}>
        <ul className="mb-3 route-dt">
          <li className="fw-bold">
            <span>
              {" "}
              {fromCity} <Icon icon="octicon:arrow-right-24" className="mx-2" />{" "}
              {toCity}
            </span>
          </li>
          <li>
            <span>{moment(travelStart).format("MMM Do YYYY")}</span>
          </li>
        </ul>
        <ul
          className={`${
            active == "depature" ? "filter-prc active" : "filter-prc"
          }`}
        >
          <li
            className={`${active == "depature" ? "active" : ""}`}
            onClick={() => {
              setFilterData({
                type: "depature",
                flightData: data,
                Bound,
                upAnddown,
              });
              setUpAnddown(!upAnddown);
              setActive("depature");
            }}
          >
            Departure{" "}
            <Icon
              icon={`mingcute:${
                upAnddown ? "arrow-up-line" : "arrow-down-line"
              }`}
            />
          </li>
          <li
            className={`${
              active == "duration"
                ? "d-none d-md-inline-block active"
                : `d-none d-md-inline-block`
            }`}
            onClick={() => {
              setFilterData({
                type: "duration",
                flightData: data,
                Bound,
                upAnddown,
              });
              setUpAnddown(!upAnddown);
              setActive("duration");
            }}
          >
            Duration{" "}
            <Icon
              icon={`mingcute:${
                upAnddown ? "arrow-up-line" : "arrow-down-line"
              }`}
            />
          </li>
          <li
            className={`${
              active == "arrive"
                ? "d-none d-md-inline-block active"
                : `d-none d-md-inline-block`
            }`}
            onClick={() => {
              setFilterData({
                type: "arrive",
                flightData: data,
                Bound,
                upAnddown,
              });
              setUpAnddown(!upAnddown);
              setActive("arrive");
            }}
          >
            Arrival{" "}
            <Icon
              icon={`mingcute:${
                upAnddown ? "arrow-up-line" : "arrow-down-line"
              }`}
            />
          </li>
          <li
            className={`${active == "priceSort" ? "active" : ""}`}
            onClick={() => {
              {
                setFilterData({
                  type: "priceSort",
                  flightData: data,
                  upAnddown,
                });
                setUpAnddown(!upAnddown);
                setActive("priceSort");
              }
            }}
          >
            Price{" "}
            <Icon
              icon={`mingcute:${
                upAnddown ? "arrow-up-line" : "arrow-down-line"
              }`}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default FlgRouteHead;
