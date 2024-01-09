import React from "react";
import { addDate } from "../../utils/dateCal";


const FlightTripType = ({
  serachData,
  serachDataDispatch,
  title,
  inputValue,
}) => {
  return (
    <label
      className={`radio-custom-site ${
        serachData.tripType === inputValue ? "active" : ""
      }`}
    >
      <input
        type="radio"
        name="tripType"
        value={serachData.tripType}
        className="hidden"
        checked={serachData.tripType === inputValue}
        onChange={() =>
          inputValue === "2"
            ? serachDataDispatch({
                type: "tripType",
                payload: inputValue,
                toDate: addDate(new Date(serachData.fromDate), 5),
              })
            : serachDataDispatch({ type: "tripType", payload: inputValue })
        }
      />
      <span className="label" />
      <span className="radiocustom-text">{title}</span>
    </label>
  );
};

export default FlightTripType;
