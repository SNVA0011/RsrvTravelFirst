import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Icon } from "@iconify/react";
import CustomTabPanel from "./CustomTabPanel";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const FlightsOnewayRoutes = ({ subtitle, titleOne, titleTwo, desitnation }) => {
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [valueInt, setValueInt] = useState(1);
  const handleChangeInt = (event, newValueInt) => {
    setValueInt(newValueInt);
  };

  return (
    <>
      <section className="findoth-route wf-100 spcmb-60">
        <Row>
          <Col xs={12} xl={6}>
            <div className="section-heading mb-4">
              <p className="ahsub op">{subtitle}</p>
              <h3 className="fw-bold">
                <span className="d-inline-block me-3">{titleOne}</span>
                <div className="fluent-inline">
                  <Icon icon="fluent:send-16-filled" color="#c5c8cb" />
                  <Icon icon="fluent:send-16-filled" color="#e1e5e9" />
                </div>
              </h3>
            </div>

            <div className="findoth-tabs">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="scrollable auto tabs example"
                sx={{ borderBottom: "solid 1px #eceef1" }}
              >
                <Tab
                  icon={<Icon icon="fluent:location-28-regular" />}
                  label={<span className="txt">Routes</span>}
                  value={1}
                />
                <Tab
                  icon={<Icon icon="fluent:star-48-regular" />}
                  label={<span className="txt">Popular Routes</span>}
                  value={2}
                />
              </Tabs>

              <CustomTabPanel value={value} index={1}>
                <ul className="row">
                  {desitnation.map((item) => (
                    <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                      <Link href={`/flight-schedule/${item.url}`}>
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
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Surat To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Nagpur To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Jeddah To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Abu Dhabi To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Indore To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Kathmandu To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Frankfurt To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Vijayawada To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Raipur To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Chandigarh To New Delhi Flights
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

              <CustomTabPanel value={value} index={2}>
                <ul className="row">
                  {desitnation
                    .slice(desitnation.length - 10, desitnation.length)
                    .map((item) => (
                      <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                        <Link href={`/flight-schedule/${item.url}`}>
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
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Bangkok To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Frankfurt To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Vijayawada To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Indore To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Jeddah To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Abu Dhabi To New Delhi Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Chandigarh To New Delhi Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Kathmandu To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Nagpur To New Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Raipur To New Delhi Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/surat-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Surat To New Delhi Flights
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

          {/* <Col xs={12} xl={6} className="mt-5 mt-xl-0 pt-2 pt-xl-0">
            <div className="section-heading mb-4">
              <p className="ahsub op">{subtitle}</p>
              <h3 className="fw-bold">
                <span className="d-inline-block me-3">{titleTwo}</span>
                <div className="fluent-inline">
                  <Icon icon="fluent:send-16-filled" color="#c5c8cb" />
                  <Icon icon="fluent:send-16-filled" color="#e1e5e9" />
                </div>
              </h3>
            </div>

            <div className="findoth-tabs">
              <Tabs
                value={valueInt}
                onChange={handleChangeInt}
                aria-label="scrollable auto tabs example"
                sx={{ borderBottom: "solid 1px #eceef1" }}
              >
                <Tab
                  icon={<Icon icon="fluent:location-28-regular" />}
                  label={<span className="txt">Routes</span>}
                  value={1}
                />
                <Tab
                  icon={<Icon icon="fluent:star-48-regular" />}
                  label={<span className="txt">Popular Routes</span>}
                  value={2}
                />
              </Tabs>

              <CustomTabPanel value={valueInt} index={1}>
                <ul className="row">
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        London to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Melbourne to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Toronto to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        New York to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        San Francisco to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Chicago to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Amsterdam to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Bangkok to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Abu Dhabi to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Coimbatore to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Paris to New Delhi Flights{" "}
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

              <CustomTabPanel value={valueInt} index={2}>
                <ul className="row">
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Toronto to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        New York to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        San Francisco to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Paris to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Chicago to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Amsterdam to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        London to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Melbourne to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Bangkok to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Abu Dhabi to New Delhi Flights{" "}
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/london-to-new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Coimbatore to New Delhi Flights{" "}
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

export default FlightsOnewayRoutes;
