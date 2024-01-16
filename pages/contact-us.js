import React from "react";
import BreadHero from "../component/BreadHero";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Col, Container, Row } from "react-bootstrap";
import PageHead from "../component/common/PageHead";
import ContactForm from "../component/contactUs/ContactForm";

const contact = () => {
  return (
    <>
      <PageHead
        title={`ReservationsDeal - ContactUs`}
        description={``}
        keywords={``}
      />

      <BreadHero title="Contact Us" imagePath="contact-bg.jpg">
        <ul className="bradcum container">
          <li>
            <Link href="/">Home</Link>{" "}
          </li>
          <li className="mr-2">
            <span>
              <Icon icon="mingcute:right-line" color="#DC391B" />
            </span>
          </li>
          <li>
            <p>Contact Us</p>
          </li>
        </ul>
      </BreadHero>

      <div className="contact-info-us spcmy-60">
        <Container>
          <Row className="flex-row-reverse">
            <Col xs={12} sm={12} lg={6}>
              <div className="contact-info-wrap">
                <div className="howto-contact">
                  <h3 className="border-title2">How to Contact with Us?</h3>
                  <p className="pd-20">
                    Lorem ipsum dolor sit amet consectetur. Pellentesque sit
                    risus sed ac. Vitae sodales erat tortor elementum non mattis
                    faucibus. Elementum eu eget viverra quis aliquam diam
                    consequat nisl. Semper dolor sem ut at volutpat scelerisque
                    sed eu neque.
                  </p>
                </div>

                <div className="contact-info-box">
                  <div className="contact-info d-flex">
                    <div className="contact-info-icon d-flex align-items-center justify-content-center bg-title">
                      <Icon
                        className="color-black"
                        icon="fluent:location-28-filled"
                      />
                    </div>
                    <div className="media-body flex-grow-1">
                      <h4 className="contact-info-title">Our Location</h4>
                      <div className="contact-info-text">
                        SNVA LLC, 2 Industrial Park DR, Waldorf MD 20602, United
                        States
                      </div>
                      <a
                        href="http://maps.google.com/?q=SNVA LLC, 2 Industrial Park DR, Waldorf MD 20602, United States"
                        target="_blank"
                        className="find-us"
                      >
                        Find us on Google Map{" "}
                        <Icon icon="fluent:share-28-filled" />
                      </a>
                    </div>
                  </div>
                  <div className="contact-info d-flex">
                    <div className="contact-info-icon d-flex align-items-center justify-content-center">
                      <Icon className="color-black" icon="bxs:phone" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="contact-info-text phoneinf-urls">
                        <h4 className="contact-info-title">Phone</h4>
                        <a href="tel:+1 (800)630-3454">+1 (800)630-3454</a>
                        <a href="tel:+1 (860)900-0101">+1 (860)900-0101</a>
                        <a href="tel:+1 (240)270-0014">+1 (240)270-0014</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-info d-flex">
                    <div className="contact-info-icon d-flex align-items-center justify-content-center bg-theme">
                      <Icon className="color-black" icon="uiw:mail" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <h4 className="contact-info-title">Email Address</h4>
                      <div className="contact-info-text">
                        <a
                          className="email-us"
                          href="mailto:support@reservationsdeal.in"
                        >
                          support@reservationsdeal.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} lg={6}>
              <div className="contact-map">
                <iframe
                  width="100%"
                  id="gmap-canvas"
                  src="https://maps.google.com/maps?q=SNVA%20LLC,%202%20Industrial%20Park%20DR,%20Waldorf%20MD%2020602,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contact-page-form full-w">
        <div className="site-content site-contact spcmy-60">
          <div className="container">
            <div className="row d-flex align-items">
              <div className="col-12 col-lg-4">
                <div className="any-question">
                  <span className="talk-to-us">Talk to us</span>
                  <h3>Any Question? Feel free to contact</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eu egestas quam
                    faucibus felis dui sed. Mauris dui elementum in cursus
                    consequat eu lobortis lacus. Semper ut lacinia vitae aliquam
                    vulputate
                  </p>
                  <div className="social-media">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <Icon
                            className="color-black"
                            icon="entypo-social:facebook"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <Icon
                            className="color-black"
                            icon="fa6-brands:square-instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <Icon
                            className="color-black"
                            icon="fa6-brands:square-twitter"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <Icon
                            className="color-black"
                            icon="akar-icons:linkedinv1-fill"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-8 mt-5 mt-lg-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
