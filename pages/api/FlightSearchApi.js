import axios from "axios";
import { api_traveloes, siteid } from "../../utils/static";


export const flightSearchApi = async (
  data,
  flightResponse,
  setFlightResponse,
  currency
) => {
  try {
    setFlightResponse({
      flightData: null,
      loading: true,
      error: null,
    });
    const searchBody = {
      TripType: Number(data.tripType),
      Trip: data.intl === false || data.intl === "false" ? 1 : 2,
      Adult: Number(data.adult),
      Child: Number(data.child),
      Infant: Number(data.infant),
      SiteID: siteid,
      RTF: false,
      NonStop: false,
      PreferredClass: Number(data.cabinClass),
      PreferredCarrier: "",
      Segments: [
        {
          Origin: data.originAirport,
          Destination: data.destinationAirport,
          DepartDate: data.fromDate,
          ReturnDate: data.toDate,
          PreferredClass: data.cabinClass,
        },
      ],
      Currency: currency,
      Meta: "METAAPI_SITE",
    };
    const response = await axios.post(
      `${api_traveloes}/v1/api/searchResultAll`,
      searchBody
    );
    if (response.data.flightResult.length > 0) {
      setFlightResponse({
        error: null,
        loading: false,
        flightData: response.data,
      });
    } else {
      setFlightResponse({
        error: null,
        loading: false,
        flightData: [],
      });
    }
  } catch (error) {
    console.log("error", error.message);
    setFlightResponse({
      ...flightResponse,
      loading: false,
      error: error.message,
    });
  }
};
