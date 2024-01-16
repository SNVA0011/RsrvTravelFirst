import React from "react";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const AnimatebyNumber = ({ number, configs = [] }) => {
  return (
    <AnimatedNumbers
      includeComma
      animateToNumber={number}
      configs={configs}
    ></AnimatedNumbers>
  );
};

export default AnimatebyNumber;
