import React from "react";
import ExclusOffer from "./banner/ExclusOffer";
import FlatDiscount from "./banner/FlatDiscount";
import FlgShowmore from "./filter/FlgShowmore";
import FlgDateSlider from "./filter/FlgDateSlider";
import SelectFlightCard from "./SelectFlightCard";
import { useState } from "react";
import ScrollTop from "../common/ScrollTop";

const SortingPrice = ["Price : High to Low", "Price : Low to High"];

const FlgModResult = ({ flightResponse, dispatchFilter, search }) => {
  const [count, setCount] = useState(2);
  const fligthLength = flightResponse.flightData.flightResult.length;
  const airline = flightResponse.flightData.airline;
  const airport = flightResponse.flightData.airport;
  const addMore = () => {
    if (fligthLength > count) {
      setCount(count + 10);
    }
  };

  return (
    <div className="flg-list-res">
      <FlgDateSlider
        ItineraryName={"Itinerary"}
        defaultsort={`Sorted by default`}
        sortItems={SortingPrice}
        dispatchFilter={dispatchFilter}
        dateSlider={true}
      />

      <div className="flg-list-row oneway a">
        {flightResponse.flightData.flightResult
          .slice(0, 2)
          .map((item, index) => (
            <SelectFlightCard
              key={index}
              flightData={item}
              airline={airline}
              airport={airport}
              search={search}
            />
          ))}
      </div>

      {flightResponse.flightData.flightResult.length > 2 && (
        <FlatDiscount
          title={`Book Comfortable Stays at Royals Hotel`}
          subtitle={`with flat 20% off*`}
          btn={`Book Now`}
          terms={`*T&C’s Apply`}
        />
      )}

      <div className="flg-list-row oneway b">
        {flightResponse.flightData.flightResult
          .slice(2, 6)
          .map((item, index) => (
            <SelectFlightCard
              key={index}
              flightData={item}
              airline={airline}
              airport={airport}
              search={search}
            />
          ))}
      </div>

      {flightResponse.flightData.flightResult.length > 6 && (
        <ExclusOffer
          endsIn={"Ends in"}
          expiryTimestamp={19000000}
          title={`Book your prefer Destination and get exclusive offers`}
          subtitle={`Best Price Guarantee`}
        />
      )}

      <div className="flg-list-row oneway c">
        {flightResponse.flightData.flightResult
          .slice(6, 6 + count)
          .map((item, index) => (
            <SelectFlightCard
              key={index}
              flightData={item}
              airline={airline}
              airport={airport}
              search={search}
            />
          ))}
      </div>

      {fligthLength > count && (
        <FlgShowmore text={`Show More`} onClick={() => addMore()} />
      )}

      <ScrollTop height={"2000"} />
    </div>
  );
};

export default FlgModResult;
