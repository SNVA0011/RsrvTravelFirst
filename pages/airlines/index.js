import React from "react";
import PageHead from "../../component/common/PageHead";
import FlgModEngine from "../../component/flightlist/FlgModEngine";
import { Hostname } from "../../utils/static";
import { Container } from "react-bootstrap";
import AirlinesListBox from "../../component/airline/AirlinesListBox";
import AirlineLgContent from "../../component/airline/AirlineLgContent";
import BreadCrumbBlue from "../../component/airline/BreadCrumbBlue";
import AirlineFaqs from "../../component/airline/AirlineFaqs";
import { Icon } from "@iconify/react";
import Link from "next/link";
import FaqList from "../../component/common/FaqList";
import { getairline } from "../api/GetAirline";

const index = ({ response }) => {
  return (
    <section className="airlines-page">
      <PageHead
        title={`Find List of Top Airlines,Flights & Low Cost Airlines Tickets`}
        description={`Get here List of Top Airlines,Top flights,Low Cost Airlines Tickets world wide at ${Hostname}`}
        keywords={`Top Airlines,Low Cost Airlines Tickets,cheap airlines tickets,Top flight tickets`}
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
              title: "Airlines",
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
                  Airlines Overview
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

      <section className="airlines-bgplane spcmy-60 overflow-hidden bg-white zindex-0">
        <Container>
          <AirlinesListBox airline={response} />

          <AirlineLgContent
            subtitle="Airlines tickets"
            title="Get low cost airlines tickets with best discounts"
          >
            <p>
              Many airline services provides the best traveling experience with
              all the facilities but all at a very low fare. These low cost
              airlines are best for vacation plans, or regular official tours
              etc. Person can get huge discounts, mileage points and maximum
              money back in case of cancellation. So these low cost airlines are
              best to travel around with fun and comfort as well.
            </p>
            <p>
              Whenever you plan for a trip, just log on to the page,{" "}
              <Link href="http://www.reservationsdeal.in" target="_blank">
                <a className="fw-semibold">http://www.reservationsdeal.in</a>
              </Link>{" "}
              and find out everything you need for a comfortable yet affordable
              trip.
            </p>
          </AirlineLgContent>

          <section className="wf-100  spcmb-60">
            <hr className="hr-airline-als" />
          </section>

          <AirlineFaqs
            data={{
              subtitle: "Frequently Asked Questions",
              title: "How can we help you ?",
              bullets: ["Quality Services", "Affordable Cost", "Professional"],
            }}
          >
            <FaqList
              content={[
                {
                  title: "Q : What is the local food of Pune one should try?",
                  paragraph: `<div className="tab-content">
                  <p><b>A :</b>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                  </div>`,
                },
                {
                  title:
                    "Q : Which beach of Mumbai is better - Chowpatty or Juhu?",
                  paragraph: `<div className="tab-content">
                  <p><b>A :</b>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                  </div>`,
                },
                {
                  title:
                    "Q : What is the local food of Kolkata one should try?",
                  paragraph: `<div className="tab-content">
                  <p><b>A :</b>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                  </div>`,
                },
              ]}
            />
          </AirlineFaqs>
        </Container>
      </section>
    </section>
  );
};

export default index;

export const getStaticProps = async () => {
  const { data, notFound } = await getairline();
  if (notFound) {
    return {
      notFound: true,
    };
  }
  return {
    props: { response: data.response },
  };
};
