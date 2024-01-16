import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Icon } from "@iconify/react";
import CustomTabPanel from "./CustomTabPanel";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const FlightsTwowayRoutes = ({ subtitle, titleOne, titleTwo, desitnation }) => {
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
          <Col xs={12} xl={6}>
            <div className="section-heading mb-4">
              <p className="ahsub">{subtitle}</p>
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
                  icon={<Icon icon="clarity:airplane-line" />}
                  label={<span className="txt">Domestic</span>}
                  value={0}
                />
                <Tab
                  icon={<Icon icon="ph:globe-thin" />}
                  label={<span className="txt">International</span>}
                  value={1}
                />
              </Tabs>

              <CustomTabPanel value={value} index={0}>
                <ul className="row">
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Bangkok Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Surat Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Nagpur Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Jeddah Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Abu Dhabi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Indore Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Kathmandu Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Frankfurt Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Vijayawada Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Raipur Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-surat">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa To Chandigarh Flights
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

              <CustomTabPanel value={value} index={1}>
                <ul className="row">
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to Las Vegas Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to Los Angeles Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to New York Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to London Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to Chicago Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to Memphis Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to New Orleans Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to Chicago Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to Philadelphia Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to Phoenix Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/goa-to-las-vegas">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />{" "}
                        Goa to Pittsburgh Flights
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
          </Col>

          <Col xs={12} xl={6} className="mt-5 mt-xl-0 pt-2 pt-xl-0">
            <div className="section-heading mb-4">
              <p className="ahsub">{subtitle}</p>
              <h3 className="fw-bold">
                <span className="d-inline-block me-3">
                  {" "}
                  {valueInt == 2 ? titleTwo[1] : titleTwo[0]}
                </span>

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
                  icon={<Icon icon="clarity:airplane-line" />}
                  label={<span className="txt">Domestic</span>}
                  value={0}
                />
                <Tab
                  icon={<Icon icon="ph:globe-thin" />}
                  label={<span className="txt">International</span>}
                  value={1}
                />
                <Tab
                  icon={<Icon icon="tdesign:swap" />}
                  label={<span className="txt">From</span>}
                  value={2}
                />
              </Tabs>

              <CustomTabPanel value={valueInt} index={0}>
                <ul className="row">
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Bangkok to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Surat to Miami Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Nagpur to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        New Delhi to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Jammu to Miami Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Indore to Miami Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Kathmandu to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Frankfurt to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Vijayawada to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Raipur to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Chandigarh to Miami Flights
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
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Bangkok to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Surat to Miami Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Nagpur to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        New Delhi to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Jammu to Miami Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Indore to Miami Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Kathmandu to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Frankfurt to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Vijayawada to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Raipur to Miami Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/indore-to-miami">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Chandigarh to Miami Flights
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
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Albuquerque Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Amsterdam Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Antigua Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Atlanta Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Aruba Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Austin Flights
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Asheville
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Anguilla Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Barranquilla Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Barcelona Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/miami-to-atlanta">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#0d6efd"
                        />
                        Miami to Los Angeles Flights
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
          </Col>
        </Row>
      </section>
    </>
  );
};

export default FlightsTwowayRoutes;
