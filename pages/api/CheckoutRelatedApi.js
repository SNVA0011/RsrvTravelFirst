import axios from "axios";
import { api_traveloes } from "../../utils/static";


export const checkoutFlightData = async (
  deep,
  singleFlight,
  setSingleFlight
) => {
  try {
    setSingleFlight({
      ...singleFlight,
      loading: true,
      error: null,
    });

    const body = {
      key: `https://www.reservationsdeal.in/flight/checkout/${deep}`,
    };
    const data = await axios.post(
      `${api_traveloes}/v1/api/landingFromDeeplink`,
      body
    );
    const resp = data.data;
    if (resp.status === 1) {
      setSingleFlight({ ...singleFlight, loading: false, flights: resp });
    } else {
      setSingleFlight({
        ...singleFlight,
        loading: false,
        error: "broken link or entered a URL that doesn't exist on this site.",
      });
    }
  } catch (error) {
    console.log("error", error);
    setSingleFlight({ ...singleFlight, loading: false, error: "error" });
  }
};

export const fare_Check = async (deeplink, MetaLinkId) => {
  try {
    const body = {
      key: `https://www.reservationsdeal.in/flight/checkout/${deeplink}`,
      MetaLinkId: MetaLinkId,
    };

    const fare = await axios.post(
      `${api_traveloes}/v1/api/getAnyflightSearchWithFareCheck`,
      body
    );
    const response = fare.data;
    return response;
  } catch (error) {
    console.log("error", error.message);
  }
};

export const contactinformationGuest = async (MetaLinkId, customerInfo) => {
  try {
    const body = {
      MetaLinkId: MetaLinkId,
      customerData: {
        customerEmail: customerInfo.email,
        customerPhone: customerInfo.billingphone,
      },
    };

    const data = await axios.post(
      `${api_traveloes}/v1/api/updateDataByMetaLinkID`,
      body
    );
  } catch (error) {
    console.log("error", error);
  }
};

export const passengerinformation = async (MetaLinkId, paxDetails) => {
  try {
    const body = {
      MetaLinkId: MetaLinkId,
      PAX_Details: paxDetails,
    };

    const data = await axios.post(
      `${api_traveloes}/v1/api/updateDataByMetaLinkID`,
      body
    );
  } catch (error) {
    console.log("error", error);
  }
};

export const bookingPaymentInformation = async (
  MetaLinkId,
  paymentInfomation,
  singleFlight,
  fare
) => {
  try {
    const body = {
      MetaLinkId: MetaLinkId,
      BookingPaymentDetails: {
        amount: Math.round(fare.BookingFlightDetails[0].fare.grandTotal),
        currency: singleFlight.flights.currencyCode,
        gateway: paymentInfomation,
        response: "test response",
        transactionId: "xxxxxxxxxxxxx",
        status: "fail",
        paymentMode: paymentInfomation,
        serviceCharge: 0,
      },
    };
    const data = await axios.post(
      `${api_traveloes}/v1/api/updatePaymentByMetaLinkID`,
      body
    );
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getBookingDetails = async (
  metaid,
  setBookingData,
  bookingData
) => {
  try {
    setBookingData({ ...bookingData, loading: true, err: null });
    const body = {
      MetaLinkId: metaid,
    };
    const Data = await axios.post(
      `${api_traveloes}/v1/api/getflightByMetaLinkID`,
      body
    );
    const response = Data.data;
    if (response.status === 0) {
      setBookingData({ ...bookingData, loading: false, err: "Id Not Match" });
    } else {
      setBookingData({ ...bookingData, loading: false, data: response });
    }
  } catch (error) {
    console.log("error", error);
    setBookingData({ ...bookingData, loading: false, err: error.message });
  }
};
