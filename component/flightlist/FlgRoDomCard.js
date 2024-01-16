import React from "react";
import { stop } from "../../utils/static";
import { totalTravelTime } from "../../utils/dateCal";
import moment from "moment";
import useWindowSize from "../../hooks/useWindowSize";
import { Icon } from "@iconify/react";
import { mostused } from "../../utils/staticCurrency";

const FlgRoDomCard = ({
  flight,
  airline,
  fare,
  totaltime,
  slectedData,
  index,
  active,
  setActive,
  setSlected,
  currencyCode,
}) => {
  const airlineCode = flight[0].airline;
  const length = flight.length;
  const airlineName = airline.find((item) => item.code === airlineCode).name;
  const flightNo = flight[0].flightNo;
  const fromAirport = flight[0].fromAirport;
  const toAirport = flight[length - 1].toAirport;
  const travelstart = moment(flight[0].depDate).format("ll");
  const travelend = moment(flight[length - 1].reachDate).format("ll");
  const timeStart = flight[0].depDate.split("T")[1].substring(0, 5);
  const timeEnd = flight[length - 1].reachDate.split("T")[1].substring(0, 5);
  const totalTime = totalTravelTime(totaltime);
  const size = useWindowSize();
  const totalFare = fare.adultFare + fare.adultTax;
  const CurrencyLogo = mostused.find(
    (item) => item.value === currencyCode
  ).icon;
  return (
    <div
      className={`flg-airline-card ${index === active ? `active` : ""}`}
      onClick={(event) => {
        setActive(index), setSlected([slectedData]);
      }}
    >
      <div className="wrap-inner">
        {size.width < 768 ? (
          <div className="head-oneway-mobile 2">
            <div className="d-flex align-items-center mb-sltd">
              <div>
                <img
                  src={`/images/airline-logo/${airlineCode}.png`}
                  alt="Airline"
                  className="airline-pic"
                />
              </div>
              <div className="airline-title mb-0 flex-grow-1 ps-2">
                {airlineCode} - {flightNo}
              </div>
              <div className="text-right ps-2">
                <div className="price-nk text-nowrap">
                  <strong>
                    {currencyCode === "AED" ? (
                      <span>AED </span>
                    ) : (
                      <Icon icon={CurrencyLogo} className="lsc-currency" />
                    )}
                    {Math.round(totalFare)}
                    
                  </strong>
                </div>
              </div>
            </div>

            <div className="d-flex fbkconf-flgname">
              <div className="arrw-sp-1 flex-grow-1">
                <div className="fbkconf-fromto align-items-center abs-1">
                  <div className="way-to d-flex align-items-center">
                    <div className="colway">
                      {timeStart}
                      <div className="way-tocode d-flex justify-content-between">
                        <span className="d-inline-block first">
                          {fromAirport}
                        </span>
                      </div>
                    </div>

                    <div className="flex-grow-1 text-center px-1">
                      <span className="stops d-block p-0">
                        <b>{totalTime}</b>
                      </span>
                      <div className="arrw-airline-bg custom">
                        <img src="/images/planegray-airline.png" />
                      </div>
                      <span className="stops d-block p-0">
                        <b>
                          {" "}
                          {stop.find((stops) => stops.value === length)?.title}
                        </b>
                      </span>
                    </div>

                    <div className="colway text-right">
                      {timeEnd}
                      <div className="way-tocode">
                        <span className="d-inline-block ml-auto">
                          {toAirport}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row-1 ssa row">
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="d-flex fbkconf-flg-name">
                    <div>
                      {" "}
                      <img
                        src={`/images/airline-logo/${airlineCode}.png`}
                        alt="Airline"
                      />
                    </div>
                    <div className="pl">
                      <h6>{airlineName}</h6>
                      <p>
                        {airlineCode} - {flightNo}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="taxfees-1 col-6 text-right">
                  <div className="taxfees">
                    <strong>
                      {currencyCode === "AED" ? (
                        <span>AED </span>
                      ) : (
                        <Icon icon={CurrencyLogo} className="lsc-currency" />
                      )}
                      {Math.round(totalFare)}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <hr className="hr-airline my-3" />
              <div className="d-flex flgairline-arrw">
                <div className="arrw-sp-1 flex-grow-1">
                  <div className="fbkconf-fromto align-items-center row g-3">
                    <div className="content col">
                      <h5>{timeStart}</h5>
                      <h4 className="countrycode">{fromAirport}</h4>
                      <p>{travelstart}</p>
                    </div>

                    <div className="center flex-grow-1 col">
                      <span>{totalTime}</span>
                      <div className="arrw-airline-bg custom my-1">
                        <img src="/images/planegray-airline.png" />
                      </div>
                      <span className="esstop">
                        {stop.find((stops) => stops.value === length)?.title}
                      </span>
                    </div>

                    <div className="content right col">
                      <h5>{timeEnd}</h5>
                      <h4 className="countrycode">{toAirport}</h4>
                      <p>{travelend}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlgRoDomCard;
