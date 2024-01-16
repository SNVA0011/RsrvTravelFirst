import React from "react";
import CheckoutAccordian from "./CheckoutAccordian";

const GoodToKnow = ({ singleFlight }) => {
  const outBound = singleFlight.currentFlight.outBound;
  const fromAirportOutBound = outBound[0].fromAirport;
  const toAirportOutBound = outBound[outBound.length - 1].toAirport;

  return (
    <div className="mbchk-30">
      <CheckoutAccordian
        collapse={false}
        title="Good To know"
        theme={{ color: "lggreen pb-sck", icon: "oi:thumb-up" }}
        visibleContent={
          <div className="gdto-know">
            <div className="spcbody-20 pbm">
              <div className="chkfont-style">
                <h4>Information you should know</h4>
                <ul>
                  <li>Face Mask are compulsory.</li>
                </ul>
              </div>
            </div>
          </div>
        }
        hiddenContent={
          <div className="gdto-know">
            <div className="chkfont-style rpt">
              <div className="chkfont-style spcbody-20 pt-0">
                <ul>
                  <li>
                    The airline Cancellation Fee is upto 3500 INR Per Passenger
                    for the selected flight route {fromAirportOutBound} to{" "}
                    {toAirportOutBound}.
                  </li>
                  <li>
                    Certify your health status through the Aarogya Setu App or
                    the self-declaration form at the airport.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default GoodToKnow;
