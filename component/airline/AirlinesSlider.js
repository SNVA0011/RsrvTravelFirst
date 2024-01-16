import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css/navigation";

const AirlinesSlider = ({ data, slidedelay, Flight }) => {
  const length = Flight.length;
  const slideOpt = {
    initialSlide: 0,
    spaceBetween: 10,
    navigation: length > 8 ? true : false,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: slidedelay,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      479: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 24,
      },
    },
    modules: [Navigation, Autoplay, Pagination],
  };

  return (
    <div className="flight-offer-deals popular-arlineswipe wf-100">
      <div className="minifl-spc px-0">
        <div className="section-heading">
          <p className="ahsub">{data.title}</p>
          <h3 className="fw-bold">{data.subtitle}</h3>
        </div>
      </div>

      <Swiper className="navswiper-site" {...slideOpt}>
        {Flight.map((item) => (
          <SwiperSlide>
            <Link href={`/airlines/${item.url}`}>
              <a className="d-flex" target="_blank">
                <div className="m-auto">
                  <img src={`/images/airline-logo/${item.iataCode}.png`} />
                </div>
                <span>{item.heading}</span>
              </a>
            </Link>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/CM.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/DL.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/EK.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/QK.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/6E.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/UK.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/SY.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/UA.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/SG.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/airlines/american-airlines-aa"}>
            <a className="d-flex" target="_blank">
              <div className="m-auto">
                <img src="/images/airline-logo/TK.png" />
              </div>
              <span>{data.type}</span>
            </a>
          </Link>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default AirlinesSlider;
