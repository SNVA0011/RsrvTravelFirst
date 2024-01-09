import React from "react";
import { Icon } from "@iconify/react";
import { Col, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { travelClass } from "../../utils/static";
import Image from "next/image";

const Traveller = ({ serachDataDispatch, serachData }) => {
  const totalTraveller =
    serachData.adult + serachData.child + serachData.infant;
  return (
    <>
      <header>Traveler(s)</header>
      <div className="inner trv">
        <div className="addor-remove-traveller">
          <Row className="align-items-center travmenu">
            <Col xs={6}>

              <div className="d-flex">
                <div className="me-2">
                  <Image width={20} height={20} alt="Adult" src="/images/trav-icon-1.png" />
                </div>
                <div className="flex-grow-1">
                  <h6>Adult</h6>
                  <p>(12 + Years)</p>
                </div>
              </div>

            </Col>


            <Col xs={6} className="text-right">
              <div className="d-inline-flex align-items-center">
                <Icon
                  icon="solar:minus-square-linear"
                  onClick={() =>
                    serachData.adult > 1
                      ? serachDataDispatch({ type: "Adults-" })
                      : null
                  }
                  className={serachData.adult > 1 ? "" : "disabled"}
                />
                <div className="text-middle"> {serachData.adult}</div>
                <Icon
                  icon="solar:add-square-linear"
                  onClick={() =>
                    totalTraveller < 9
                      ? serachDataDispatch({ type: "Adults" })
                      : null
                  }
                  className={totalTraveller < 9 ? "" : "disabled"}
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className="addor-remove-traveller">
          <Row className="align-items-center travmenu">
            <Col xs={6}>
              <div className="d-flex">
                <div className="me-2">
                  <Image width={20} height={20} alt="Children" src="/images/trav-icon-2.png" />
                </div>
                <div className="flex-grow-1">
                  <h6>Children</h6>
                  <p>(2-12 Years)</p>
                </div>
              </div>

            </Col>
            <Col xs={6} className="text-right">
              <div className="d-inline-flex align-items-center">
                <Icon
                  icon="solar:minus-square-linear"
                  onClick={() =>
                    serachData.child > 0
                      ? serachDataDispatch({ type: "Child-" })
                      : null
                  }
                  className={serachData.child > 0 ? "" : "disabled"}
                />
                <div className="text-middle"> {serachData.child}</div>
                <Icon
                  icon="solar:add-square-linear"
                  onClick={() =>
                    totalTraveller < 9
                      ? serachDataDispatch({ type: "Child" })
                      : null
                  }
                  className={totalTraveller < 9 ? "" : "disabled"}
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className="addor-remove-traveller">
          <Row className="align-items-center travmenu">
            <Col xs={6}>

              <div className="d-flex">
                <div className="me-2">
                  <Image width={20} height={20} alt="Infant" src="/images/trav-icon-3.png" />
                </div>
                <div className="flex-grow-1">
                  <h6>Infant</h6>
                  <p>(0-2 Years)</p>
                </div>
              </div>
            </Col>
            <Col xs={6} className="text-right">
              <div className="d-inline-flex align-items-center">
                <Icon
                  icon="solar:minus-square-linear"
                  onClick={() =>
                    serachData.infant > 0
                      ? serachDataDispatch({ type: "Infants-" })
                      : null
                  }
                  className={serachData.infant > 0 ? "" : "disabled"}
                />
                <div className="text-middle">{serachData.infant}</div>
                <Icon
                  icon="solar:add-square-linear"
                  onClick={() =>
                    serachData.infant < serachData.adult && totalTraveller < 9
                      ? serachDataDispatch({ type: "Infants" })
                      : null
                  }
                  className={
                    serachData.infant < serachData.adult && totalTraveller < 9
                      ? ""
                      : "disabled"
                  }
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <header>Traveler’s Class</header>

      <div className="inner pb-0">
        <ul className="trvexp-radio">
          {travelClass.map((item) => (
            <li key={item.id}>
              <label
                className={`btn ${item.value === serachData.cabinClass ? "active" : ""
                  }`}
                onClick={() =>
                  serachDataDispatch({
                    type: "cabinClass",
                    payload: item.value,
                  })
                }
              >
                <span className="label" />
                <span className="radiocustom-text">{item.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-done-mladv"></hr>

      <div className="inner pt-0">
        <div className="text-center">
          <Dropdown.Item as="button" className="btn btn-site ripple-wv applyBtn">
            <span>Apply</span>
          </Dropdown.Item>
        </div>
      </div>
    </>
  );
};

export default Traveller;
