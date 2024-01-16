import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useWindowSize from "../../hooks/useWindowSize";

const WhyChooseUs = ({ content }) => {
  const size = useWindowSize();

  return (
    <section className="why-us-choose">
      <Container className="spcmy-60">
        <div className="section-heading text-center">
          <p>Why Us</p>
          <h3>Why Choose Our Reservations Deal</h3>
        </div>

        {size.width > 1199 ? (
          <Row>
            {content.map((item, index) => {
              return (
                <Col xs={12} sm={6} lg={4} key={index}>
                  <div className="card stylereuse-1">
                    <div className="section-heading m-0">
                      <h3>0{index + 1}</h3>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        ) : (
          <Swiper
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
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="navswiper-site"
          >
            {content.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card stylereuse-1 mb-5">
                  <div className="section-heading m-0">
                    <h3>0{index + 1}</h3>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </section>
  );
};

export default WhyChooseUs;
