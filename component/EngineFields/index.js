import React, { useEffect, useReducer, useRef, useState } from 'react'
import FlightTripType from './FlightTripType';
import TextBox from './TextBox';
import DateRange from './DateRange';
import DropMenus from './DropMenus';
import Traveller from './Traveller';
import Calendar from './Calendar';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { GET_SESSION_STROAGE } from '../../utils/clientStorage';
import { Searchsumbit, handleswapfl, initialState, reducer } from '../../utils/flightSearch';
import { findtravelClass } from '../../utils/static';
import { SET_INPUT } from '../../Redux/reducers/InputClick';
import { Alert } from '@mui/material';
import { Icon } from '@iconify/react';


const EngineFields = ({MobRadioCenter}) => {
  const { inputField } = useSelector((state) => state.InputField);
  const dispatch = useDispatch();
  const router = useRouter();
  const [serachData, serachDataDispatch] = useReducer(reducer, initialState);
  const [swapfl, setSwapfl] = useState("One-way");
  const [calPress, setCalpress] = useState(true);
  const [active, setActive] = useState("DEP");
  const [showRef, setShowRef] = useState(false);
  const [modifysort, setmodifysort] = useState(false);
  const showMenu = useRef(null);
  const data = GET_SESSION_STROAGE("serachData");
  const totalTravel = serachData.adult + serachData.infant + serachData.child;

  useEffect(() => {
    if (data) {
      serachDataDispatch({ type: "initialData", payload: data });
    }
  }, []);



  useEffect(() => {

    const handleClickOutside = (event) => {
      if (showMenu.current && !showMenu.current.contains(event.target)) {
        setShowRef(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [showRef]);
  return (
    <div>
      <div className={`engineexp-radio light ${MobRadioCenter ? 'MobRadioCenter' : ''}`}>
        <FlightTripType
          serachData={serachData}
          serachDataDispatch={serachDataDispatch}
          title="One-way"
          inputValue="1"
        />
        <FlightTripType
          serachData={serachData}
          serachDataDispatch={serachDataDispatch}
          title="Round Trip"
          inputValue="2"
        />
      </div>

      <div className="engineexp-fields">
      <div className='wroweng-wrap'>
      <Row className='engineexp-wrow wroweng-mb-row'>
          <Col xs={12} md={6} xl className='wroweng-mb'>

            <TextBox
              location={serachData.from}
              icon="fromeng-plane.png"
              label="From"
              value={`${serachData.from.cityName} (${serachData.from.airportCode})`}
              className="From"
              name="From"
              serachDataDispatch={serachDataDispatch}
              onClick={() => dispatch(SET_INPUT("From"))}
            />
            <img
              src="/images/fluent-arrow.png"
              className={`swap-desg ${swapfl ? "active" : ""}`}
              alt='swap'
              onClick={() =>
                handleswapfl(serachDataDispatch, setSwapfl, swapfl)
              }
            />
          </Col>
          <Col xs={12} md={6} xl className='wroweng-mb'>
            <div className="position-relative">
              <TextBox
                location={serachData.to}
                icon="toeng-plane.png"
                label="To"
                value={`${serachData.to.cityName} (${serachData.to.airportCode})`}
                className="to"
                name="To"
                serachDataDispatch={serachDataDispatch}
                onClick={() => dispatch(SET_INPUT("To"))}
              />
              {serachData.from.airportCode ===
                serachData.to.airportCode ? (
                <Alert
                  variant="filled"
                  severity="error"
                  className="both-fielderr"
                >
                  From and To cannot be same
                </Alert>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col xs={12} md={6} xl ref={showMenu} className='wroweng-mb depretEnCol'>
            <div className="exp-menustv position-relative">
              <DateRange
                className={`menutrv datearv`}
                // className={`menutrv datearv ${onInptFocus}`}
                icon="clarity-date.png"
                tripType={serachData.tripType}
                startDate={serachData.fromDate}
                endDate={serachData.toDate}
                serachDataDispatch={serachDataDispatch}
                setCalpress={setCalpress}
                setActive={setActive}
                openCalender={() => {
                  dispatch(SET_INPUT("Calender"));
                  setShowRef(true);
                }}
              />

              {inputField === "Calender" && showRef && (
                <Calendar
                  serachDataDispatch={serachDataDispatch}
                  tripType={serachData.tripType}
                  startDate={serachData.fromDate}
                  endDate={serachData.toDate}
                  pressButton={calPress}
                  setActive={setActive}
                  active={active}
                  setCalpress={setCalpress}
                />
              )}
            </div>
          </Col>

          <Col xs={12} md={6} xl className='wroweng-mb trvclassCol'>
            <div className="travellers-class">
              <DropMenus
                icon="trav-class.png"
                label="Traveller(s) & Class"
                value={`${totalTravel} Traveller, ${findtravelClass(serachData.cabinClass).name
                  }`}
                className=" menutrv"
                menuclassName={"travelwclass"}
              >
                <Traveller
                  serachDataDispatch={serachDataDispatch}
                  serachData={serachData}
                />
              </DropMenus>
            </div>
          </Col>
 
          <Col xl={2} className="engineexp-btn align-self-xl-center searchmodf wroweng-mb ">
            <button
              className="btn btn-site ripple-wv"
              type="button"
              aria-label="Search" 
              onClick={() => {
                Searchsumbit(serachData, router);
                setmodifysort(false);
              }}
            >
              <span><b className='sermodf me-1 me-md-0 me-lg-1 d-xl-none'>Search</b> <Icon icon="ic:round-search" color="white" /></span>
            </button>
          </Col>
        </Row>
      </div>
       
      </div>
    </div>
  )
}

export default EngineFields