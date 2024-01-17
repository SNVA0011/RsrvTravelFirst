import React from "react";
import FlgRoResult from "./FlgRoResult";
import RoundFilter from "./RoundFilter";
import { Col, Row } from "react-bootstrap";
import FlgRoResultDom from "./FlgRoResultDom";
import { useReducer } from "react";
// import { Roundreducer } from "../../utils/roundFilter";

const RoundResult = ({ flightResponse, search }) => {
  const [filterData, setFilterData] = useReducer(Roundreducer, flightResponse);

  return (
    <Row className="rowflight-g-3">
      <Col xs={12} xl={3}>
        {/*
         <RoundFilter
          flightResponse={flightResponse}
          search={search}
          waytrip={
            search.intl === false || search.intl === "false"
              ? "round-dom"
              : "round-int"
          }
          setFilterData={setFilterData}
        /> 
        */}
      </Col>

      <Col xs={12} xl={9}>
        {search.intl === false || search.intl === "false" ? (
          <>
            <FlgRoResultDom
              flightResponse={filterData}
              search={search}
              setFilterData={setFilterData}
            />
          </>
        ) : (
          <>
            <FlgRoResult
              flightResponse={filterData}
              search={search}
              setFilterData={setFilterData}
            />
          </>
        )}
        {/* <FlgRoResult
          flightResponse={filterData}
          search={search}
          setFilterData={setFilterData}
        /> */}
      </Col>
    </Row>
  );
};

export default RoundResult;
