import React from "react";
import CheckoutAccordian from "./CheckoutAccordian";
import AirportData from "../../component/staticJson/AirportData.json";

const SignificantInfo = ({ singleFlight }) => {
  const outBound = singleFlight.currentFlight.outBound;
  const fromAirportOutBound = outBound[0].fromAirport;
  const toAirportOutBound = outBound[outBound.length - 1].toAirport;
  const fromAirportDetails = AirportData.find(
    (item) => item.airportCode === fromAirportOutBound
  );
  const toAirportDetails = AirportData.find(
    (item) => item.airportCode === toAirportOutBound
  );
  return (
    <div className="mbchk-30">
      <CheckoutAccordian
        collapse={false}
        title="Significant Information "
        theme={{ color: "lgcadet pb-sck", icon: "ic:round-label-important" }}
        visibleContent={
          <div className="gdto-know">
            <div className="spcbody-20 pbm">
              <div className="chkfont-style">
                <h4>You must be aware of the following guidelines:</h4>
                <ul>
                  <li>
                    Your selected flight from {fromAirportDetails.airportName}(
                    {fromAirportDetails.airportCode}) to &nbsp;
                    {toAirportDetails.airportName}(
                    {toAirportDetails.airportCode}) is Arriving
                  </li>
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
                    You are requested to check the baggage policy. Your selected
                    flights, say your departure destination, and the arrival
                    destination has the hand baggage only fare. And the check-in
                    baggage might be needed to purchase separately along with
                    your flight booking.
                  </li>
                  <li>
                    Airline Guidelines: Please check airline-specific guidelines
                    before booking. Individual airlines may have different visa
                    & entry regulation criteria.
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

export default SignificantInfo;
