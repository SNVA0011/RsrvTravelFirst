import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { SET_INPUT } from "../../Redux/reducers/InputClick";

const SearchList = ({
  searchList,
  serachDataDispatch,
  type,
  value,
  setInputValue,
  onFocus,
}) => {
  const dispatch = useDispatch();
  const handleAirport = (item) => {
    serachDataDispatch({
      payload: item,
      type: type,
    });
    dispatch(SET_INPUT(""));
    setInputValue("");
  };

  return (
    <div
      className={`dropdown-menu suggest-cities ${
        searchList.length > 0 && onFocus ? "show" : ""
      }`}
    >
      {searchList && (
        <>
          <div className="suggest-text">Suggestions</div>
          {searchList.slice(0, 12).map((item, i) => {
            return (
              <div
                className="d-flex seachbycity-wrp notranslate"
                onClick={(e) => {
                  handleAirport(item);
                }}
                key={i}
              >
                <div className="aeroplanewr-drico text-center">
                  <Icon icon="fluent:airplane-take-off-20-regular" />
                  <br></br>
                  <span className="fw-bold seachbycity-code">
                    {item.airportCode}
                  </span>
                </div>
                <div className="flex-grow-1 align-self-center">
                  <div className="font-weight-semibold seachbycity-1">
                    <strong>
                      {item.cityName}, {item.countryName}
                    </strong>
                  </div>
                  <div className="font-weight-normal mb-0 seachbycity-2">
                    {item.airportName} Airport
                  </div>
                </div>
                <div className="seachbycity-3 align-self-center">
                  <Icon
                    icon={`flagpack:${
                      item.countryCode === "GB"
                        ? "gb-ukm"
                        : item.countryCode.toLowerCase()
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SearchList;
