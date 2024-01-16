import React from "react";
import PageHead from "../../component/common/PageHead";
import BreadCrumbBlue from "../../component/airline/BreadCrumbBlue";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import FlgModEngine from "../../component/flightlist/FlgModEngine";
import AirlineLgContent from "../../component/airline/AirlineLgContent";
import AirlineFaqs from "../../component/airline/AirlineFaqs";
import FaqList from "../../component/common/FaqList";
import AirlineInfo from "../../component/airline/AirlineInfo";
import AirlineRoutesTabs from "../../component/airline/AirlineRoutesTabs";
import AirlinesSlider from "../../component/airline/AirlinesSlider";
import AirlinesByLocation from "../../component/airline/AirlinesByLocation";
import DestRoutesTabs from "../../component/airline/DestRoutesTabs";
import {
  airlineRoute,
  desitnationRoute,
  getairline,
  getairlineDetails,
} from "../api/GetAirline";
import NoitemError from "../../component/common/NoitemError";
import { useRouter } from "next/router";
import Image from "next/image";

const Slug = ({ airlineDetails, airline, airlineRouteresult, desitnation }) => {
  const router = useRouter();

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

  const DomesticFlight = airline?.filter(
    (item) => item.airlineType === "Domestic"
  );

  return (
    <section className="airlines-details wf-100">
      {airlineDetails !== null > 0 && airline.length > 0 ? (
        <>
          <PageHead
            title={airlineDetails[0].title}
            description={airlineDetails[0].description}
            keywords={airlineDetails[0].keyword}
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
                ],
                current: {
                  title: airlineDetails[0].heading,
                  url: `/airlines/${airlineDetails[0].url}`,
                },
              }}
            />
          </div>

          <section className={`flight-listing clearfix  clearfix wf-100 mdf`}>
            <div className="wf-100 page-title-airline">
              <Container>
                <div className="section-heading m-0">
                  <h3 className="text-white">
                    <span className="d-inline-block">
                      <span className="d-none d-md-inline-block">
                        Book flights with
                      </span>{" "}
                      {airlineDetails[0].heading}
                      <div className="fluent-inline ms-3">
                        <Icon icon="fluent:send-16-filled" color="#DC391B" />
                        <Icon icon="fluent:send-16-filled" color="#DC391B" />
                      </div>
                    </span>
                  </h3>
                </div>
              </Container>
            </div>
            <FlgModEngine loading={false} />
          </section>

          <section className="spcmt-60 wf-100 zindex-0 bg-white">
            <Container>
              <AirlinesByLocation
                title={airlineDetails[0].heading}
                flightschedule={false}
                airlineImg={
                  airlineDetails[0].url.split("-")[
                    airlineDetails[0].url.split("-").length - 1
                  ]
                }
                tabdefault={0}
                tabshow={{
                  domestic: true,
                  international: true,
                }}
              />

              <section className="wf-100 spcmb-60">
                <hr className="hr-airline-als" />
              </section>

              <Row className="align-items-center">
                <Col xs={12} xl={9} className="spcmb-60">
                  <div className="section-heading">
                    <p className="ahsub">About</p>
                    <h3 className="fw-bold mt-0">
                      {airlineDetails[0].heading} Information
                    </h3>
                  </div>

                  <AirlineInfo
                    data={[
                      {
                        title: "IATA Code",
                        content: airlineDetails[0].iataCode,
                      },
                      { title: "Routes", content: airlineDetails[0].routes },
                      {
                        title: "Top route",
                        content: airlineDetails[0].topRoute,
                      },
                      {
                        title: "Airports served	",
                        content: airlineDetails[0].airportServed,
                      },
                      {
                        title: "Top airport",
                        content: airlineDetails[0].topAirport,
                      },
                      {
                        title: "Website",
                        content: airlineDetails[0].websiteUrl,
                      },
                    ]}
                  />
                </Col>

                <Col xs={12} xl={3} className="spcmb-60 d-none d-xl-block">
                  <Image
                    src="/images/airport-waiting.png"
                    alt="airport-waiting"
                    className="airline-waiting w-100"
                    width={269}
                    height={396}
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <AirlineLgContent
                    subtitle="About"
                    title={`Overview of ${airlineDetails[0].heading}`}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: airlineDetails[0].content,
                      }}
                    />
                  </AirlineLgContent>

                  <section className="wf-100 spcmy-60">
                    <hr className="hr-airline-als" />
                  </section>

                  <div className="wf-100 spcmb-60">
                    <AirlineFaqs
                      data={{
                        subtitle: "Frequently Asked Questions",
                        title: airlineDetails[0].heading,
                        bullets: [
                          "Quality Services",
                          "Affordable Cost",
                          "Professional",
                        ],
                      }}
                    >
                      <FaqList
                        content={[
                          {
                            title: airlineDetails[0].question1,
                            paragraph: airlineDetails[0].answer1,
                          },
                          {
                            title: airlineDetails[0].question2,
                            paragraph: airlineDetails[0].answer2,
                          },
                          {
                            title: airlineDetails[0].question3,
                            paragraph: airlineDetails[0].answer3,
                          },
                          {
                            title: airlineDetails[0].question4,
                            paragraph: airlineDetails[0].answer4,
                          },
                          {
                            title: airlineDetails[0].question5,
                            paragraph: airlineDetails[0].answer5,
                          },
                        ]}
                      />
                    </AirlineFaqs>
                  </div>

                  <AirlinesSlider
                    data={{
                      title: "Airlines",
                      subtitle: "Top Other Domestic Airlines",
                      type: "Domestic",
                    }}
                    slidedelay={1200}
                    Flight={DomesticFlight}
                  />
                </Col>
              </Row>
            </Container>

            <div className="airlines-page airgray-k">
              <Container className="spcmt-60">
                <AirlineRoutesTabs airlineRouteresult={airlineRouteresult} />
              </Container>
            </div>

            <div className="airlines-page sch">
              <Container className="spcmy-60">
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
  const { data, notFound } = await getairline();
  const { datas, Found } = await getairlineDetails(slug);
  const { airlineRouteresult, err } = await airlineRoute(slug);
  const { desitnationR, desitnationerr } = await desitnationRoute();
  const airline = data.response;
  const airlineDetails = datas.response;
  const airlineRouter = airlineRouteresult.response;
  const desitnation = desitnationR.response;
  if (Found || notFound || err || desitnationerr) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      airlineDetails: airlineDetails,
      airline: airline,
      airlineRouteresult: airlineRouter,
      desitnation: desitnation,
    },
  };
};
