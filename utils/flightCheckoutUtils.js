import { Email_Pattern, Name_Pattern, Phone_Pattern } from "./static";
import AirportData from "../component/staticJson/AirportData.json";
import moment from "moment";

export const SelectFlight = (router, deeplinkUrl) => {
  router.push({ pathname: deeplinkUrl });
};

export const customerInfoErr = (customerInfo) => {
  const err = [];
  customerInfo.map((item, i) => {
    const errdetail = TravelerformValidation(item);
    if (Object.keys(errdetail).length > 0) {
      err[i] = errdetail;
    }
  });
  return err;
};

export const TravelerformValidation = (customerInfo) => {
  const errorValidation = {};

  if (customerInfo.Title === "") {
    errorValidation.Title = "Select title";
  }

  if (customerInfo.First_Name === "") {
    errorValidation.First_Name = "Please enter first name";
  } else if (!Name_Pattern.test(customerInfo.First_Name)) {
    errorValidation.First_Name = "Please enter valid first name";
  }

  if (customerInfo.Last_Name === "") {
    errorValidation.Last_Name = "Please enter last name";
  } else if (!Name_Pattern.test(customerInfo.Last_Name)) {
    errorValidation.Last_Name = "Please enter last name";
  }

  if (customerInfo.DOB === "") {
    errorValidation.DOB = "Please enter birth date name";
  }

  if (customerInfo.Gender === "") {
    errorValidation.Gender = "Please select gender";
  }

  return errorValidation;
};

export const contactinformationErr = (customerInfo) => {
  const errorValidation = {};
  if (customerInfo.billingphone === "") {
    errorValidation.billingphone = "Please enter billing phone number";
  } else if (Phone_Pattern.test(customerInfo.billingphone)) {
    errorValidation.billingphone = "Please enter valid billing phone number";
  }

  if (customerInfo.email === "") {
    errorValidation.email = "Please enter email";
  } else if (!Email_Pattern.test(customerInfo.email)) {
    errorValidation.email = "Please enter valid email";
  }
  return errorValidation;
};

export const fareSoldOutRoute = (singleFlight) => {
  const length = singleFlight.flights.currentFlight.outBound.length;
  const firstdata = singleFlight.flights.currentFlight.outBound[0];
  const lastdata = singleFlight.flights.currentFlight.outBound[length - 1];
  const fromAirport = AirportData.find(
    (item) => item.airportCode === firstdata.fromAirport
  );
  const toAirport = AirportData.find(
    (item) => item.airportCode === lastdata.toAirport
  );
  const inlt = fromAirport.countryCode === toAirport.countryCode ? false : true;

  if (singleFlight.flights.TripType === 2) {
    const inBoundData = singleFlight.flights.currentFlight.inBound[0];
    const roundlink = `/flight/listing?tra=${firstdata.fromAirport}-${
      lastdata.toAirport
    }&dd=${moment(firstdata.depDate).format("MM/DD/YYYY")}&rd=${moment(
      inBoundData.depDate
    ).format("MM/DD/YYYY")}&aci=${singleFlight.flights.adultsCount}-${
      singleFlight.flights.childrenCount
    }-${singleFlight.flights.infantsCount}&tc=${
      singleFlight.flights.TripType
    }-1&intl=${inlt}`;
    return roundlink;
  } else {
    const oneWaylink = `/flight/listing?tra=${firstdata.fromAirport}-${
      lastdata.toAirport
    }&dd=${moment(firstdata.depDate).format("MM/DD/YYYY")}&aci=${
      singleFlight.flights.adultsCount
    }-${singleFlight.flights.childrenCount}-${
      singleFlight.flights.infantsCount
    }&tc=${singleFlight.flights.TripType}-1&intl=${inlt}`;
    return oneWaylink;
  }
};
