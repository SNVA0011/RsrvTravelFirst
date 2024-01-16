import React from "react";
import { Icon } from "@iconify/react";
import Spinner from "react-bootstrap/Spinner";

const CheckoutLoader = () => {
  return (
    <div className="flight-loaderr wf-100 inprog">
      <div className="container">
        <div className="spinner-chk d-inline-flex">
          <Spinner animation="border" variant="secondary" />

          <Icon icon="material-symbols-light:lock-outline" />
        </div>
        <h5 className="mb-0 blue">Please Wait...</h5>
        <h4 className="mt-3">Processing your payment</h4>
        <p className="mt-4 fnt-12">
          Please do not close this window. This page will automatically redirect
          to your dashboard after complete.
        </p>
      </div>
    </div>
  );
};

export default CheckoutLoader;
