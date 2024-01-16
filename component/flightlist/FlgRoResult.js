import React, { useState } from "react";
import RoundFlightCard from "./RoundFlightCard";
import FlgShowmore from "./filter/FlgShowmore";
import ScrollTop from "../common/ScrollTop";
import FlgDateSlider from "./filter/FlgDateSlider";

const FlgRoResult = ({ flightResponse, setFilterData, search }) => {
  const [count, setCount] = useState(8);
  const airline = flightResponse.flightData.airline;
  const airport = flightResponse.flightData.airport;
  const fligthLength = flightResponse.flightData.flightResult.length;
  const SortingPrice = ["Price : High to Low", "Price : Low to High"];

  const addMore = () => {
    if (fligthLength > count) {
      setCount(count + 10);
    }
  };

  return (
    <div>
      <div className="sort-roundway">
        <FlgDateSlider
          ItineraryName={"Itinerary"}
          defaultsort={`Sorted by default`}
          sortItems={SortingPrice}
          dispatchFilter={setFilterData}
          dateSlider={false}
        />
      </div>

      <div className="flg-list-row round-int a">
        {flightResponse.flightData.flightResult
          .slice(0, count)
          .map((item, i) => (
            <RoundFlightCard
              key={i}
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

export default FlgRoResult;
