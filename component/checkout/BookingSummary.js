import React from "react";
import { Icon } from "@iconify/react";
import { totalTravelTime } from "../../utils/dateCal";
import AirportData from "../../component/staticJson/AirportData.json";
import { findtravelClass, stop } from "../../utils/static";


const BookingSummary = ({ singleFlight }) => {
  const outBound = singleFlight.currentFlight.outBound;
  const inBound = singleFlight.currentFlight.inBound;
  const airlineNameoutBound = outBound[0].airlineName;
  const airlinecodeoutBound = outBound[0].airline;
  const flightNooutBound = outBound[0].flightNo;
  const fromAirportOutBound = outBound[0].fromAirport;
  const toAirportOutBound = outBound[outBound.length - 1].toAirport;
  const cabinClassOutBound = outBound[0].cabinClass;
  const depDateOutBound = outBound[0].depDate;
  const reachDateOutBound = outBound[outBound.length - 1].reachDate;
  const totaltravelOutBound = outBound[0].eft;
  const airlineNameinBound = inBound[0]?.airlineName;
  const airlinecodeinBound = inBound[0]?.airline;
  const flightNoinBound = inBound[0]?.flightNo;
  const fromAirportinBound = inBound[0]?.fromAirport;
  const toAirportinBound = inBound[inBound.length - 1]?.toAirport;
  const cabinClassinBound = inBound[0]?.cabinClass;
  const depDateinBound = inBound[0]?.depDate;
  const reachDateinBound = inBound[inBound.length - 1]?.reachDate;
  const totaltravelinBound = inBound[0]?.eft;
  const fromAirportDetails = AirportData.find(
    (item) => item.airportCode === fromAirportOutBound
  );
  const toAirportDetails = AirportData.find(
    (item) => item.airportCode === toAirportOutBound
  );

  return (
    <div className="price-review dt-2 border-0 mbchk-20">
      <div className="d-none d-lg-block">
        <h4>
          <Icon
            icon="material-symbols-light:airplane-ticket-outline"
            className="fltic-icon"
          />{" "}
          Booking Summary
        </h4>
        <hr className="sepr-hrprice"></hr>
      </div>
      <div className="flighteng-mobile">
        {singleFlight.currentFlight.outBound.length > 0 && (
          <div className="collapse-clp lgblue shadow-0">
            <div className="flgchk-details spcbody-20 p-0">
              <div className="icvfaresub sumr"><span>Departure</span></div>
              <h4 className="routechk-heading depr-sumr">
                {fromAirportDetails.cityName}{" "}
                <img src="/images/route-lineplane.png" />{" "}
                {toAirportDetails.cityName}
              </h4>

              <div className="d-flex align-items-center mb-sltd-bot">
                <div>
                  <img
                    src={`/images/airline-logo/${airlinecodeoutBound}.png`}
                    alt="Airline"
                    className="airline-pic"
                  />
                </div>
                <div className="airline-title mb-0">{airlineNameoutBound}</div>
                <div className="text-right ps-2">
                  <div className="price-nk-d text-nowrap">
                    {airlinecodeoutBound} | {flightNooutBound}
                  </div>
                </div>
              </div>

              <div className="title d-inline-flex routechk-heading">
                <div>
                  {" "}
                  <b>{fromAirportOutBound}</b>{" "}
                  <span className="mx-1 opc-30">|</span>{" "}
                  <span className="text-dark fw-semibold">
                    {depDateOutBound.split("T")[1].substring(0, 5)}
                  </span>
                </div>
                <div>
                  <img src="/images/route-lineplane.png" className="mx-3" />
                </div>
                <div>
                  {" "}
                  <b>{toAirportOutBound}</b>{" "}
                  <span className="mx-1 opc-30">|</span>{" "}
                  <span className="text-dark fw-semibold">
                    {reachDateOutBound.split("T")[1].substring(0, 5)}
                  </span>
                </div>
              </div>

              <ul>
                <li className="mb-1">
                  {stop.find((stops) => stops.value === outBound.length).title}
                  <Icon icon="lucide:dot" className="mx-1" />
                  {totalTravelTime(totaltravelOutBound)}
                  <Icon icon="lucide:dot" className="mx-1" />
                  {findtravelClass(cabinClassOutBound)?.name}
                </li>
                <li className="mb-1">
                  {new Date(depDateOutBound).toDateString().replace(" ", ", ")}
                </li>
              </ul>
            </div>
          </div>
        )}
        {singleFlight.currentFlight.inBound.length > 0 && (
          <div className="collapse-clp lgblue shadow-0">
          <div className="flgchk-details spcbody-20 p-0">
              <hr className="sepr-hrprice my-3 d-block"></hr>
              <div className="icvfaresub sumr"><span>Return</span></div>
              <h4 className="routechk-heading depr-sumr">
                {toAirportDetails.cityName}{" "}
                <img src="/images/route-lineplane.png" />{" "}
                {fromAirportDetails.cityName}
              </h4>
              <div className="d-flex align-items-center mb-sltd-bot">
                <div>
                  <img
                    src={`/images/airline-logo/${airlinecodeinBound}.png`}
                    alt="Airline"
                    className="airline-pic"
                  />
                </div>
                <div className="airline-title mb-0">{airlineNameinBound}</div>
                <div className="text-right ps-2">
                  <div className="price-nk-d text-nowrap">
                    {airlinecodeinBound} | {flightNoinBound}
                  </div>
                </div>
              </div>

              <div className="title d-inline-flex routechk-heading">
                <div>
                  {" "}
                  <b>{fromAirportinBound}</b>{" "}
                  <span className="mx-1 opc-30">|</span>{" "}
                  <span className="text-dark fw-semibold">
                    {" "}
                    {depDateinBound.split("T")[1].substring(0, 5)}
                  </span>
                </div>
                <div>
                  <img src="/images/route-lineplane.png" className="mx-3" />
                </div>
                <div>
                  {" "}
                  <b>{toAirportinBound}</b> <span className="mx-1 opc-30">|</span>{" "}
                  <span className="text-dark fw-semibold">
                    {" "}
                    {reachDateinBound.split("T")[1].substring(0, 5)}
                  </span>
                </div>
              </div>

              <ul>
                <li className="mb-1">
                  {stop.find((stops) => stops.value === inBound.length).title}
                  <Icon icon="lucide:dot" className="mx-1" />
                  {totalTravelTime(totaltravelinBound)}
                  <Icon icon="lucide:dot" className="mx-1" />
                  {findtravelClass(cabinClassinBound)?.name}
                </li>
                <li className="mb-1">
                  {new Date(depDateinBound).toDateString().replace(" ", ", ")}
                </li>
              </ul>
            </div>

          </div>
        )}
      </div>
      <hr className="sepr-hrprice"></hr>

      <p className="mt-3 d-flex align-items-center position-relative">
        <img src="/images/traveler-chk.png" className="trv-emoji" />

        <div className="flex-grow-1 ps-2 trv-hn">
          <b className="badge">
            {singleFlight.adultsCount +
              singleFlight.childrenCount +
              singleFlight.infantsCount}
          </b>{" "}
          Traveller
        </div>
      </p>
    </div>
  );
};

export default BookingSummary;
