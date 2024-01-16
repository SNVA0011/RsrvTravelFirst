import React from "react";
import { Icon } from "@iconify/react";

const AirlineFaqs = ({ data, children }) => {
  return (
    <>
      <div className="why-choose-services">
        <div className="section-heading">
          <p className="ahsub">{data?.subtitle}</p>
          <h3 className="fw-bold route-hpop">{data?.title}</h3>
        </div>

        {data?.bullets?.length > 0 && (
          <ul className="bullets-abtdis row">
            {data?.bullets?.map((item, index) => {
              return (
                <li className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
                  <span className="d-inline-flex">
                    <Icon icon="solar:star-bold" color="white" />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
        )}

        {children}
      </div>
    </>
  );
};

export default AirlineFaqs;
