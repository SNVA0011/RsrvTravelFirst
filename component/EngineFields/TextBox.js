import React, { useEffect, useState, useRef } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import SearchList from './SearchList';
import AirportData from "../staticJson/AirportData.json";
import useOutsideClick from "../../hooks/useOutsideClick";
import Image from "next/image";

const TextBox = ({
  location,
  icon,
  label,
  value,
  className,
  name,
  serachDataDispatch,
  onClick,
}) => {
  const { inputField } = useSelector((state) => state.InputField);
  const [inputValue, setInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [onFocus, setOnFocus] = useState(false);
  const handleinput = (e) => {
    setInputValue(e);
    const data = AirportData.filter(
      (item) =>
        item.cityName.toLowerCase().indexOf(e.toLowerCase()) > -1 ||
        item.airportCode.toUpperCase().indexOf(e.toUpperCase()) > -1 ||
        item.airportName.toLowerCase().indexOf(e.toLowerCase()) > -1 ||
        item.countryName.toLowerCase().indexOf(e.toLowerCase()) > -1
    );
    setSearchList(data);
  };

  useEffect(() => {
    const data = AirportData.filter(
      (item) =>
        item.cityName.toUpperCase().indexOf(location.cityName.toUpperCase()) >
        -1
    );
    setSearchList(data);
  }, [value]);

  const ref = useRef();
  const outside = useOutsideClick(ref, () => {
    setInputValue("");
    setOnFocus(false);
  });
  const onInptFocus = onFocus && searchList.length > 0 ? "focus" : "";

  return (
    <div ref={ref}>
      <InputGroup
        className={`engineexp-text ${className} ${onInptFocus}`}
        onClick={onClick}
      >
        <Form.Label>{label}</Form.Label>
        <InputGroup.Text>
          <Image src={`/images/${icon}`} alt={label} width={16} height={35} />
        </InputGroup.Text>
        <Form.Control
          placeholder={value}
          name={name}
          value={inputValue}
          autoComplete="off"
          onChange={(e) => handleinput(e.target.value)}
          onFocus={(e) => setOnFocus(true)}
        />
      </InputGroup>
      {inputField === name && (
        <div className="exp-menustv show dropdown">
   
          <SearchList
            searchList={searchList}
            serachDataDispatch={serachDataDispatch}
            type={name}
            value={inputValue}
            onFocus={onFocus}
            setInputValue={setInputValue}
          />
        </div>
      )}
    </div>
  );
};

export default TextBox;
