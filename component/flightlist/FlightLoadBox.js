import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { BrandLogo } from "../../utils/static";

const FlightLoadBox = ({ search }) => {
  return (
    <div className="flight-loaderr wf-100">
      <div className="container">
        <div className="loader-bgb d-flex align-ites-center flex-column justify-content-end">
             <img
                src="/images/loader-plane-flight.gif"
                className="loader-pic"
              />
        </div>
        <h5>Please Wait...</h5>

        <h4>
          <div className="title d-inline-block">
            {search.originAirport} <Icon icon="tdesign:swap" className="swap" />{" "}
            {search.destinationAirport}
          </div>
        </h4>

        <h6>
          {moment(search.fromDate).format("DD MMM, YYYY")}

          {search.toDate && (
            <>
              <Icon
                icon="ph:arrow-right-thin"
                color="#DC391B"
                className="thin"
              />{" "}
              {moment(search.toDate).format("DD MMM, YYYY")}
            </>
          )}
        </h6>
        <p>
          We Are Searching for the best Flights,<br></br> The Best Fares For You
        </p>
        <div className={`mainLogoArea`}>
          <Image
            src={BrandLogo.imgPath}
            alt={BrandLogo.imgAlt}
            width={146}
            height={30}
          />
        </div>

      </div>
    </div>
  );
};

export default FlightLoadBox;
