import React from "react";
import { Col, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const AirlinesListBox = ({ airline }) => {
  return (
    <>
      <div className="flglistfilter-sort list-fmb-2">
        <Row className="align-items-center">
          <Col xs={7}>
            <span className="itinerary-badge">
              <img src="/images/flight-takeoff.png" /> List of All Airlines
            </span>
          </Col>
          <Col xs={5}>
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
                    <Icon icon="icons8:alphabetical-sorting" /> Alphabetical
                    Asc. (A → Z)
                  </Dropdown.Item>
                  <Dropdown.Item as={"button"} className={""}>
                    <Icon icon="icons8:alphabetical-sorting-2" /> Alphabetical
                    Dsc. (Z → A){" "}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>

      <section className="airlines-grid spcmb-60">
        <Row>
          {airline.map((item, inde) => {
            return (
              <Col xs={12} sm={6} lg={4} xl={3} className="col-grid" key={inde}>
                <div className="flg-airline-card tracking-wide">
                  <span className="topline"></span>
                  <div className="wrap-inner text-center">
                    <div className="fbkconf-flg-name">
                      <div className="mb-3">
                        {" "}
                        <img
                          src={`/images/airline-logo/${item.iataCode}.png`}
                          alt={item.heading}
                          className="airline-pic"
                        />
                      </div>
                      <div className="pl">
                        <h6>{item.heading}</h6>
                      </div>
                    </div>

                    <div className="taxfees">
                      Airline Code{" "}
                      <Icon
                        icon="cil:arrow-right"
                        color="#DC391B"
                        className="mx-2"
                      />{" "}
                      <b>{item.iataCode}</b>
                    </div>

                    <hr className="hr-airline" />

                    <Link href={`/airlines/${item.url}`}>
                      <a className="btn btn-site ripple-wv">
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
          {/* <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/I5.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/CM.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/DL.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/EK.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>
                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/QK.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/6E.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/UK.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/SY.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/UA.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/SG.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/TK.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3} className="col-grid">
            <div className="flg-airline-card tracking-wide">
              <span className="topline"></span>
              <div className="wrap-inner text-center">
                <div className="fbkconf-flg-name">
                  <div className="mb-3">
                    {" "}
                    <img src="/images/airline-logo/TK.png" />
                  </div>
                  <div className="pl">
                    <h6>Akasa Air</h6>
                  </div>
                </div>

                <div className="taxfees">
                  Airline Code <Icon icon="cil:arrow-right" color="#DC391B" />{" "}
                  <b>AA</b>
                </div>

                <hr className="hr-airline" />

                <Link href="/airlines/american-airlines-aa">
                  <a className="btn btn-site ripple-wv">
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col> */}
        </Row>
      </section>
    </>
  );
};

export default AirlinesListBox;
