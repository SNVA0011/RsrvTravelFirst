import React from "react";
import FlgSummaryfl from "../checkout/FlgSummaryfl";

const FlightSummary = ({ filghtData }) => {
  return (
    <section className="fbkconf-summary spcmt-60">
      <h3 className="travel-dbk-heading">Flight Summary</h3>
      <div className="review-onewaypopup">
        <FlgSummaryfl singleFlight={filghtData.flightDetail.outBound} />{" "}
      </div>
      {filghtData.flightDetail.inBound.length > 0 && (
        <>
          <h4 className="routechk-heading mb-5">
            <hr></hr>
            <div className="icvfaresub">
              <span>Return</span>
            </div>
          </h4>
          <div className="review-onewaypopup">
            <FlgSummaryfl singleFlight={filghtData.flightDetail.inBound} />{" "}
          </div>
        </>
      )}
    </section>
  );
};

export default FlightSummary;
