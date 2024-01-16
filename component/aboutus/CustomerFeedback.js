import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Icon } from "@iconify/react";
import "swiper/css/effect-coverflow";

const CustomerFeedback = () => {
  return (
    <section className="customer-feedback overflow-hidden">
      <Container className="spcmy-60">
        <div className="section-heading text-center">
          <p>Testimonials</p>
          <h3>Our Customer Feedback</h3>
        </div>

        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="navswiper-site"
        >
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card mb-5">
                  <div className="inner stylereuse-1">
                    <Icon icon="fontisto:quote-left" color="#fbcec6" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Eu egestas quam
                      faucibus felis dui sed. Mauris dui elementum in cursus
                      consequat eu lobortis lacus. Semper ut lacinia vitae
                      aliquam vulputate lobortis lacus. Semper ut lacinia vitae
                      aliquam vulputate lobortis lacus. Semper ut{" "}
                    </p>
                  </div>
                  <hr></hr>
                  <div className="inner">
                    <Row className="align-items-center">
                      <Col className="customer-name" xs={12} sm={6}>
                        <div className="d-flex customer-flex align-items-center">
                          <div className="customer-img">
                            <img src="/images/tanju-ping.png" alt="Customer Image" />
                          </div>
                          <div className="customer-detail flex-grow-1">
                            <h5>Tan Ju Ping</h5>
                            <p>Businessman</p>
                          </div>
                        </div>
                      </Col>
                      <Col
                        className="customer-ratecol text-sm-right"
                        xs={12}
                        sm={6}
                      >
                        <img
                          src="/images/customer-rate.png"
                          alt="customer-rating"
                          className="customer-star"
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default CustomerFeedback;
