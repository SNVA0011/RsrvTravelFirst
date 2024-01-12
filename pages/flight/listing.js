import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FlgModEngine from "../../component/flightlist/FlgModEngine";
import PageHead from "../../component/common/PageHead";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GET_SESSION_STROAGE } from "../../utils/clientStorage";
import { flightSearchApi } from "../../ApiCall/FlightSearchApi";
import Result from "../../component/flightlist/Result";
import RoundResult from "../../component/flightlist/RoundResult";
import { createurlObj } from "../../utils/flightSearch";
import { SET_ERROR } from "../../Redux/reducers/errorhandle";
import FlightLoadBox from "../../component/flightlist/FlightLoadBox";
import FlightNotFound from "../../component/flightlist/FlightNotFound";
import FlightErrorMsg from "../../component/flightlist/FlightErrorMsg";
import SessionTimeOut from "../../component/flightlist/SessionTimeOut";

const Listing = () => {
  const [search, setSearch] = useState({});
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.ErrorMessage);
  const { currencyCode } = useSelector((state) => state.Currency);
  const data = GET_SESSION_STROAGE("serachData");
  const Currencydata = GET_SESSION_STROAGE("currencyCode");
  const Currency =
    Currencydata === undefined ? currencyCode : Currencydata.value;
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [flightResponse, setFlightResponse] = useState({
    loading: true,
    flightData: null,
    error: null,
  });

  useEffect(() => {
    const searchData =
      Object.keys(router.query).length !== 0 ? router.query : data;
    if (searchData === undefined || searchData === null) {
      setFlightResponse({ ...flightResponse, loading: true });
    } else if (Object.keys(searchData).length !== 0) {
      const datas = createurlObj(searchData, Currency);
      if (typeof datas === "object") {
        setSearch(datas);
        flightSearchApi(datas, flightResponse, setFlightResponse, Currency);
        dispatch(SET_ERROR(null));
      } else {
        dispatch(SET_ERROR(datas));
      }
    } else {
      dispatch(
        SET_ERROR(
          "broken link or entered a URL that doesn't exist on this site."
        )
      );
    }
  }, [router, Currency]);

  const handleRefresh = () => {
    flightSearchApi(search, flightResponse, setFlightResponse, Currency);
    setOpen(false);
  };

  const handleNewSerarch = () => {
    setOpen(false);
    router.push("/");
  };

  return (
    <>
      <PageHead
        title={`Flight Listing : ReservationsDeal`}
        description={``}
        keywords={``}
      />
      {errorMessage === null ? (
        <div className="clearfix flight-listing h-auto">
          <FlgModEngine loading={flightResponse.loading} />
          {flightResponse.error === null ? (
            <div className="flightlist-wrapper h-fullvh">
              <Container className="spcmy-60">
                {flightResponse.loading ? (
                  <FlightLoadBox search={search} />
                ) : (
                  <>
                    {flightResponse.flightData.length !== 0 ? (
                      <>
                        {search.tripType === "1" ? (
                          <Result
                            flightResponse={flightResponse}
                            search={search}
                          />
                        ) : (
                          <RoundResult
                            flightResponse={flightResponse}
                            search={search}
                          />
                        )}
                      </>
                    ) : (
                      <FlightNotFound search={search} />
                    )}

                    <SessionTimeOut
                      imag={"/images/hourglass.png"}
                      searchfrom={search.originAirport}
                      searchTo={search.destinationAirport}
                      time={1200000} //millisecond
                      open={open}
                      setOpen={setOpen}
                      handleRefresh={handleRefresh}
                      handleNewSerarch={handleNewSerarch}
                      buttonShow={true}
                      heading={"Your Session has been Expired"}
                      refreshlebel={"Refresh"}
                    />
                  </>
                )}
              </Container>
            </div>
          ) : (
            <FlightErrorMsg
              search={search}
              lgImage={`/images/airport-internal.jpg`}
              title={`Internal Server Error`}
            >
              Sorry, there were some technical issues while processing your
              request.
            </FlightErrorMsg>
          )}
        </div>
      ) : (
        <FlightErrorMsg
          lgImage={`/images/airport-noflight.jpg`}
          smImage={`/images/err-found.jpg`}
          title={`Looks like you are lost!`}
        >
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </FlightErrorMsg>
      )}
    </>
  );
};

export default Listing;
