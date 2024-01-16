import React from "react";
import { Row } from "react-bootstrap";
import Chip from "@mui/material/Chip";
const Time = [
  {
    title: "05:00 AM - 11:59 AM",
    icon: "fltime-morning",
    value: "05:00:00-11:59:00",
  },
  {
    title: "12:00 PM - 05:59 PM",
    icon: "fltime-sun",
    value: "12:00:00-17:59:00",
  },
  {
    title: "06:00 PM - 11:59 PM",
    icon: "fltime-sunset",
    value: "18:00:00-23:00:00",
  },
  {
    title: "12:00 AM - 04:59 AM",
    icon: "fltime-moon",
    value: "00:00:00-04:59:00",
  },
];

const SelectedFilter = ({
  stopFiltered,
  airlineFiltered,
  arrivalFiltered,
  departureFiltered,
  stop,
  airline,
  deleteFilter,
  search,
}) => {
  return (
    <div className="filter-div-chip  mv-chp">
      {stopFiltered.length > 0 &&
        stopFiltered.map((item1) =>
          stop.map(
            (item2, i) =>
              item2.value === item1 && (
                <span key={i} className="me-2 mb-2 d-inline-block">
                  <Chip
                    color='primary' style={{ backgroundColor: '#DC391B', fontSize: '12px' }}
                    label={item2.title}
                    onDelete={() => deleteFilter("stop", item1)}
                  />
                </span>
              )
          )
        )}
      {airlineFiltered.length > 0 &&
        airline.map((air, ind) =>
          airlineFiltered.map(
            (airl, i) =>
              airl === air.value && (
                <span key={ind} className="me-2 mb-2 d-inline-block">
                  <Chip
                    color='primary' style={{ backgroundColor: '#DC391B', fontSize: '12px' }}
                    label={air.title}
                    onDelete={() => deleteFilter("airline", airl)}
                  />
                </span>
              )
          )
        )}
      {arrivalFiltered.length > 0 &&
        Time.map((air, ind) =>
          arrivalFiltered.map(
            (airl, i) =>
              airl === air.value && (
                <span key={ind} className="me-2 mb-2 d-inline-block">
                  <Chip
                    color='primary' style={{ backgroundColor: '#DC391B', fontSize: '12px' }}
                    label={`${search.destinationAirport} : ${air.title}`}
                    onDelete={() => deleteFilter("arrivalTime", airl)}
                  />
                </span>
              )
          )
        )}
      {departureFiltered.length > 0 &&
        Time.map((air, ind) =>
          departureFiltered.map(
            (airl, i) =>
              airl === air.value && (
                <span key={ind} className="me-2 mb-2 d-inline-block">
                  <Chip
                    color='primary' style={{ backgroundColor: '#DC391B', fontSize: '12px' }}
                    label={`${search.originAirport} : ${air.title}`}
                    onDelete={() => deleteFilter("departure", airl)}
                  />
                </span>
              )
          )
        )}
    </div>
  );
};

export default SelectedFilter;
