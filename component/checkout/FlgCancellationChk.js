import React from "react";
import CheckoutAccordian from "./CheckoutAccordian";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import moment from "moment";

const FlgCancellationChk = ({ singleFlight }) => {
  const outBound = singleFlight.currentFlight.outBound;
  const depDate = outBound[0].depDate;
  return (
    <div className="mbchk-30">
      <CheckoutAccordian
        collapse={false}
        title="Cancellation"
        theme={{ color: "lgred", icon: "iconamoon:shield-yes-fill" }}
        visibleContent={
          <>
            <div className="flgchk-zerocancel spcbody-20">
              <div className="chkfont-style">
                <h4>Zero cancellation</h4>
                <p>Save big on cancellation charges</p>
              </div>
            </div>
          </>
        }
        hiddenContent={
          <div className="flgchk-refundcancel">
            <hr className="sepr-hrprice bw-2"></hr>
            <div className="spcbody-20">
              <Row>
                <Col xs={12} md={4}>
                  <div className="chkfont-style">
                    <h5 className="d-flex">
                      <div className="flex-grow-1">
                        Refund with zero cancellation
                      </div>
                      <div>
                        <span className="badge site bdg-green">
                          {singleFlight.currencyCode} 3500
                        </span>
                      </div>
                    </h5>
                    <p>
                      If you cancel before{" "}
                      {moment(depDate).format("DD MMM, YYYY")}, you get upto{" "}
                      {singleFlight.currencyCode}
                      3500 refund.
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={4} className="mt-4 mt-md-0">
                  <div className="chkfont-style">
                    <h5 className="d-flex">
                      <div className="flex-grow-1">
                        Refund without zero cancellation
                      </div>
                      <div>
                        {" "}
                        <span className="badge site bdg-orange">
                          {singleFlight.currencyCode} 0
                        </span>
                      </div>
                    </h5>
                    <p>
                      If you cancel before{" "}
                      {moment(depDate).format("DD MMM, YYYY")}, you get full{" "}
                      {singleFlight.currencyCode} 0 refund.
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={4} className="mt-4 mt-md-0">
                  <div className="checkbox-custom-site chkfont-style">
                    <label className="checkbox buyfor d-flex">
                      <div>
                        <input type="checkbox" value="" />
                        <span className="checkbox-material">
                          <span className="check"></span>
                        </span>{" "}
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="m-0">
                          Buy for {singleFlight.currencyCode} 1200
                        </h5>
                      </div>
                    </label>
                  </div>

                  <Link href={"/terms"}>
                    <a className="terms-conditions-link" target="_blank">
                      Terms & Conditions
                    </a>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default FlgCancellationChk;
