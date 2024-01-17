import React, { useEffect, useRef, useState } from "react";
import PageHead from "../../../component/common/PageHead";
import { Col, Container, Row } from "react-bootstrap";
import PayStepper from "../../../component/checkout/PayStepper";
import DownloadOurApp from "../../../component/checkout/DownloadOurApp";
import RatebyTrust from "../../../component/checkout/RatebyTrust";
import ChoosePromo from "../../../component/checkout/ChoosePromo";
import PriceReview from "../../../component/checkout/PriceReview";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FlightDtCheckout from "../../../component/checkout/FlightDtCheckout";
import FlgCancellationChk from "../../../component/checkout/FlgCancellationChk";
import GoodToKnow from "../../../component/checkout/GoodToKnow";
import SignificantInfo from "../../../component/checkout/SignificantInfo";
import TravellerForms from "../../../component/checkout/TravellerForms";
import CheckoutLoader from "../../../component/checkout/CheckoutLoader";
import BookingSummary from "../../../component/checkout/BookingSummary";
import useWindowSize from "../../../hooks/useWindowSize";
import { useRouter } from "next/router";
import {
  checkoutFlightData,
  fare_Check,
} from "../../api/CheckoutRelatedApi";
import FlightErrorMsg from "../../../component/flightlist/FlightErrorMsg";
import SessionTimeOut from "../../../component/flightlist/SessionTimeOut";
import { fareSoldOutRoute } from "../../../utils/flightCheckoutUtils";
import { BrandLogo } from "../../../utils/static";
import Image from "next/image";

