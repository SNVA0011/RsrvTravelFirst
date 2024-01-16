import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Link from "next/link";

const AboutDescription = () => {
  return (
    <section className="about-description">
      <Container className="spcmy-60">
        <Row>
          <Col xs={12} lg={6} className="text-center">
            <img
              src="/images/aboutus-plane.png"
              className="aboutus-wfull"
              alt="About Us"
            />
            <ul className="bullets-abtdis text-center">
              <li>
                <Icon icon="ph:check-bold" color="#DC391B" /> Flights
              </li>
              <li>
                <Icon icon="ph:check-bold" color="#DC391B" /> Hotels
              </li>
              <li>
                <Icon icon="ph:check-bold" color="#DC391B" /> Packages
              </li>
            </ul>
            <div className="stylereuse-1">
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus
                felis dui sed. Mauris dui elementum in cursus consequat eu
                lobortis lacus. Semper ut lacinia vitae aliquam vulputate
              </p>
            </div>

            <Link href="/contact-us">
              <a className="btn ripple-wv reqinfo-btn" target="_blank">
                <span>Request for more info</span>
              </a>
            </Link>
          </Col>
          <Col xs={12} lg={6} className="mt-5 mt-lg-0 text-center text-lg-left">
            <div className="stylereuse-1">
              <div className="section-heading">
                <h3>About Us</h3>
              </div>
              <h4>
                We eliminate the weeds that take your freedom of getting cheap
                air tickets
              </h4>
              <p>
                We're driven by new technological trends, years of experience,
                and the willingness to serve the passengers as per their exact
                needs. Being the pioneer of the online travel industry, we have
                come up with a new revolution for millions of people who travel
                a lot or aspire to travel. Here, at ReservationsDeal, we aim in
                the ticket or hotel booking process easier and less
                time-consuming. A team of dedicated professionals is putting
                tremendous efforts in changing the scenario of the current phase
                of the travel industry.
              </p>
              <p>
                Each member of this team is highly experienced and hired after
                numerous stages of skill analysis. They are sufficiently trained
                and keep up-to-date knowledge about the recent trends of the
                aviation industry. We're engaged in dealing with the leading
                airlines, budget hotels, easy-to-reach resorts, cheap cruises,
                and local transport facilities. To do this job in a better way,
                we develop all our offered services in adherence to the exact
                need of our valued patrons. Plus, we have tied up with the
                leading airlines, budget hotels, easy-to-reach resorts, cheap
                cruises, and local transport facilities.
              </p>
              <p>
                As ReservationsDeal is engaged in making the trips affordable
                and user-friendly, we assure that our deals are cheaper than the
                deals introduced by most of the travel websites. Our discount
                offers are unparalleled and will surprise you if you are not
                familiar with them. It has been our consistent priority to
                delight the passengers with special offers and seasonal
                discounts every single occasion. We connect up-to-the-minute
                technology and the finest minds of the aviation industry, and it
                is giving us the freedom to serve the passengers in the way we
                planned to do it.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutDescription;
