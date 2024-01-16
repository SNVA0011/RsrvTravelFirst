import React from "react";
import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

const AirlineInfo = ({ data }) => {
  return (
    <>
      <div className="contacts-airline">
        <div className="inner">
          {data?.length > 0 && (
            <Row>
              {data?.map((item, index) => {
                return (
                  <Col
                    xs={6}
                    lg={4}
                    key={index}
                    className="contacts-airline-info"
                  >
                    <div className="tp d-md-flex">
                      <div className="d-inline-flex">
                        <div className="m-auto">
                          <Icon icon="ph:airplane-tilt-thin" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ps-3 align-self-center">
                        <h5>{item.title}</h5>
                        <p className="mb-0">{item.content}</p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          )}
        </div>
      </div>
    </>
  );
};

export default AirlineInfo;
