import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { Col, Container, Row } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import {
  contactinformationErr,
  customerInfoErr,
  fareSoldOutRoute,
} from "../../utils/flightCheckoutUtils";
import {
  bookingPaymentInformation,
  contactinformationGuest,
  fare_Check,
  passengerinformation,
} from "../../pages/api/CheckoutRelatedApi";
import { useRouter } from "next/router";

const steps = [
  "Flight Details",
  "Contact Information",
  "Traveler Information",
  "Payment Information",
];

export default function PayStepper({
  activeStep,
  completed,
  setActiveStep,
  setCompleted,
  Controller,
  FarePriceBtn,
  FarePricePopup,
  customerInfo,
  settravelerInfError,
  MetaLinkId,
  contactinformation,
  childInfo,
  infantInfo,
  paymentInfomation,
  singleFlight,
  setchildInfoError,
  setCustomerInfoError,
  setInfantError,
  setFare,
  setFareSold,
  fare,
}) {
  const size = useWindowSize();
  const [loading, setloading] = React.useState(false);
  const [allAdult, setallAdult] = React.useState("");
  const totalSteps = () => {
    return steps.length;
  };
  const router = useRouter();
  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    const sliced = Object.keys(completed)
      .slice(0, step)
      .reduce((result, key) => {
        result[key] = completed[key];
        return result;
      }, {});

    setCompleted(sliced);
  };
  const totalPax =
    singleFlight.flights.childrenCount +
    singleFlight.flights.infantsCount +
    singleFlight.flights.adultsCount;

  const handleComplete = () => {
    const deeplink = router.query.checkout;
    if (activeStep === 0) {
      setloading(true);
      const route = fareSoldOutRoute(singleFlight);
      fare_Check(deeplink, MetaLinkId)
        .then((res) => {
          if (res.ResponseStatus.status === 2) {
            setFareSold(true);
            setloading(false);
            router.push(route);
          } else {
            setFare(res);
            setloading(false);
            const newCompleted = completed;
            newCompleted[activeStep] = true;
            setCompleted(newCompleted);
            handleNext();
          }
        })
        .catch((err) => {
          console.log("err", err.message);
          setFareSold(true);
          router.push(route);
        });
    } else if (activeStep === 1) {
      const err = contactinformationErr(contactinformation);
      settravelerInfError(err);
      if (Object.keys(err).length === 0) {
        contactinformationGuest(MetaLinkId, contactinformation);
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
      }
    } else if (activeStep === 2) {
      const errAdult = customerInfoErr(customerInfo);
      const errchild =
        singleFlight.flights.childrenCount > 0
          ? customerInfoErr(childInfo)
          : [];
      const errInfant =
        singleFlight.flights.infantsCount > 0
          ? customerInfoErr(infantInfo)
          : [];
      setCustomerInfoError(errAdult);
      setInfantError(errInfant);
      setchildInfoError(errchild);
      const paxDetails =
        singleFlight.flights.childrenCount > 0 &&
        singleFlight.flights.infantsCount > 0 &&
        singleFlight.flights.adultsCount
          ? [...childInfo, ...infantInfo, ...customerInfo]
          : singleFlight.flights.childrenCount > 0 &&
            singleFlight.flights.adultsCount
          ? [...childInfo, ...customerInfo]
          : singleFlight.flights.infantsCount > 0 &&
            singleFlight.flights.adultsCount > 0
          ? [...customerInfo, ...infantInfo]
          : customerInfo;

      const totalpaxErr =
        totalPax !== paxDetails.length
          ? "Please fill all Traveler Details"
          : "";
      setallAdult(totalpaxErr);
      if (
        Object.keys(errAdult).length === 0 &&
        Object.keys(errchild).length === 0 &&
        Object.keys(errInfant).length === 0 &&
        totalpaxErr.length === 0
      ) {
        passengerinformation(MetaLinkId, paxDetails);
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
        setallAdult("");
      }
    } else if (activeStep === 3) {
      bookingPaymentInformation(
        MetaLinkId,
        paymentInfomation,
        singleFlight,
        fare
      )
        .then((result) => {
          router.push({
            pathname: "/flight/flight-booking-confirmation",
            query: {
              id: MetaLinkId,
            },
          });
        })
        .catch((error) => console.log("error", error));
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    } else {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    }
  };

  // sticky step header
  const [sticky, setSticky] = React.useState("");
  React.useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 100 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  return (
    <>
      {Controller
        ? null
        : size.width <= 991 && (
            <div className={`stepsmu-empty ${sticky ? "" : "d-none"}`}></div>
          )}

      <div
        className={`stepsto-payment ${
          Controller ? "" : "stickyasd "
        }  ${sticky}`}
      >
        <div className={Controller ? "d-none" : "stepmui container"}>
          <div className="stepmui-row">
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step
                  key={label}
                  completed={completed[index]}
                  className={
                    (completed[index] ? "completed" : " inprogress") +
                    (activeStep == index ? " current" : " ")
                  }
                >
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>

        <div className={Controller ? "" : "d-none"}>
          <div className="controller-steps-chk">
            <Container>
              <Row className="align-items-center">
                {FarePriceBtn && <Col xs={5}>{FarePriceBtn} </Col>}

                {allStepsCompleted() ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <Col xs={7} lg={12} className="text-right text-lg-left">
                    <div className="btn-steps-footer">
                      {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                          <></>
                        ) : (
                          <button
                            className="btn btn-site ripple-wv flashsanimated"
                            onClick={handleComplete}
                          >
                            {loading ? (
                              "Loading..."
                            ) : (
                              <>
                                {completedSteps() === totalSteps() - 1
                                  ? "Proceed to Pay"
                                  : "Continue"}
                              </>
                            )}
                          </button>
                        ))}
                    </div>
                    {allAdult.length > 0 ? (
                      <div className="text-danger text-xsalert mt-1">
                        {allAdult}
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                )}
              </Row>
            </Container>
          </div>

          {FarePricePopup ? FarePricePopup : null}
        </div>
      </div>
    </>
  );
}
