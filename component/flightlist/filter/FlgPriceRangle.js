import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "@mui/material/Slider";
import { Icon } from "@iconify/react";
import { mostused } from "../../../utils/staticCurrency";
const FlgPriceRangle = ({
  title,
  startRange,
  endRange,
  step,
  currency,
  value,
  handleChange,
}) => {
  const currencyLogo = mostused.find((item) => item.value === currency).icon;
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
              valueLabelDisplay="auto"
            />

            <Row className="muslide-price">
              <Col xs={6}>
                {currency === "AED" ? (
                  <span style={{ fontSize: "12px" }}>AED </span>
                ) : (
                  <Icon icon={currencyLogo} className="lsc-currency ms-0" />
                )}

                {value[0]}
              </Col>
              <Col xs={6} className="text-right">
                {currency === "AED" ? (
                  <span style={{ fontSize: "12px" }}>AED </span>
                ) : (
                  <Icon icon={currencyLogo} className="lsc-currency ms-0" />
                )}
                {value[1]}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FlgPriceRangle;
