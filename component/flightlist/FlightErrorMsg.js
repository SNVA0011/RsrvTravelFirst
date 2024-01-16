import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";

const FlightErrorMsg = ({ lgImage, smImage, title, children }) => {
  return (
    <div className="flight-loaderr wf-100">
      <div className="pageerror-wrap full-w text-center wf-100 ">
        <div className="pageerror-inner">
          <div className="noflight mb-4">
            <img src={lgImage} />
          </div>
          <div className="container">
            <div className="mb-4">
              {smImage && (
                <div className="imgwr mb-3">
                  <img src={smImage} />
                </div>
              )}
              <h4 className="mb-4"> {title} </h4>
              <p>{children}</p>
            </div>
            <Link href={`/`}>
              <a className="btn btn-site w-auto ripple-wv">
                <span>
                  <FontAwesomeIcon icon={faArrowLeftLong} className="me-2" />
                  {`Try again`}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightErrorMsg;
