import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import moment from "moment";
import Alert from "@mui/material/Alert";
import Image from "next/image";

export default function DateRange({
  className,
  icon,
  tripType,
  startDate,
  endDate,
  serachDataDispatch,
  setCalpress,
  openCalender,
  setActive,
}) {
  const handleCal = () => {
    setCalpress(false);
    setActive("DEP");
  };

  const handleRound = () => {
    serachDataDispatch({
      type: "tripType",
      payload: "2",
      toDate: "",
    });
 
    setCalpress(true);
    setActive("ret");
  };
  return (
    <InputGroup
      className={`engineexp-text ${className}`}
      onClick={openCalender}
    >
      <div className="w-100">
        <Row className="mx-0">
          <Col
            xs={12}
            sm={6}
            className={`m-0 p-0 d-flex datearv-0`}
            onClick={() =>
              tripType === "2" ? handleCal() : setCalpress(false)
            }
          >
            <Form.Label>Departure</Form.Label>
            <InputGroup.Text>
              <Image width={18} height={18} src={`/images/${icon}`} alt="Departure" />
            </InputGroup.Text>
            <Form.Control
              value={moment(startDate).format("DD MMM, YYYY")}
              readOnly={true}
              aria-labelledby="Departure"
            />
          </Col>
          <Col
            xs={12}
            sm={6}
            className={`m-0 p-0 d-flex datearv-1`}
            onClick={() => handleRound()}
          >
            <Form.Label>Return</Form.Label>
            <InputGroup.Text>
              <Image width={18} height={18} src={`/images/${icon}`}  alt="Return" />
            </InputGroup.Text>

            {tripType === "1" ? (
              <Form.Control
                value={"Click to add"}
                readOnly={true}
                disabled={true}
                className="returnby-dt"
              />
            ) : (
              <Form.Control
                value={
                  endDate === "" ? "" : moment(endDate).format("DD MMM, YYYY")
                }
                readOnly={true}
                aria-labelledby="Return"
              />
            )}
          </Col>
          {tripType === "2" && endDate === "" ? (
            <Alert variant="filled" severity="error" className="both-fielderr">
              Selected return date
            </Alert>
          ) : (
            ""
          )}
        </Row>
      </div>
    </InputGroup>
  );
}
