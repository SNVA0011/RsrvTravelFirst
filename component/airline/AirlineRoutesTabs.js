import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Icon } from "@iconify/react";
import CustomTabPanel from "./CustomTabPanel";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const AirlineRoutesTabs = ({ airlineRouteresult }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [valueInt, setValueInt] = useState(0);
  const handleChangeInt = (event, newValueInt) => {
    setValueInt(newValueInt);
  };

  return (
    <>
      <section className="findoth-route wf-100 spcmb-60">
        <Row>
          <Col xs={12} lg={6}>
            <div className="section-heading mb-3">
              <p className="ahsub op">Top American Airlines Routes</p>
              <h3 className="fw-bold">American Airlines Domestic Routes</h3>
            </div>

            <div className="findoth-tabs gs-1">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="scrollable auto tabs example"
                sx={{ borderBottom: "solid 1px #eceef1" }}
              >
                <Tab
                  icon={<Icon icon="fluent:location-28-regular" />}
                  label={<span className="txt">Routes</span>}
                  value={0}
                />
                <Tab
                  icon={<Icon icon="fluent:star-48-regular" />}
                  label={<span className="txt">Popular Routes</span>}
                  value={1}
                />
              </Tabs>

              <CustomTabPanel value={value} index={0}>
                <ul className="row">
                  {airlineRouteresult.map((item, i) => (
                    <li className="col-12 col-md-6 col-lg-4 col-xl-6" key={i}>
                      <Link href={`/flight-booking/${item.url}`}>
                        <a>
                          <Icon
                            icon="material-symbols:arrow-right"
                            color="#0d6efd"
                          />
                          {item.heading}
                        </a>
                      </Link>
                    </li>
                  ))}
                  {/* <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/indigo-airlines-aa-newyork-nyc-to-miami-mia">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Bangalore Flights
                      </a>
                    </Link>
                  </li> */}

                  {/*  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Deoghar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Deoghar To Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Kolkata To Deoghar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Srinagar To Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Deoghar To Kolkata Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Kochi To Guwahati Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Ranchi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Darbhanga Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Bangalore To Bidar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Mumbai To Lucknow Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href={`javascript:void(0)`}>
                      <a className="more">
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#DC391B"
                        />{" "}
                        More <Icon icon="icon-park-outline:down" color="#DC391B" />
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <ul className="row">
                  {airlineRouteresult
                    .slice(
                      airlineRouteresult.length - 10,
                      airlineRouteresult.length
                    )
                    .map((item, ind) => (
                      <li
                        className="col-12 col-md-6 col-lg-4 col-xl-6"
                        key={ind}
                      >
                        <Link href={`/flight-booking/${item.url}`}>
                          <a>
                            <Icon
                              icon="material-symbols:arrow-right"
                              color="#0d6efd"
                            />
                            {item.heading}
                          </a>
                        </Link>
                      </li>
                    ))}

                  {/* <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Deoghar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Deoghar To Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Kolkata To Deoghar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Srinagar To Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Deoghar To Kolkata Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Kochi To Guwahati Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Ranchi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Darbhanga Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Bangalore To Bidar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Mumbai To Lucknow Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href={`javascript:void(0)`}>
                      <a className="more">
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#DC391B"
                        />{" "}
                        More <Icon icon="icon-park-outline:down" color="#DC391B" />
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </CustomTabPanel>
            </div>
          </Col>

          {/* <Col xs={12} lg={6} className="mt-5 mt-lg-0 pt-2 pt-lg-0">
            <div className="section-heading mb-3">
              <p className="ahsub op">Top American Airlines Routes</p>
              <h3 className="fw-bold">
                American Airlines International Routes
              </h3>
            </div>

            <div className="findoth-tabs gs-2">
              <Tabs
                value={valueInt}
                onChange={handleChangeInt}
                aria-label="scrollable auto tabs example"
                sx={{ borderBottom: "solid 1px #eceef1" }}
              >
                <Tab
                  icon={<Icon icon="fluent:location-28-regular" />}
                  label={<span className="txt">Routes</span>}
                  value={0}
                />
                <Tab
                  icon={<Icon icon="fluent:star-48-regular" />}
                  label={<span className="txt">Popular Routes</span>}
                  value={1}
                />
              </Tabs>

              <CustomTabPanel value={valueInt} index={0}>
                <ul className="row">
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Dubai Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Bangkok Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Mumbai To Dubai Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Kathmandu Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Kolkata To Bangkok Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Singapore Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Mumbai To Bangkok Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Chennai To Singapore Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Chennai To Colombo Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Kolkata To Dhaka Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Mumbai To Singapore Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href={`javascript:void(0)`}>
                      <a className="more">
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#DC391B"
                        />{" "}
                        More <Icon icon="icon-park-outline:down" color="#DC391B" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </CustomTabPanel>

              <CustomTabPanel value={valueInt} index={1}>
                <ul className="row">
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Dubai Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Bangkok Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Mumbai To Dubai Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Kathmandu Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Kolkata To Bangkok Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Delhi To Singapore Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Mumbai To Bangkok Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Chennai To Singapore Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Chennai To Colombo Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Kolkata To Dhaka Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-booking/american-airlines-delhi-to-kolkata-flights">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        American Airlines Mumbai To Singapore Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href={`javascript:void(0)`}>
                      <a className="more">
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#DC391B"
                        />{" "}
                        More <Icon icon="icon-park-outline:down" color="#DC391B" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </CustomTabPanel>
            </div>
          </Col> */}
        </Row>
      </section>
    </>
  );
};

export default AirlineRoutesTabs;
