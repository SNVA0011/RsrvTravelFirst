import React, { useReducer } from "react";
import { Col, Row } from "react-bootstrap";
import FlgModFilter from "./FlgModFilter";
import FlgModResult from "./FlgModResult";
import { reducer } from "../../utils/flightListingFilter";

const Result = ({ flightResponse, search }) => {
  const [filter, dispatchFilter] = useReducer(reducer, flightResponse);

  return (
    <Row className="rowflight-g-3">
      <Col xs={12} xl={3}>
        <FlgModFilter
          flightResponse={flightResponse}
          dispatchFilter={dispatchFilter}
          search={search}
        />
      </Col>

      <Col xs={12} xl={9}>
        <FlgModResult
          flightResponse={filter}
          dispatchFilter={dispatchFilter}
          search={search}
        />
      </Col>
    </Row>
  );
};

export default Result;
