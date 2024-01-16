import Link from "next/link";
import React from "react";

const AirlineLgContent = ({ title, subtitle, children }) => {
  return (
    <>
      <section className="getlow-disc spcmb-60">
        <div className="section-heading">
          <p className="ahsub">{subtitle}</p>
          <h3 className="fw-bold mt-0">{title}</h3>
        </div>
        <div className="content-ullist">{children}</div>
      </section>
    </>
  );
};

export default AirlineLgContent;
