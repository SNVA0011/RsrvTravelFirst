import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Icon } from "@iconify/react";
import Image from "next/image";

const FlgDateSlider = ({
  ItineraryName,
  defaultsort,
  sortItems,
  dispatchFilter,
  dateSlider,
}) => {
  // sorting
  const [sort, setSort] = useState(defaultsort);

  // data slider
  const [datelist, setDatelist] = useState(15);
  const flgDates = useRef(null);

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ];

  const NavScroll = (type) => {
    const getWidth = flgDates.current.clientWidth + 6;

    if (type === "prev") {
      flgDates.current.scrollBy(-getWidth, 0);
    }
    if (type === "next") {
      flgDates.current.scrollBy(getWidth, 0);
    }
  };
  const handelSort = (item) => {
    setSort(item);
    const type = item.split(":")[1].trimStart().replaceAll(" ", "-");
    dispatchFilter({ type: type, payload: type });
  };

  const dateRef = dateSlider ? useRef({}) : null;
  useEffect(() => {
    if (dateSlider) {
      dateRef.current[datelist].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [datelist]);

  return (
    <section className="flglistfilter-head">
      <div className="flglistfilter-sort">
        <Row className="align-items-center">
          <Col xs={5}>
            <span className="itinerary-badge text-nowrap">
              <img src="/images/flight-takeoff.png" /> {ItineraryName}
            </span>
          </Col>
          <Col xs={7}>
            <div className="sort-right">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {sort}{" "}
                  <img
                    src="/images/clstrv-arrow.png"
                    height={15}
                    width={15}
                    alt="arrow"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    as={"button"}
                    onClick={() => {
                      setSort(sortItems[0]);
                    }}
                    className={sort === sortItems[0] ? "active" : null}
                  >
                    <Icon icon="bi:sort-up" /> {sortItems[0]}
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={"button"}
                    onClick={() => {
                      setSort(sortItems[1]);
                    }}
                    className={sort === sortItems[1] ? "active" : null}
                  >
                    <Icon icon="bi:sort-down" /> {sortItems[1]}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>

      {dateSlider && (
        <div className="flglistfilter-date">
          <button
            className="nv ripple-wv nav-prev d-flex align-items-center justify-content-center"
            onClick={() => {
              NavScroll("prev");
            }}
          >
            <div className="m-auto">
              <img src="/images/blog-arrow-left.png" />
            </div>
          </button>
          <ul className="flglistfilter-slide" ref={flgDates}>
            {Array(31)
              .fill(0)
              .map((item, index) => {
                const dateDay = index + 1;
                const getRef = (element) => dateRef.current.push(element);
                return (
                  <li
                    ref={(element) => (dateRef.current[index] = element)}
                    onClick={() => {
                      setDatelist(index);
                    }}
                    key={index}
                  >
                    <button
                      className={`flgdate-card ripple-wv d-flex align-items-center justify-content-center ${
                        index === datelist ? "active" : ""
                      }`}
                    >
                      <div className="m-auto">
                        <span>
                          {days[index]}, {dateDay} Aug
                        </span>
                        $ 47
                      </div>
                    </button>
                  </li>
                );
              })}
          </ul>

          <button
            className="nv ripple-wv nav-next d-flex align-items-center justify-content-center"
            onClick={() => {
              NavScroll("next");
            }}
          >
            <div className="m-auto">
              <img src="/images/blog-arrow-right.png" />
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default FlgDateSlider;
