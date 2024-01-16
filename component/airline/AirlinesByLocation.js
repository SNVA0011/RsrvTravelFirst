import React from "react";
import AirlineRouteRow from "./AirlineRouteRow";
import { Row, Col, Dropdown } from "react-bootstrap";
import FlgShowmore from "../flightlist/filter/FlgShowmore";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel from "./CustomTabPanel";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const AirlinesByLocation = ({
  title,
  tabshow,
  tabdefault,
  flightschedule,
  triptype,
  airlineImg,
}) => {
  const [value, setValue] = useState(tabdefault);
  const FlightWay = value == 0 ? "Domestic" : "International";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="flg-list-row airline spcmb-60 e">
      <div className="section-heading mb-3 mb-md-0">
        <Row className="align-items-end">
          <Col xs={12} md={8}>
            <p className="ahsub">Flight Booking Routes</p>

            {flightschedule ? (
              <h3 className="route-hpop fw-bold mt-0">
                {tabshow.domestic == false || tabshow.international == false
                  ? null
                  : FlightWay}{" "}
                {triptype} {title}
              </h3>
            ) : (
              <h3 className="route-hpop fw-bold mt-0">
                {title} Popular {FlightWay} Routes
              </h3>
            )}
          </Col>
          <Col xs={12} md={4}>
            <h6 className="totalairline-num mb-0">
              {" "}
              <Icon icon="formkit:list" className="shw-ao" /> Showing
              <b className="text-dark"> {value == 0 ? "8" : "10"} </b>
              <br></br>
              Starting at Just
              <span> {value == 0 ? "$ 334" : "$ 655"}</span>
            </h6>
          </Col>
        </Row>
      </div>

      <hr className="hr-airline-als d-none d-md-block"></hr>

      <div className="findoth-tabs gs-3">
        <div className="findoth-route">
          {tabshow.domestic == false ||
            tabshow.international == false ? null : (
            <div className="findoth-hg mb-3">
              <Row className="align-items-center">
                <Col md={8}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="scrollable auto tabs example"
                    sx={{ borderBottom: "solid 1px #eceef1" }}
                  >
                    {tabshow.domestic && (
                      <Tab
                        icon={<Icon icon="clarity:airplane-line" />}
                        label={<span className="txt">Domestic</span>}
                        value={0}
                      />
                    )}
                    {tabshow.international && (
                      <Tab
                        icon={<Icon icon="ph:globe-thin" />}
                        label={<span className="txt">International</span>}
                        value={1}
                      />
                    )}
                  </Tabs>
                </Col>
                <Col md={4} className="d-none d-md-block">
                  <div className="sort-right airflg-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Sort by{" "}
                        <span className="sortBy-ar"> 
                          <img
                            src="/images/clstrv-arrow.png"
                            height={15}
                            width={15}
                            alt="arrow"
                          />
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item as={"button"} className={"active"}>
                          <Icon icon="bi:sort-up" /> Price : High to Low
                        </Dropdown.Item>
                        <Dropdown.Item as={"button"} className={""}>
                          <Icon icon="bi:sort-down" /> Price : Low to High{" "}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
            </div>
          )}

          {tabshow.domestic && (
            <CustomTabPanel value={value} index={0}>
              <Row className="g-md-3 g-xl-4">
                {Array(6)
                  .fill(0)
                  .map((item, index) => {
                    return (
                      <Col
                        xs={12}
                        md={6}
                        xl={4}
                        className="column-route"
                        key={index}
                      >
                        <AirlineRouteRow
                          key={index}
                          title={title}
                          data={{
                            airlineurl: airlineImg,
                            from: {
                              code: "BOM",
                              name: "Mumbai",
                            },
                            to: {
                              code: "DEL",
                              name: "Delhi",
                            },
                            time: "01h 05m",
                            price: "$ 448",
                          }}
                        />
                      </Col>
                    );
                  })}

                <Col xs={12} className="text-center">
                  <FlgShowmore text={`View More Results`} />
                </Col>
              </Row>
            </CustomTabPanel>
          )}

          {tabshow.international && (
            <CustomTabPanel value={value} index={1}>
              <Row className="g-md-3 g-xl-4">
                {Array(6)
                  .fill(0)
                  .map((item, index) => {
                    return (
                      <Col
                        xs={12}
                        md={6}
                        xl={4}
                        className="column-route"
                        key={index}
                      >
                        <AirlineRouteRow
                          key={index}
                          title={title}
                          data={{
                            airlineurl: airlineImg,
                            from: {
                              code: "DXB",
                              name: "Dubai",
                            },
                            to: {
                              code: "DEL",
                              name: "Delhi",
                            },
                            time: "02h 10m",
                            price: "$ 3238",
                          }}
                        />
                      </Col>
                    );
                  })}

                <Col xs={12} className="text-center">
                  <FlgShowmore text={`View More Results`} />
                </Col>
              </Row>
            </CustomTabPanel>
          )}
        </div>
      </div>
    </section>
  );
};

export default AirlinesByLocation;
