import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { contactlist } from "../../utils/static";

const BookingConfirm = ({ data, status }) => {
  const BookingStatus =
    status === "success"
      ? "Confirmed!"
      : status === "pending"
      ? "Not Confirmed"
      : "Confirmed!";
  const PnrStatus =
    status === "success"
      ? data.pnr
      : status === "pending"
      ? "X"
      : "IN PROGRESS";
  const IconStatus =
    status === "success"
      ? "flg-booking-confirm"
      : status === "pending"
      ? "payment-pending"
      : "flg-booking-confirm";
  const Phonelist = contactlist[0];
  return (
    <section className={`fbkconf-blue ${status}`}>
      <Row className="mx-0">
        <Col
          xs={12}
          md={6}
          lg={7}
          xl
          className={`d-flex ${status === "success" ? status : ""}`}
        >
          <div className="w-100 my-auto">
            <div className="text-center conf-for">
              <img src={`/images/${IconStatus}.png`} className="confirm-img" />
              {status === "pending" ? (
                <div className="pendingicon-label">
                  PENDING <br></br>
                </div>
              ) : (
                ""
              )}
              <h3>Your Booking is {BookingStatus}</h3>

              {status === "pending" ? (
                <>
                  <p className="mb-3">
                    Due to failure please make payment if any doubt please
                    contact our help desk at
                    <Link href={`tel:${Phonelist.href}`}>
                      <a className="d-inline-block mx-2">
                        <strong className="fw-exbold">{Phonelist.name}</strong>
                      </a>
                    </Link>
                  </p>
                  <p className="mt-0">
                    Your Booking Reference Number is{" "}
                    <strong className="fw-exbold">{data.bookingid}</strong>
                  </p>
                </>
              ) : (
                <p>
                  Your Booing ID is{" "}
                  <strong className="fw-exbold">{data.bookingid}</strong>.
                  Please use it for any further communication with us.
                </p>
              )}

              <span className="badge">
                Your PNR is <strong>{PnrStatus}</strong>
              </span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={5} className="d-flex right">
          <div className="w-100 my-auto">
            <ul>
              {data.info &&
                data.info.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.title} <strong>{item.content}</strong>
                    </li>
                  );
                })}
            </ul>

            <div className="total">Total Price :  <span className="bldextra">{data.price}</span></div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default BookingConfirm;
