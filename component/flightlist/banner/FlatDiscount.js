import Link from "next/link";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Countdown from "react-countdown";

const FlatDiscount = ({ title, subtitle, btn, terms }) => {
  return (
    <>
      <Link href="/">
        <a className="flatdisc-comfortable flashsanimated">
          <Row className="align-items-center">
            <Col xs={12} sm={4} className="flatdics-bx-1">
              <div
                style={{ backgroundImage: `url(/images/book-comfort.png)` }}
                className="bg-bck"
              ></div>
            </Col>
            <Col xs={12} sm className="flatdics-bx-2">
              <div className="d-flex stay-flx flex-column flex-sm-row">
                <div className="left flex-grow-1">
                  <h4>{title}</h4>
                  <span className="flat-off">{subtitle}</span>
                </div>

                <div className="right">
                  <button className="btn btn-site ripple-wv" type="button">
                    <span>{btn}</span>
                  </button>
                  <span className="terms">{terms}</span>
                </div>
              </div>
            </Col>
          </Row>
        </a>
      </Link>
    </>
  );
};

export default FlatDiscount;
