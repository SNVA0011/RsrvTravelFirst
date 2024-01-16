import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";


export default function BlogHero({ bloglisting, listing, bgImg }) {

    return (
        <div className='wf-100'>

            {bgImg.status ?
                <section className={`tcr-page-banner inner`} style={{ backgroundImage: `url(${bgImg.url ? bgImg.url : '/images/inflight-aircraft-lg.png'})` }}></section>
                :
                <section className={`tcr-page-banner main`}></section>
            }

            {bloglisting && <section className="tcr-page-breadcrumb">
                <Container>
                  
                {listing ? (
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 12,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 24,
                                    } 
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper"
                            >
                                {listing.map((item, index) => (
                                    <SwiperSlide>
                                        <Card>
                                            <Card.Title>
                                                {item.title}
                                            </Card.Title>
                                            <Card.Text>
                                                {item.discription}
                                            </Card.Text>
                                            {/* <Card.Link href={item.url}>{item.anchortext}</Card.Link> */}
                                        </Card>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            ""
                        )}
                </Container>
            </section>}
        </div>
    )
}


