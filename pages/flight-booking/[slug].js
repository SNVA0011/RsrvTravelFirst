import React from "react";
import PageHead from "../../component/common/PageHead";
import BreadCrumbBlue from "../../component/airline/BreadCrumbBlue";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import FlgModEngine from "../../component/flightlist/FlgModEngine";
import AirlineLgContent from "../../component/airline/AirlineLgContent";
import AirlinesSlider from "../../component/airline/AirlinesSlider";
import AirlinesByLocation from "../../component/airline/AirlinesByLocation";
import { useRouter } from "next/router";
import AirlineRoutesTabs from "../../component/airline/AirlineRoutesTabs";
import DestRoutesTabs from "../../component/airline/DestRoutesTabs";
import {
  airlineRoute,
  airlineRouteDetails,
  desitnationRoute,
  getairline,
} from "../api/GetAirline";
import NoitemError from "../../component/common/NoitemError";
import AirlineAirport from "../../component/airline/AirlineAirport";
import Image from "next/image";

const Slug = ({
  airline,
  airlineRouteDetailaResult,
  airlineRouteresult,
  desitnation,
}) => {
  const router = useRouter();

  // true means => Roundway
  // false means => Oneway

  const pathQuery = router?.query?.slug?.includes("-to-");

  const DomesticFlight = airline?.filter(
    (item) => item.airlineType === "Domestic"
  );
  const InternationalFlight = airline?.filter(
    (item) => item.airlineType === "International"
  );

  if (router.isFallback) {
    return (
      <>
        <div className="wf-100 text-center full-w my-5 py-5">
          <div className="my-5 py-5">
          <Image
              src="/images/animpageload.gif"
              className="animpageload"
              alt="loader"
              width={60}
              height={60}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="airlines-details wf-100">
      {airline.length > 0 &&
        airlineRouteresult.length > 0 &&
        airlineRouteDetailaResult.length > 0 &&
        desitnation.length > 0 ? (
        <>
          <PageHead
            title={airlineRouteDetailaResult[0].title}
            description={airlineRouteDetailaResult[0].description}
            keywords={airlineRouteDetailaResult[0].keywords}
          />

          <div className="d-none d-md-block">
            <BreadCrumbBlue
              data={{
                home: {
                  title: "Home",
                  url: "/",
                },
                other: [
                  {
                    title: "Airlines",
                    url: "/airlines",
                  },
                  {
                    title: airlineRouteDetailaResult[0].pageType
                      .slice(0, -3)
                      .replace("-", " "),
                    url: `/airlines/${airlineRouteDetailaResult[0].pageType}`,
                  },
                ],
              }}
            />
          </div>

          <section className={`flight-listing clearfix  clearfix wf-100 mdf`}>
            <div className="wf-100 page-title-airline">
              <Container>
                <div className="section-heading m-0">
                  <h3 className="text-white">
                    {airlineRouteDetailaResult[0].heading} &nbsp;
                    <div className="fluent-inline">
                      <Icon icon="fluent:send-16-filled" color="#DC391B" />
                      <Icon icon="fluent:send-16-filled" color="#DC391B" />
                    </div>
                  </h3>
                </div>
              </Container>
            </div>
            <FlgModEngine loading={false} />
          </section>

          <section className="spcmy-60 wf-100 zindex-0 bg-white">
            <Container>
              {pathQuery ? (
                <AirlinesByLocation
                  title="Goa to Miami"
                  flightschedule={true}
                  airlineImg={"UK"}
                  triptype="Flights from"
                  tabdefault={0}
                  tabshow={{
                    domestic: true,
                    international: true,
                  }}
                />
              ) : (
                <AirlinesByLocation
                  title="New Delhi"
                  triptype="Flights to"
                  flightschedule={true}
                  airlineImg={"UK"}
                  tabdefault={0}
                  tabshow={{
                    domestic: true,
                    international: true,
                  }}
                />
              )}

              <section className="wf-100 spcmb-60">
                <hr className="hr-airline-als" />
              </section>

              <Row>
                <Col xs={12}>
                  <AirlineLgContent
                    subtitle="About"
                    title={
                      pathQuery
                        ? "Booking Flights from Goa to Miami Flights"
                        : "Booking Flights to New Delhi"
                    }
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: airlineRouteDetailaResult[0].content,
                      }}
                    />
                    <AirlineAirport
                      airlineRouteDetailaResult={airlineRouteDetailaResult}
                    />
                  </AirlineLgContent>

                  <section className="wf-100 spcmy-60">
                    <hr className="hr-airline-als" />
                  </section>
                  {DomesticFlight.length > 0 ? <AirlinesSlider
                    data={{
                      title: "Airlines",
                      subtitle: "Top Domestic Airlines",
                      type: "Domestic",
                    }}
                    slidedelay={1200}
                    Flight={DomesticFlight}
                  /> : null}
                  {InternationalFlight.length > 0 ? (
                    <AirlinesSlider
                      data={{
                        title: "Airlines",
                        subtitle: "Top International Airlines",
                        type: "International",
                      }}
                      slidedelay={1200}
                      Flight={InternationalFlight}
                    />
                  ) : null}
                </Col>
              </Row>

              <section className="wf-100">
                <hr className="hr-airline-als" />
              </section>
            </Container>

            <div className="airlines-page airgray-k">
              <Container className="spcmt-60">
                <AirlineRoutesTabs airlineRouteresult={airlineRouteresult} />
              </Container>
            </div>

            <div className="airlines-page sch">
              <Container className="spcmt-60">
                <DestRoutesTabs desitnation={desitnation} />
              </Container>
            </div>
          </section>
        </>
      ) : (
        <>
          <PageHead title={`404 Page Not Found`} description="" keywords="" />

          <Container className="my-5">
            <NoitemError
              title={`404 Page Not Found`}
              subtitle={`The page you are looking for was not found.`}
              link={`/`}
              linktext={`Back to Home`}
            />
          </Container>
        </>
      )}
    </section>
  );
};

export default Slug;

export const getStaticPaths = async () => {
  const { data, notFound } = await getairline();
  if (notFound) {
    return {
      notFound: true,
    };
  } else {
    let paths = [];
    data.response.map((item) => {
      return paths.push({ params: { slug: item.url } });
    });
    return {
      paths,
      fallback: true,
    };
  }
};

export const getStaticProps = async (context) => {
  const {
    params: { slug },
  } = context;
  const airlineCode = slug.split("-").find((ite) => ite.length === 2);
  const pageType = slug.split(airlineCode)[0].concat(airlineCode);
  const { airlineRouteresult, err } = await airlineRoute(pageType);
  const { airlineRouteDetailaResult, RouteDetailserr } =
    await airlineRouteDetails(slug, pageType);
  const { data, notFound } = await getairline();
  const { desitnationR, desitnationerr } = await desitnationRoute();

  if (notFound || err || RouteDetailserr || desitnationerr) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      airline: data.response,
      airlineRouteDetailaResult: airlineRouteDetailaResult.response,
      airlineRouteresult: airlineRouteresult.response,
      desitnation: desitnationR.response,
    },
  };
};
