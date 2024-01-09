import moment from "moment";
import AirportData from "../component/staticJson/AirportData.json";
import { addDate } from "./dateCal";
import { SET_SESSION_STROAGE } from "./clientStorage";
export const initialState = {
  tripType: "1",
  adult: 1,
  infant: 0,
  child: 0,
  fromDate: addDate(new Date(), 3),
  toDate: "",
  cabinClass: 1,
  from: {
    airportCode: "DCA",
    airportName: "Ronald Reagan Washington National",
    cityCode: "WAS",
    cityName: "Washington, D.C.",
    countryCode: "US",
    countryName: "United States",
    continent: "North America",
  },
  to: {
    airportCode: "ABR",
    airportName: "Aberdeen Regional",
    cityCode: "ABR",
    cityName: "Aberdeen",
    countryCode: "US",
    countryName: "United States",
    continent: "North America",
  },
  intl: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "From":
      const intl =
        action.payload.countryCode === "IN" && state.to.countryCode === "IN"
          ? false
          : true;
      return { ...state, from: action.payload, intl: intl };
    case "To":
      const intls =
        action.payload.countryCode === "IN" && state.from.countryCode === "IN"
          ? false
          : true;
      return { ...state, to: action.payload, intl: intls };
    case "Swap":
      return { ...state, from: state.to, to: state.from };
    case "Adults":
      return { ...state, adult: state.adult + 1 };
    case "Adults-":
      return { ...state, adult: state.adult - 1 };
    case "Child":
      return { ...state, child: state.child + 1 };
    case "Child-":
      return { ...state, child: state.child - 1 };
    case "Infants":
      return { ...state, infant: state.infant + 1 };
    case "Infants-":
      return { ...state, infant: state.infant - 1 };
    case "fromDate":
      return {
        ...state,
        fromDate: action.payload,
      };
    case "toDate":
      return {
        ...state,
        fromDate: action.payload.firstDate,
        toDate: action.payload.second,
      };
    case "cabinClass":
      return { ...state, cabinClass: action.payload };
    case "tripType":
      return {
        ...state,
        tripType: action.payload,
        toDate: action.payload === "2" ? action.toDate : "",
      };
    case "initialData":
      return action.payload;
    default:
      initialState;
  }
};

export const createInitialState = (data) => {
  try {
    const fromAndTo = data.tra.split("-");
    const aiportName = AirportData.filter((item) => {
      return fromAndTo.some((items) => item.airportCode === items);
    });
    const from = aiportName.find((item) => item.airportCode === fromAndTo[0]);
    const to = aiportName.find((item) => item.airportCode === fromAndTo[1]);
    const adult = Number(data.aci.split("-")[0]);
    const child = Number(data.aci.split("-")[1]);
    const infant = Number(data.aci.split("-")[2]);
    const cabinClass = Number(data.tc.split("-")[1]);
    const tripType = data.tc.split("-")[0];
    const fromData = data.dd;
    const toDate = data.rd;
    return {
      tripType: tripType,
      adult: adult,
      infant: infant,
      child: child,
      fromDate: moment(fromData)._d,
      toDate: toDate === undefined ? "" : moment(toDate)._d,
      cabinClass: cabinClass,
      from: from,
      to: to,
      intl: data.intl,
    };
  } catch (error) {
    console.log("error", error.message);
    return error.message;
  }
};

export const handleswapfl = (serachDataDispatch, setSwapfl, swapfl) => {
  setSwapfl(!swapfl);
  serachDataDispatch({ type: "Swap" });
};

export const createurlObj = (data, currencyCode) => {
  try {
    const tripType = data.hasOwnProperty("tripType")
      ? data.tripType
      : data.tc.split("-")[0];
    const cabinClass = data.hasOwnProperty("cabinClass")
      ? data.cabinClass
      : data.tc.split("-")[1];
    const adult = data.hasOwnProperty("adult")
      ? data.adult
      : data.aci.split("-")[0];
    const child = data.hasOwnProperty("child")
      ? data.child
      : data.aci.split("-")[1];
    const infant = data.hasOwnProperty("infant")
      ? data.infant
      : data.aci.split("-")[2];
    const fromDate = data.hasOwnProperty("fromDate") ? data.fromDate : data.dd;
    const toDate = data.hasOwnProperty("toDate") ? data.toDate : data.rd;
    const originAirport = data.hasOwnProperty("tra")
      ? data.tra.split("-")[0]
      : data.from.airportCode;
    const destinationAirport = data.hasOwnProperty("tra")
      ? data.tra.split("-")[1]
      : data.to.airportCode;
    return {
      tripType: tripType,
      adult: adult,
      infant: infant,
      child: child,
      fromDate: moment(fromDate).format("MM/DD/YYYY"),
      toDate:
        toDate === undefined || toDate.length === 0
          ? ""
          : moment(toDate).format("MM/DD/YYYY"),
      cabinClass: cabinClass,
      originAirport: originAirport,
      destinationAirport: destinationAirport,
      intl: data.intl,
      currencyCode: currencyCode,
    };
  } catch (error) {
    console.log("error", error.message);
    return error.message;
  }
};

export const Searchsumbit = (serachData, router) => {
  SET_SESSION_STROAGE("serachData", serachData);
  if (serachData.from.airportCode !== serachData.to.airportCode) {
    if (serachData.tripType === "1") {
      router.push({
        pathname: "/flight/listing",
        query: {
          tra: `${serachData.from.airportCode}-${serachData.to.airportCode}`,
          dd: moment(serachData.fromDate).format("MM/DD/YYYY"),
          aci: `${serachData.adult}-${serachData.child}-${serachData.infant}`,
          tc: `${serachData.tripType}-${serachData.cabinClass}`,
          intl: serachData.intl,
        },
      });
    }
    if (serachData.tripType === "2") {
      router.push({
        pathname: "/flight/listing",
        query: {
          tra: `${serachData.from.airportCode}-${serachData.to.airportCode}`,
          dd: moment(serachData.fromDate).format("MM/DD/YYYY"),
          rd: moment(serachData.toDate).format("MM/DD/YYYY"),
          aci: `${serachData.adult}-${serachData.child}-${serachData.infant}`,
          tc: `${serachData.tripType}-${serachData.cabinClass}`,
          intl: serachData.intl,
        },
      });
    }
  }
};
