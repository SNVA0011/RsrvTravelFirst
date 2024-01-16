import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Icon } from "@iconify/react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { mostused } from "../../utils/staticCurrency";
import AnimatebyNumber from "../aboutus/AnimatebyNumber";

const PriceReview = ({
  type,
  modifysort,
  setmodifysort,
  size,
  tablet,
  modalview,
  singleFlight,
  latestfare,
}) => {
  const currencyLogo = mostused.find(
    (item) => item.value === singleFlight.currencyCode
  ).icon;
  useEffect(() => {
    if (tablet) {
      try {
        if (modifysort) {
          document.body.classList.add("modal-open");
        } else {
          document.body.classList.remove("modal-open");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [modifysort]);

  return (
    <>
      {size.width < 992 && type === "button" && (
        <button
          type="button"
          className={`btn getpricedtl-btn`}
          onClick={() => {
            setmodifysort(!modifysort);
          }}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <div className="fw-bold">
            {singleFlight.currencyCode === "AED" ? (
              <span>AED </span>
            ) : (
              <Icon icon={currencyLogo} className="lsc-currency ms-0" />
            )}

            <span className="d-inline-block">
              <AnimatebyNumber
                number={Object.keys(latestfare).length > 0
                  ? Math.round(latestfare.BookingFlightDetails[0].fare.grandTotal)
                  : Math.round(singleFlight.currentFlight.fare.grandTotal)}
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              />
            </span>

            <Icon icon={`ph:caret-${modalview ? "up" : "down"}-bold`} />
          </div>
          <div className="sub-title">View Details</div>
        </button>
      )}

      {size.width < 992 && type === "popup" && (
        <>
          <div
            className={`fade offcanvas-backdrop ${modifysort ? "show" : "d-none"
              } fadeanim-offcanvas`}
            onClick={() => {
              setmodifysort(!modifysort);
            }}
          />
        </>
      )}

      {/*-------- offcanvas-top --------*/}
      {type === "popup" && (
        <div
          className={
            size.width < 992 ? "chkpricefilter" : "chkpricefilter d-inline"
          }
        >
          <div
            className={
              (tablet
                ? "cpt offcanvas offcanvas-sidenav offcanvas-bottom h-auto onewayfilter-off ct-6 "
                : "d-inline") + modalview
            }
          >
            {size.width < 992 && (
              <>
                <Offcanvas.Header className="d-flex justify-content-center align-items-center">
                  <Icon
                    icon="system-uicons:ticket"
                    className="me-auto cil-fil-ic"
                  />

                  <Offcanvas.Title>Price Details</Offcanvas.Title>
                  <button
                    type="button"
                    className="btn-close text-white d-flex"
                    onClick={() => {
                      setmodifysort(!modifysort);
                    }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <Icon icon="ic:round-close" color="#000000" />
                  </button>
                </Offcanvas.Header>
              </>
            )}

            <Offcanvas.Body
              className={
                size.width < 992
                  ? "px-0 pb-2 pt-0 py-xl-0 d-flex flex-column"
                  : "d-inline p-0"
              }
            >
              <div className="price-review dt-1 mbchk-20">
                <div className="d-none d-lg-block">
                  <h4>Price Details</h4>
                  <hr className="sepr-hrprice"></hr>
                </div>

                <div className="traveller-price-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <td colSpan={2}>
                          {singleFlight.adultsCount +
                            singleFlight.childrenCount +
                            singleFlight.infantsCount}{" "}
                          Traveller(S){" "}
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Adult X {singleFlight.adultsCount}</td>
                        <td align="right" className="ps-2">
                          {singleFlight.currencyCode === "AED" ? (
                            <span>AED </span>
                          ) : (
                            <Icon
                              icon={currencyLogo}
                              className="lsc-currency"
                            />
                          )}
                          {Object.keys(latestfare).length > 0
                            ? Math.round(
                              latestfare.BookingFlightDetails[0].fare
                                .adultFare
                            ) * singleFlight.adultsCount
                            : Math.round(
                              singleFlight.currentFlight.fare.adultFare
                            ) * singleFlight.adultsCount}
                        </td>
                      </tr>
                      {singleFlight.childrenCount > 0 && (
                        <tr>
                          <td>Children X {singleFlight.childrenCount}</td>
                          <td align="right" className="ps-2">
                            <Icon
                              icon={currencyLogo}
                              className="lsc-currency"
                            />{" "}
                            {Object.keys(latestfare).length > 0
                              ? Math.round(
                                latestfare.BookingFlightDetails[0].fare
                                  .childFare
                              ) * singleFlight.childrenCount
                              : Math.round(
                                singleFlight.currentFlight.fare.childFare
                              ) * singleFlight.childrenCount}
                          </td>
                        </tr>
                      )}
                      {singleFlight.infantsCount > 0 && (
                        <tr>
                          <td>Infant X {singleFlight.infantsCount}</td>
                          <td align="right" className="ps-2">
                            <Icon
                              icon={currencyLogo}
                              className="lsc-currency"
                            />{" "}
                            {Object.keys(latestfare).length > 0
                              ? Math.round(
                                latestfare.BookingFlightDetails[0].fare
                                  .infantFare
                              ) * singleFlight.infantsCount
                              : Math.round(
                                singleFlight.currentFlight.fare.infantFare
                              ) * singleFlight.infantsCount}
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td>Flight Tax & Fee</td>
                        <td align="right" className="ps-2">
                          {singleFlight.currencyCode === "AED" ? (
                            <span>AED </span>
                          ) : (
                            <Icon
                              icon={currencyLogo}
                              className="lsc-currency"
                            />
                          )}
                          {Object.keys(latestfare).length > 0
                            ? Math.round(
                              latestfare.BookingFlightDetails[0].fare.totalTax
                            )
                            : Math.round(
                              singleFlight.currentFlight.fare.totalTax
                            )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <hr className="sepr-hrprice"></hr>
                <div className="traveller-price-total">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Total Price</td>
                        <td align="right" className="ps-2 bldextra">
                          {singleFlight.currencyCode === "AED" ? (
                            <span>AED </span>
                          ) : (
                            <Icon
                              icon={currencyLogo}
                              className="lsc-currency"
                            />
                          )}

                          <span className="d-inline-block">
                            <AnimatebyNumber
                              number={Object.keys(latestfare).length > 0
                                ? Math.round(
                                  latestfare.BookingFlightDetails[0].fare
                                    .grandTotal
                                )
                                : Math.round(
                                  singleFlight.currentFlight.fare.grandTotal
                                )}
                              configs={[
                                { mass: 1, tension: 220, friction: 100 },
                                { mass: 1, tension: 180, friction: 130 },
                                { mass: 1, tension: 280, friction: 90 },
                                { mass: 1, tension: 180, friction: 135 },
                                { mass: 1, tension: 260, friction: 100 },
                                { mass: 1, tension: 210, friction: 180 },
                              ]}
                            />
                          </span>


                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* <p>
                  <b>Note :</b> All the fares displayed are quoted in Dollar and
                  inclusive of base fare, taxes and all fees additional baggage
                  fees may apply as per the airline policies.
                </p> */}
              </div>
            </Offcanvas.Body>
          </div>
        </div>
      )}
    </>
  );
};

export default PriceReview;
