import React from "react";
import CheckoutAccordian from "./CheckoutAccordian";
import FlgSummaryfl from "./FlgSummaryfl";
import AirportData from "../../component/staticJson/AirportData.json";

const FlightDtCheckout = ({ singleFlight }) => {
  const fromAirport = AirportData.find(
    (item) =>
      item.airportCode ===
      singleFlight.flights.currentFlight.outBound[0].fromAirport
  );
  const toAirport = AirportData.find(
    (item) =>
      item.airportCode ===
      singleFlight.flights.currentFlight.outBound[
        singleFlight.flights.currentFlight.outBound.length - 1
      ].toAirport
  );
  return (
    <div className="mbchk-30 flrow-review">
      <div className="review-onewaypopup">
        <div className="flg-list-row oneway">
          <CheckoutAccordian
            collapse={true}
            title="Flight Details"
            theme={{ color: "lgblue", icon: "mdi:flight" }}
            visibleContent={
              <div className="flgchk-details spcbody-20">
                <h4 className="routechk-heading">
                  <div className="icvfaresub">
                    <span>Departure</span>
                  </div>
                  {fromAirport.cityName}{" "}
                  <img src="/images/route-lineplane.png" /> {toAirport.cityName}
                </h4>
                <FlgSummaryfl
                  singleFlight={singleFlight.flights.currentFlight.outBound}
                />
              </div>
            }
            hiddenContent={
              singleFlight.flights.TripType === 2 ? (
                <div className="flgchk-details spcbody-20 pt-2">
                  <h4 className="routechk-heading">
                    <div className="icvfaresub">
                      <span>Return</span>
                    </div>
                    {toAirport.cityName}{" "}
                    <img src="/images/route-lineplane.png" />{" "}
                    {fromAirport.cityName}
                  </h4>
                  <FlgSummaryfl
                    singleFlight={singleFlight.flights.currentFlight.inBound}
                  />
                </div>
              ) : (
                ""
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FlightDtCheckout;