const Checkout = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [contactinformation, setContactInformation] = useState({
    billingphone: "",
    email: "",
  });
  const [customerInfo, setCustomerInfo] = useState([
    {
      Title: "",
      First_Name: "",
      Last_Name: "",
      DOB: "",
      Gender: "0",
      pax: "Adult",
      paxtype: 1,
    },
  ]);

  const [childInfo, setChildInfo] = useState([
    {
      Title: "",
      First_Name: "",
      Last_Name: "",
      DOB: "",
      Gender: "0",
      pax: "Children",
      paxtype: 2,
    },
  ]);
  const [infantInfo, setInfantInfo] = useState([
    {
      Title: "",
      First_Name: "",
      Last_Name: "",
      DOB: "",
      Gender: "0",
      pax: "Infant",
      paxtype: 3,
    },
  ]);

  const [paymentInfomation, setPaymentInformation] = useState("card");
  const [TravelerInfError, settravelerInfError] = useState({});
  const [infantError, setInfantError] = useState([]);
  const [customerInfoError, setCustomerInfoError] = useState([]);
  const [childInfoError, setchildInfoError] = useState([]);
  const [fare, setFare] = useState({});
  const [open, setOpen] = useState(false);
  const [fareSold, setFareSold] = useState(false);
  const [singleFlight, setSingleFlight] = useState({
    flights: null,
    loading: true,
    error: null,
  });

  const handleAddTraveler = (ite) => {
    if (ite === "ADULT") {
      setCustomerInfo([
        ...customerInfo,
        {
          Title: "",
          First_Name: "",
          Last_Name: "",
          DOB: "",
          Gender: "0",
          pax: "Adult",
          paxtype: 1,
        },
      ]);
    } else if (ite === "CHILD") {
      setChildInfo([
        ...childInfo,
        {
          Title: "",
          First_Name: "",
          Last_Name: "",
          DOB: "",
          Gender: "0",
          pax: "Children",
          paxtype: 2,
        },
      ]);
    } else if (ite === "Infant") {
      setInfantInfo([
        ...infantInfo,
        {
          Title: "",
          First_Name: "",
          Last_Name: "",
          DOB: "",
          Gender: "0",
          pax: "Infant",
          paxtype: 3,
        },
      ]);
    }
  };

  const size = useWindowSize();
  const getwidth = size.width;
  const tabBox = useRef();
  const setCustomerInfoValues = (name, value, i) => {
    let copy = [...customerInfo];
    copy[i][name] = value;
    setCustomerInfo(copy);
  };
  const handlechildValues = (name, value, i) => {
    let copy = [...childInfo];
    copy[i][name] = value;
    setChildInfo(copy);
  };
  const handleInfantValues = (name, value, i) => {
    let copy = [...infantInfo];
    copy[i][name] = value;
    setInfantInfo(copy);
  };
  const handleContact = (name, value) => {
    if (name === "billingphone") {
      setContactInformation({ ...contactinformation, [name]: `+${value}` });
    } else {
      setContactInformation({ ...contactinformation, [name]: value });
    }
  };
  const handleRefresh = () => {
    const deeplink = router.query.checkout;
    const MetaLinkId = singleFlight.flights.MetaLinkId;
    checkoutFlightData(deeplink, singleFlight, setSingleFlight);
    const route = fareSoldOutRoute(singleFlight);
    fare_Check(deeplink, MetaLinkId)
      .then((res) => {
        if (res.ResponseStatus.status === 2) {
          setFareSold(true);
          router.push(route);
        } else {
          setFare(res);
        }
      })
      .catch((err) => {
        console.log("err", err.message);
        setFareSold(true);
        router.push(route);
      });
    setOpen(false);
  };

  const handleNewSerarch = () => {
    router.push("/");
    setOpen(false);
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const deeplink = router.query.checkout;
      checkoutFlightData(deeplink, singleFlight, setSingleFlight);
    }
  }, [router.query]);

  useEffect(() => {
    tabBox?.current?.scrollIntoView();
  }, [activeStep]);

  // price review
  const [modifysort, setmodifysort] = useState(false);
  const tablet = setTimeout(() => {
    size.width < 992;
  }, 2000);
  const modalview = modifysort ? " show" : "";

  return (
    <>
      <PageHead
        title={`Book Cheap Flights at ReservationsDeal`}
        description={``}
        keywords={``}
      />

      {singleFlight.loading ? (
        <div className="flight-loaderr wf-100">
          <div className="container">
            <div className="loader-bgb d-flex align-ites-center flex-column justify-content-end">
              <img
                src="/images/loader-plane-flight.gif"
                className="loader-pic"
                alt="loader-plane"
              />
            </div>
            <h5>Please Wait...</h5>
            <p>
              We Are Searching for the best Flights,<br></br> The Best Fares For
              You
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
      ) : singleFlight.error !== null ? (
        <FlightErrorMsg
          lgImage={`/images/airport-noflight.jpg`}
          smImage={`/images/err-found.jpg`}
          title={`Looks like you are lost!`}
        >
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </FlightErrorMsg>
      ) : (
        <main className="checkout-main wf-100">
          <Container>
            <Row className="row-checkout-main">
              <Col
                xs={12}
                lg={activeStep < 4 ? 8 : 12}
                xl={activeStep < 4 ? 9 : 12}
                className={activeStep < 3 ? "chkform-col" : ""}
              >
                <div ref={tabBox} className="w-100 ticket-wrapper">
                  {activeStep < 4 && (
                    <PayStepper
                      Controller={false}
                      activeStep={activeStep}
                      completed={completed}
                      setActiveStep={setActiveStep}
                      setCompleted={setCompleted}
                      contactinformation={contactinformation}
                      customerInfo={customerInfo}
                      settravelerInfError={settravelerInfError}
                      MetaLinkId={singleFlight.flights.MetaLinkId}
                      infantInfo={infantInfo}
                      childInfo={childInfo}
                      paymentInfomation={paymentInfomation}
                      singleFlight={singleFlight}
                      setchildInfoError={setchildInfoError}
                      setCustomerInfoError={setCustomerInfoError}
                      setInfantError={setInfantError}
                      setFare={setFare}
                      setFareSold={setFareSold}
                      fare={fare}
                    />
                  )}

                  <div className="checkout-tab-nav">
                    <Tabs activeKey={activeStep}>
                      <Tab eventKey={0} title="Flight Details">
                        <FlightDtCheckout singleFlight={singleFlight} />

                        {getwidth <= 991 && <ChoosePromo />}

                        <FlgCancellationChk
                          singleFlight={singleFlight.flights}
                        />

                        <GoodToKnow singleFlight={singleFlight.flights} />

                        <SignificantInfo singleFlight={singleFlight.flights} />
                      </Tab>
                      <Tab eventKey={1} title="Traveler Information">
                        {activeStep > 0 && getwidth <= 991 && (
                          <BookingSummary singleFlight={singleFlight.flights} />
                        )}

                        <TravellerForms
                          contactInfo={true}
                          contactinformation={contactinformation}
                          handleContact={handleContact}
                          customerInfo={customerInfo}
                          setCustomerInfoValues={setCustomerInfoValues}
                          TravelerInfError={TravelerInfError}
                          noOfAdult={singleFlight.flights.adultsCount}
                          noOfchild={singleFlight.flights.childrenCount}
                          noOfinfant={singleFlight.flights.infantsCount}
                          handleAddTraveler={handleAddTraveler}
                          infantInfo={infantInfo}
                          childInfo={childInfo}
                          handleInfantValues={handleInfantValues}
                          handlechildValues={handlechildValues}
                          paymentInfomation={paymentInfomation}
                          setPaymentInformation={setPaymentInformation}
                          childInfoError={childInfoError}
                          customerInfoError={customerInfoError}
                          infantError={infantError}
                        />
                      </Tab>
                      <Tab eventKey={2} title="Traveler Information">
                        {activeStep > 0 && getwidth <= 991 && (
                          <BookingSummary singleFlight={singleFlight.flights} />
                        )}

                        <TravellerForms
                          travelInfo={true}
                          customerInfo={customerInfo}
                          contactinformation={contactinformation}
                          handleContact={handleContact}
                          setCustomerInfoValues={setCustomerInfoValues}
                          TravelerInfError={TravelerInfError}
                          noOfAdult={singleFlight.flights.adultsCount}
                          noOfchild={singleFlight.flights.childrenCount}
                          noOfinfant={singleFlight.flights.infantsCount}
                          handleAddTraveler={handleAddTraveler}
                          infantInfo={infantInfo}
                          childInfo={childInfo}
                          handleInfantValues={handleInfantValues}
                          handlechildValues={handlechildValues}
                          paymentInfomation={paymentInfomation}
                          setPaymentInformation={setPaymentInformation}
                          childInfoError={childInfoError}
                          customerInfoError={customerInfoError}
                          infantError={infantError}
                        />
                      </Tab>
                      <Tab eventKey={3} title="Payment">
                        {activeStep > 0 && getwidth <= 991 && (
                          <BookingSummary singleFlight={singleFlight.flights} />
                        )}

                        <TravellerForms
                          paymentInfo={true}
                          customerInfo={customerInfo}
                          contactinformation={contactinformation}
                          handleContact={handleContact}
                          setCustomerInfoValues={setCustomerInfoValues}
                          TravelerInfError={TravelerInfError}
                          noOfAdult={singleFlight.flights.adultsCount}
                          noOfchild={singleFlight.flights.childrenCount}
                          noOfinfant={singleFlight.flights.infantsCount}
                          handleAddTraveler={handleAddTraveler}
                          infantInfo={infantInfo}
                          childInfo={childInfo}
                          handleInfantValues={handleInfantValues}
                          handlechildValues={handlechildValues}
                          paymentInfomation={paymentInfomation}
                          setPaymentInformation={setPaymentInformation}
                          childInfoError={childInfoError}
                          customerInfoError={customerInfoError}
                          infantError={infantError}
                        />
                      </Tab>
                      <Tab eventKey={4} title="Payment">
                        {activeStep == 4 && <CheckoutLoader />}
                      </Tab>
                    </Tabs>
                  </div>

                  {activeStep < 4 && (
                    <PayStepper
                      Controller={true}
                      activeStep={activeStep}
                      completed={completed}
                      setActiveStep={setActiveStep}
                      setCompleted={setCompleted}
                      FarePriceBtn={
                        getwidth <= 991 && (
                          <PriceReview
                            type={"button"}
                            modifysort={modifysort}
                            setmodifysort={setmodifysort}
                            size={size}
                            tablet={tablet}
                            modalview={modalview}
                            singleFlight={singleFlight.flights}
                            latestfare={fare}
                          />
                        )
                      }
                      FarePricePopup={
                        getwidth <= 991 && (
                          <PriceReview
                            type={"popup"}
                            modifysort={modifysort}
                            setmodifysort={setmodifysort}
                            size={size}
                            tablet={tablet}
                            modalview={modalview}
                            singleFlight={singleFlight.flights}
                            latestfare={fare}
                          />
                        )
                      }
                      contactinformation={contactinformation}
                      customerInfo={customerInfo}
                      settravelerInfError={settravelerInfError}
                      MetaLinkId={singleFlight.flights.MetaLinkId}
                      infantInfo={infantInfo}
                      childInfo={childInfo}
                      singleFlight={singleFlight}
                      paymentInfomation={paymentInfomation}
                      setchildInfoError={setchildInfoError}
                      setCustomerInfoError={setCustomerInfoError}
                      setInfantError={setInfantError}
                      setFare={setFare}
                      setFareSold={setFareSold}
                      fare={fare}
                    />
                  )}
                </div>
              </Col>

              {activeStep < 4 && (
                <Col xs={12} lg={4} xl={3} className="chksummary-col">
                  <div className="stickyasd getapp">
                    {getwidth >= 992 && (
                      <PriceReview
                        type={"popup"}
                        modifysort={modifysort}
                        setmodifysort={setmodifysort}
                        size={size}
                        tablet={tablet}
                        modalview={modalview}
                        singleFlight={singleFlight.flights}
                        latestfare={fare}
                      />
                    )}

                    {activeStep > 0 && getwidth >= 992 && (
                      <BookingSummary singleFlight={singleFlight.flights} />
                    )}

                    {activeStep == 0 && (
                      <>
                        {getwidth >= 992 && <ChoosePromo />}

                        <RatebyTrust />

                        <DownloadOurApp />
                      </>
                    )}
                  </div>
                </Col>
              )}
            </Row>
          </Container>

          <div className="controller-steps-chk-empty d-lg-none"></div>

          <SessionTimeOut
                      imag={"/images/hourglass.gif"}
            searchfrom={`${singleFlight.flights.currentFlight.outBound[0].fromAirport}`}
            searchTo={`${
              singleFlight.flights.currentFlight.outBound[
                singleFlight.flights.currentFlight.outBound.length - 1
              ].toAirport
            } `}
            time={600000} //millisecond
            open={open}
            setOpen={setOpen}
            handleRefresh={handleRefresh}
            handleNewSerarch={handleNewSerarch}
            buttonShow={true}
            heading={"Your Session has been Expired"}
            refreshlebel={"Latest Fares"}
          />

          {fareSold && (
            <SessionTimeOut
              imag={"/images/time-ticking-red.png"}
              searchfrom={`${singleFlight.flights.currentFlight.outBound[0].fromAirport}`}
              searchTo={`${
                singleFlight.flights.currentFlight.outBound[
                  singleFlight.flights.currentFlight.outBound.length - 1
                ].toAirport
              } `}
              time={90} //millisecond
              open={fareSold}
              setOpen={setFareSold}
              handleRefresh={""}
              handleNewSerarch={""}
              buttonShow={false}
              heading={"Airline fare has been sold out"}
              refreshlebel={""}
            />
          )}
        </main>
      )}
    </>
  );
};

export default Checkout;
