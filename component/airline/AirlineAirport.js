import React from "react";
import { Icon } from "@iconify/react";
import AirportData from "../../component/staticJson/AirportData.json";

const AirlineAirport = ({ airlineRouteDetailaResult }) => {
  const destination = AirportData.find(
    (item) =>
      item.airportCode === airlineRouteDetailaResult[0].destinationAirportCode
  );
  const origing = AirportData.find(
    (item) =>
      item.airportCode === airlineRouteDetailaResult[0].origingAirportCode
  );
  return (
    <div>
      {origing && (
        <div className="mt-5">
          <div className="section-heading mb-3">
            <p className="ahsub">Airport Information</p>
            <h3 className="fw-bold mt-0 mb-0 d-flex">
              {origing.cityName} Airport Contact Info{" "}
              <Icon
                icon="ph:airplane-takeoff-thin"
                color="#DC391B"
                className="airplane-hm"
              />
            </h3>
          </div>
          <div className="tbsed-row">
            <div className="table-responsive">
              <table className="table table-striped tbsed">
                <tbody>
                  <tr>
                    <th className="first" width="250">
                      Airport Name
                    </th>
                    <td>{origing.airportName}</td>
                  </tr>
                  <tr>
                    <th className="first" width="250">
                      City Name
                    </th>
                    <td>{origing.cityName}</td>
                  </tr>
                  <tr>
                    <th className="first" width="250">
                      Continent Name
                    </th>
                    <td>{origing.continent}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {destination && (
        <div className="mt-5 pt-2">
          <div className="section-heading mb-3">
            <p className="ahsub">Airport Information</p>
            <h3 className="fw-bold mt-0 mb-0 d-flex">
              {destination.cityName} Airport Contact Info{" "}
              <Icon
                icon="ph:airplane-landing-thin"
                color="#DC391B"
                className="airplane-hm"
              />
            </h3>
          </div>
          <div className="tbsed-row">
            <div className="table-responsive">
              <table className="table table-striped tbsed">
                <tbody>
                  <tr>
                    <th className="first" width="250">
                      Airport Name
                    </th>
                    <td>{destination.airportName}</td>
                  </tr>
                  <tr>
                    <th className="first" width="250">
                      City Name
                    </th>
                    <td>{destination.cityName}</td>
                  </tr>
                  <tr>
                    <th className="first" width="250">
                      Continent Name
                    </th>
                    <td>{destination.continent}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirlineAirport;
