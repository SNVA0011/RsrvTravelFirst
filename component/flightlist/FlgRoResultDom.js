import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import FlgRouteHead from "./FlgRouteHead";
import FlgRoDoFooter from "./FlgRoDoFooter";
import FlgRoDomCard from "./FlgRoDomCard";
import useWindowSize from "../../hooks/useWindowSize";

const FlgRoResultDom = ({ flightResponse, setFilterData, search }) => {
  const outBound = flightResponse.flightData.flightResult.filter(
    (item) => item.outBound
  );
  const inBound = flightResponse.flightData.flightResult.filter(
    (item) => item.inBound
  );
  const airline = flightResponse.flightData.airline;
  const airport = flightResponse.flightData.airport;
  const [activefrom, setActiveFrom] = useState(0);
  const [activeto, setActiveto] = useState(0);
  const [slectedInBound, setSlectedInBound] = useState([inBound[0]]);
  const [slectedOutBound, setSlectedOutBound] = useState([outBound[0]]);
  const size = useWindowSize();

  return (
    <div>
      <div
        className={`flg-list-row ${size.width > 767 ? "round-dom" : "oneway"}`}
      >
        <Row className="rowmob-rdom">
          <Col xs={6}>
            <FlgRouteHead
              travelFrom={search.originAirport}
              travelTo={search.destinationAirport}
              travelStart={search.fromDate}
              setFilterData={setFilterData}
              data={outBound}
              Bound={"outBound"}
            />

            <div className="flgdomestic-row" id="frompround-dom">
              {outBound.map((item, index) => {
                return (
                  <FlgRoDomCard
                    key={index}
                    flight={item.outBound}
                    airline={airline}
                    fare={item.fare}
                    totaltime={item.outEFT}
                    index={index}
                    active={activefrom}
                    setActive={setActiveFrom}
                    slectedData={item}
                    setSlected={setSlectedOutBound}
                    currencyCode={search.currencyCode}
                  />
                );
              })}
            </div>
          </Col>
          <Col xs={6}>
            <FlgRouteHead
              travelFrom={search.destinationAirport}
              travelTo={search.originAirport}
              travelStart={search.toDate}
              setFilterData={setFilterData}
              data={inBound}
              Bound={"inBound"}
            />

            <div className="flgdomestic-row" id="topround-dom">
              {inBound.map((item, index) => {
                return (
                  <FlgRoDomCard
                    key={index}
                    flight={item.inBound}
                    airline={airline}
                    fare={item.fare}
                    totaltime={item.inEFT}
                    index={index}
                    active={activeto}
                    setActive={setActiveto}
                    slectedData={item}
                    setSlected={setSlectedInBound}
                    currencyCode={search.currencyCode}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </div>

      <FlgRoDoFooter
        data={[...slectedOutBound, ...slectedInBound]}
        airlines={airline}
        airport={airport}
        search={search}
      />
    </div>
  );
};

export default FlgRoResultDom;
