import React from "react";
import FlglistCheckbox from "./FlglistCheckbox";
import FlglistTime from "./FlglistTime";
import { Col, Row } from "react-bootstrap";

const DeReFilter = ({ DepartTitle = "Departure Time", currency }) => {
  return (
    <>
      <FlglistCheckbox
        title={`Transit Amount`}
        data={[
          {
            title: "All (102)",
            price: "47",
          },
          {
            title: "Non-Transit (60)",
            price: "47",
          },
          {
            title: "1 stop (30)",
            price: "47",
          },
          {
            title: "2 stop (12)",
            price: "47",
          },
        ]}
        currency={currency}
      />
      <hr></hr>
      <FlglistTime
        title={DepartTitle}
        data={[
          {
            title: "05:00 AM - 11:59 AM",
            icon: "fltime-morning",
          },
          {
            title: "12:00 PM - 05:59 PM",
            icon: "fltime-sun",
          },
          {
            title: "06:00 PM - 11:59 PM",
            icon: "fltime-sunset",
          },
          {
            title: "12:00 AM - 04:59 AM",
            icon: "fltime-moon",
          },
        ]}
      />{" "}
    </>
  );
};

export default DeReFilter;
