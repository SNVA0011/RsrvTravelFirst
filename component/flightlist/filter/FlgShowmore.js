import Image from "next/image";
import React from "react";

const FlgShowmore = ({ text, onClick }) => {
  return (
    <div className="showflg-footer btn" onClick={onClick}>
      {text}{" "}
      <img
        src="/images/clstrv-arrow.png"
        height={15}
        width={15}
        alt="arrow"
      />
    </div>
  );
};

export default FlgShowmore;
