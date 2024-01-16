import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Icon } from "@iconify/react";
import CustomTabPanel from "./CustomTabPanel";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const DestRoutesTabs = ({ desitnation }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [valueInt, setValueInt] = useState(0);
  const handleChangeInt = (event, newValueInt) => {
    setValueInt(newValueInt);
  };
  const dest = desitnation.filter((item) => item.origingAirportCode === "");
  const destRoute = desitnation.filter(
    (item) => item.origingAirportCode !== ""
  );

  return (
    <>
      <section className="findoth-route wf-100 spcmb-60">
        <Row>
          <Col xs={12} xl={6}>
            <div className="section-heading mb-3">
              <p className="ahsub op">All Flights</p>
              <h3 className="fw-bold">Top Domestic Routes</h3>
            </div>

            <div className="findoth-tabs gs-4">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="scrollable auto tabs example"
                sx={{ borderBottom: "solid 1px #eceef1" }}
              >
                <Tab
                  icon={<Icon icon="clarity:airplane-line" />}
                  label={<span className="txt">Destinations</span>}
                  value={0}
                />
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
              <CustomTabPanel value={value} index={0}>
                <ul className="row">
                  {dest.map((item) => (
                    <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                      <Link href={`/flight-schedule/${item.url}`}>
                        <a>
                          <Icon
                            icon="material-symbols:arrow-right"
                            color="#a9bfdb"
                          />{" "}
                          {item.heading}
                        </a>
                      </Link>
                    </li>
                  ))}

                  {/* <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Mumbai
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Goa
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Hyderabad
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Chennai
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Shirdi
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Pune
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Kolkata
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Ahmedabad
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Shimla
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/new-delhi">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Bengaluru
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
                  {destRoute.map((items) => (
                    <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                      <Link href={`/flight-schedule/${items.url}`}>
                        <a>
                          <Icon
                            icon="material-symbols:arrow-right"
                            color="#a9bfdb"
                          />{" "}
                          {items.heading}
                        </a>
                      </Link>
                    </li>
                  ))}

                  {/* <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi To Deoghar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Deoghar To Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Kolkata To Deoghar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Srinagar To Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Deoghar To Kolkata Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Kochi To Guwahati Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi To Ranchi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi To Darbhanga Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Bangalore To Bidar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Mumbai To Lucknow Flights
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
                        <Link href="/flight-schedule/delhi-to-bangalore">
                          <a>
                            <Icon
                              icon="material-symbols:arrow-right"
                              color="#a9bfdb"
                            />{" "}
                            Delhi To Bangalore Flights
                          </a>
                        </Link>
                      </li>
                    ))}

                  {/* <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi To Deoghar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Deoghar To Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Kolkata To Deoghar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Srinagar To Delhi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Deoghar To Kolkata Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Kochi To Guwahati Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi To Ranchi Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi To Darbhanga Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Bangalore To Bidar Flights
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/delhi-to-bangalore">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Mumbai To Lucknow Flights
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
            <div className="section-heading mb-3">
              <p className="ahsub op">All Flights</p>
              <h3 className="fw-bold">Top International Routes</h3>
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
                  label={<span className="txt">Destinations</span>}
                  value={0}
                />
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
              <CustomTabPanel value={valueInt} index={0}>
                <ul className="row">
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to U.S. Virgin Islands
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Saskatoon
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Dominican Republic
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Belgium
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Venezuela
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Jamaica
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Europe
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Israel
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Vardø
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Australia
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/belgium">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Flights to Bangkok
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
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to London
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Mumbai to Colombo
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to Bangkok
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to Kathmandu
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Kolkata to Bangkok
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Kathmandu to Delhi
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Bangalore to Dubai
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Bangalore to Bangkok
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to New York
                      </a>
                    </Link>
                  </li>
                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to Hong Kong
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to Singapore
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
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Kolkata to Bangkok
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Bangalore to Dubai
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Bangalore to Bangkok
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to London
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Mumbai to Colombo
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to Hong Kong
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to Singapore
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to Kathmandu
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to Bangkok
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Delhi to New York
                      </a>
                    </Link>
                  </li>

                  <li className="col-12 col-md-6 col-lg-4 col-xl-6">
                    <Link href="/flight-schedule/kolkata-to-bangkok">
                      <a>
                        <Icon
                          icon="material-symbols:arrow-right"
                          color="#a9bfdb"
                        />{" "}
                        Kathmandu to Delhi
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

export default DestRoutesTabs;
