import { Slider } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { totalTravelTime } from "../../../utils/dateCal";

const DurationRange = ({
  title,
  startRange,
  endRange,
  step,
  value,
  handleChange,
}) => {
  return (
    <div className="ptmy-20">
      <Row className="align-items-center heading-row">
        <Col xs={12}>
          <h4>{title}</h4>

          <div className="muslide-md">
            <Slider
              value={value}
              step={step}
              min={startRange}
              max={endRange}
              onChange={handleChange}
            />

            <Row className="muslide-price">
              <Col xs={6}>
                <small className="mb-1 d-block">
                  {totalTravelTime(value[0])}
                </small>
              </Col>
              <Col xs={6} className="text-right">
                <small className="mb-1 d-block">
                  {totalTravelTime(value[1])}
                </small>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DurationRange;
