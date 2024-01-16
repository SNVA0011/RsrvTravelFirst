import React from "react";
import PageHead from "../../component/common/PageHead";
import BreadCrumbBlue from "../../component/airline/BreadCrumbBlue";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import FlgModEngine from "../../component/flightlist/FlgModEngine";
import AirlineLgContent from "../../component/airline/AirlineLgContent";
import Link from "next/link";
import AirlineFaqs from "../../component/airline/AirlineFaqs";
import FaqList from "../../component/common/FaqList";
import FlightsOnewayRoutes from "../../component/airline/FlightsOnewayRoutes";
import AirlinesSlider from "../../component/airline/AirlinesSlider";
import AirlinesByLocation from "../../component/airline/AirlinesByLocation";
import { useRouter } from "next/router";
import FlightsTwowayRoutes from "../../component/airline/FlightsTwowayRoutes";
import {
  desitnationRoute,
  destinationDetails,
  getairline,
} from "../api/GetAirline";
import NoitemError from "../../component/common/NoitemError";
import AirlineAirport from "../../component/airline/AirlineAirport";
import Image from "next/image";

const Slug = ({ airline, desitnation, desitinationDeta }) => {
  const router = useRouter();
  // true means => Roundway
  // false means => Oneway

  const pathQuery = router?.query?.Slug?.includes("-to-");
  const airlineImg = [
    "I5",
    "CM",
    "DL",
    "EK",
    "QK",
    "6E",
    "UK",
    "SY",
    "UA",
    "SG",
    "TK",
    "TK",
    "I5",
    "CM",
    "DL",
    "EK",
    "QK",
    "6E",
    "UK",
    "SY",
    "UA",
    "SG",
    "TK",
    "TK",
    "I5",
    "CM",
    "DL",
    "EK",
    "QK",
    "6E",
    "UK",
    "SY",
    "UA",
    "SG",
    "TK",
    "TK",
  ];
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
      desitnation.length > 0 &&
      desitinationDeta.length > 0 ? (
        <>
          <PageHead
            title={desitinationDeta[0].title}
            description={desitinationDeta[0].description}
            keywords={desitinationDeta[0].keywords}
          />

          <div className="d-none d-md-block">
            <BreadCrumbBlue
              data={{
                home: {
                  title: "Home",
                  url: "/",
                },
                other: [],
                current: {
                  title: desitinationDeta[0].heading,
                  url: "/",
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
                      {desitinationDeta[0].heading}
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
              {pathQuery ? (
                <AirlinesByLocation
                  title="Goa to Miami"
                  flightschedule={true}
                  airlineImg={"uk"}
                  triptype="Flights from"
                  tabdefault={0}
                  tabshow={{
                    domestic: true,
                    international: false,
                  }}
                />
              ) : (
                <AirlinesByLocation
                  title="New Delhi"
                  triptype="Flights to"
                  flightschedule={true}
                  airlineImg={"uk"}
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
                    title={desitinationDeta[0].heading}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: desitinationDeta[0].content,
                      }}
                    />
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam hendrerit nisi sed sollicitudin pellentesque. Nunc
                      posuere purus rhoncus pulvinar aliquam. Ut aliquet
                      tristique nisl vitae volutpat. Nulla aliquet porttitor
                      venenatis. Donec a dui et dui fringilla consectetur id nec
                      massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                      fermentum vel tincidunt neque. Sed sed lacinia lectus.
                      Duis sit amet sodales felis. Duis nunc eros, mattis at dui
                      ac, convallis semper risus. In adipiscing ultrices tellus,
                      in suscipit massa vehicula eu.
                    </p>
                    <p>
                      Whenever you plan for a trip, just log on to the page,{" "}
                      <Link
                        href="http://www.reservationsdeal.in"
                        target="_blank"
                      >
                        <a className="fw-semibold">
                          http://www.reservationsdeal.in
                        </a>
                      </Link>{" "}
                      and find out everything you need for a comfortable yet
                      affordable trip.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam hendrerit nisi sed sollicitudin pellentesque. Nunc
                      posuere purus rhoncus pulvinar aliquam. Ut aliquet
                      tristique nisl vitae volutpat. Nulla aliquet porttitor
                      venenatis. Donec a dui et dui fringilla consectetur id nec
                      massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                      fermentum vel tincidunt neque. Sed sed lacinia lectus.
                      Duis sit amet sodales felis.{" "}
                    </p>
                    <br></br>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam hendrerit nisi sed sollicitudin pellentesque. Nunc
                      posuere purus rhoncus pulvinar aliquam. Ut aliquet
                      tristique nisl vitae volutpat. Nulla aliquet porttitor
                      venenatis. Donec a dui et dui fringilla consectetur id nec
                      massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                      fermentum vel tincidunt neque. Sed sed lacinia lectus.
                      Duis sit amet sodales felis. Duis nunc eros, mattis at dui
                      ac, convallis semper risus.
                    </p> */}

                    {/* <div className="mt-5">
                      <div className="section-heading mb-3">
                        <p className="ahsub">Airport Information</p>
                        <h3 className="fw-bold mt-0 mb-0">
                          Delhi Airport Contact Info{" "}
                          <Icon
                            icon="ph:airplane-takeoff-thin"
                            color="#DC391B"
                            className="airplane-hm"
                          />
                        </h3>
                      </div>
                      <div className="tbsed-row">
                        <div className="table-responsive">
                          <table className="table table-striped tbsed">
                            <tbody>
                              <tr>
                                <th className="first" width="250">
                                  Airport Name
                                </th>
                                <td>Indira Gandhi International</td>
                              </tr>
                              <tr>
                                <th className="first" width="250">
                                  City Name
                                </th>
                                <td>New Delhi</td>
                              </tr>
                              <tr>
                                <th className="first" width="250">
                                  Continent Name
                                </th>
                                <td>Asia</td>
                              </tr>
                              <tr>
                                <th className="first" width="250">
                                  Address
                                </th>
                                <td>
                                  Indira Gandhi International Airport,Domestic
                                  terminal,Terminal 1-B,New Delhi-110
                                  037,ENQUIRIES PHONE NUMBER: (91) 11 25661080,
                                  FLIGHT INFORMATION NO: (91) 11 25601000 (DOM)/
                                  (91) 11 25602000 (INT)
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {pathQuery ? (
                      <div className="mt-5 pt-2">
                        <div className="section-heading mb-3">
                          <p className="ahsub">Airport Information</p>
                          <h3 className="fw-bold mt-0 mb-0">
                            Mumbai Airport Contact Info{" "}
                            <Icon
                              icon="ph:airplane-takeoff-thin"
                              color="#DC391B"
                              className="airplane-hm"
                            />
                          </h3>
                        </div>

                        <div className="tbsed-row">
                          <div className="table-responsive">
                            <table className="table table-striped tbsed">
                              <tbody>
                                <tr>
                                  <th className="first" width="250">
                                    Airport Name
                                  </th>
                                  <td>
                                    Chhatrapati Shivaji International Airport,
                                    Domestic Terminal
                                  </td>
                                </tr>
                                <tr>
                                  <th className="first" width="250">
                                    City Name
                                  </th>
                                  <td>Mumbai</td>
                                </tr>
                                <tr>
                                  <th className="first" width="250">
                                    Continent Name
                                  </th>
                                  <td>Asia</td>
                                </tr>
                                <tr>
                                  <th className="first" width="250">
                                    Address
                                  </th>
                                  <td>
                                    Terminal -1B (Santa Cruz), Mumbai - 400 099.
                                    INQUIRY NUMBER FOR INTERNATIONAL AIRPORT -
                                    26813000 INQUIRY NUMBER FOR DOMESTIC AIRPORT
                                    - 26264145/26264000
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )} */}
                    <AirlineAirport
                      airlineRouteDetailaResult={desitinationDeta}
                    />
                  </AirlineLgContent>

                  <section className="wf-100 spcmy-60">
                    <hr className="hr-airline-als" />
                  </section>

                  <div className="wf-100 spcmb-60">
                    <AirlineFaqs
                      data={{
                        subtitle: "Frequently Asked Questions",
                        title: `FAQ on ${desitinationDeta[0].heading}`,
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
                            title:
                              "Q : What is the cheapest Goa to Miami flight fare?",
                            paragraph: `<div className="tab-content">
                  <p><b>A :</b>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                  </div>`,
                          },
                          {
                            title:
                              "Q : Do airlines provide extra space for sleeping?",
                            paragraph: `<div className="tab-content">
                  <p><b>A :</b>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                  </div>`,
                          },
                          {
                            title: "Q : Can I carry my own food?",
                            paragraph: `<div className="tab-content">
                  <p><b>A :</b>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                  </div>`,
                          },
                          {
                            title:
                              "Will I be served alcohol on a Goa to Miami flight?",
                            paragraph: `<div className="tab-content">
                  <p><b>A :</b>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                  </div>`,
                          },
                          {
                            title:
                              "Can I book budget hotels near Miami Airport through the Internet?",
                            paragraph: `<div className="tab-content">
                  <p><b>A :</b>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                  </div>`,
                          },
                        ]}
                      />
                    </AirlineFaqs>
                  </div>

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

            <div className="airlines-page sch">
              <Container className="spcmy-60">
                {/* {pathQuery ? (
                  <FlightsTwowayRoutes
                    subtitle="All Flights Routes"
                    titleOne="More Flights from Goa"
                    titleTwo={[
                      "More Flights To Miami",
                      "More Flights from Miami",
                    ]}
                    desitnation={desitnation}
                  />
                ) : (
                  <FlightsOnewayRoutes
                    subtitle="All Flights Routes"
                    titleOne="Top Domestic Flights to New Delhi"
                    titleTwo="Top International Flights to New Delhi"
                    desitnation={desitnation}
                  />
                )} */}
                <FlightsOnewayRoutes
                  subtitle="All Flights Routes"
                  titleOne="Top Domestic Flights to New Delhi"
                  titleTwo="Top International Flights to New Delhi"
                  desitnation={desitnation}
                />
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
  const { desitnationR, desitnationerr } = await desitnationRoute();
  const data = desitnationR.response;
  if (desitnationerr) {
    return {
      notFound: true,
    };
  } else {
    let paths = [];
    data.map((item) => {
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
  const { desitnationR, desitnationerr } = await desitnationRoute();
  const { destinationDe, destinationDeEr } = await destinationDetails(slug);
  if (notFound || desitnationerr || destinationDeEr) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      airline: data.response,
      desitnation: desitnationR.response,
      desitinationDeta: destinationDe.response,
    },
  };
};
