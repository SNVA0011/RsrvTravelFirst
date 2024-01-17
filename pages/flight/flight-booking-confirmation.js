import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BookingConfirm from "../../component/flightconfirm/BookingConfirm";
import FlightSummary from "../../component/flightconfirm/FlightSummary";
import PriceDetails from "../../component/flightconfirm/PriceDetails";
import TicketStatus from "../../component/flightconfirm/TicketStatus";
import TravelerInfo from "../../component/flightconfirm/TravelerInfo";
import PageHead from "../../component/common/PageHead";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { getBookingDetails } from "../api/CheckoutRelatedApi";
import moment from "moment";
import AirportData from "../../component/staticJson/AirportData.json";
import FlightErrorMsg from "../../component/flightlist/FlightErrorMsg";
import Image from "next/image";
import { BrandLogo } from "../../utils/static";

const FlgBookingConfirm = () => {
  const router = useRouter();

  const [bookingData, setBookingData] = useState({
    loading: true,
    data: null,
    err: null,
  });

  const PrintScreen = () => {
    try {
      window.print();
    } catch (e) {
      console.log(e);
    }
  };

  const totalPassanger = bookingData.data?.paxDetails.length;
  const outBound = bookingData.data?.flightDetail?.outBound;
  const inBound = bookingData.data?.flightDetail?.inBound;
  const fromAirport =
    outBound &&
    AirportData.find((item) => item.airportCode === outBound[0]?.fromAirport);
  const toAirport =
    outBound &&
    AirportData.find(
      (item) => item.airportCode === outBound[outBound.length - 1].toAirport
    );
  const startDate = outBound && outBound[0]?.depDate;
  const endDate = inBound && inBound[0]?.depDate;

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const metaid = router.query.id;
      getBookingDetails(metaid, setBookingData, bookingData);
    }
  }, [router.query]);

  return (
    <>
      <PageHead
        title={`Flight Booking Confirmation | ReservationsDeal`}
        description={``}
        keywords={``}
      />
      {bookingData.loading ? (
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
      ) : bookingData.err !== null ? (
        <FlightErrorMsg
          lgImage={`/images/airport-noflight.jpg`}
          smImage={`/images/err-found.jpg`}
          title={`Looks like you are lost!`}
        >
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </FlightErrorMsg>
      ) : (
        <div className="flightbook-confirm">
          <Container className="spcmy-60 overflow-hidden">
            <BookingConfirm
              status={"pending"}
              data={{
                bookingid: bookingData.data.bookingRes.BookingNo,
                pnr: bookingData.data.bookingRes.PNR,
                price: `${Math.round(bookingData.data.paymentInfo.amount)} ${bookingData.data.paymentInfo.currency
                  }`,
                info:
                  inBound.length > 0
                    ? [
                      {
                        title: "Reference No. : ",
                        content: bookingData.data.bookingRes.BookingNo,
                      },
                      {
                        title: "Date Booked : ",
                        content: moment().format("ll"),
                      },
                      {
                        title: "Departure : ",
                        content: moment(startDate).format("ll"),
                      },
                      {
                        title: "Return : ",
                        content: moment(endDate).format("ll"),
                      },
                      {
                        title: "Origin : ",
                        content: `${fromAirport.airportName} (${fromAirport.cityName})`,
                      },
                      {
                        title: "Destination : ",
                        content: `${toAirport.airportName} (${toAirport.cityName})`,
                      },
                      {
                        title: "Journey Type : ",
                        content: inBound.length > 0 ? "Round Way" : "One Way",
                      },
                      {
                        title: "Passengers : ",
                        content: totalPassanger,
                      },
                    ]
                    : [
                      {
                        title: "Reference No. : ",
                        content: bookingData.data.bookingRes.BookingNo,
                      },
                      {
                        title: "Date Booked : ",
                        content: moment().format("ll"),
                      },
                      {
                        title: "Departure : ",
                        content: moment(startDate).format("ll"),
                      },
                      {
                        title: "Origin : ",
                        content: `${fromAirport.airportName} (${fromAirport.cityName})`,
                      },
                      {
                        title: "Destination : ",
                        content: `${toAirport.airportName} (${toAirport.cityName})`,
                      },
                      {
                        title: "Journey Type : ",
                        content: "One Way",
                      },
                      {
                        title: "Passengers : ",
                        content: totalPassanger,
                      },
                    ],
              }}
            />

            <FlightSummary filghtData={bookingData.data} />

            <PriceDetails filghtData={bookingData.data} />

            <TravelerInfo filghtData={bookingData.data} />

            <TicketStatus />

            <div className="text-center">
              <button
                className="btn btn-site ripple-wv print-fbk mx-1 mx-sm-2"
                type="button"
                onClick={() => PrintScreen()}
              >
                <span>
                  <Icon icon="lets-icons:print" className="me-1" /> Print Ticket
                </span>
              </button>

              <button
                className="btn btn-site ripple-wv green print-fbk mx-1 mx-sm-2"
                type="button"
              >
                <span>
                  <Icon icon="dashicons:email-alt" className="me-1" /> Email
                  Ticket
                </span>
              </button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default FlgBookingConfirm;
