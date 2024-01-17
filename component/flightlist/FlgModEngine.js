import React, { useReducer } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DateRange from "../EngineFields/DateRange";
import DropMenus from "../EngineFields/DropMenus";
import FlightTripType from "../EngineFields/FlightTripType";
import {
  Searchsumbit,
  createInitialState,
  handleswapfl,
  initialState,
  reducer,
} from "../../utils/flightSearch";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { findtravelClass } from "../../utils/static";
import Traveller from "../EngineFields/Traveller";
import { useSelector, useDispatch } from "react-redux";
import { SET_INPUT } from "../../Redux/reducers/InputClick";
import { SET_ERROR } from "../../Redux/reducers/errorhandle";
import moment from "moment";
import Calendar from "../EngineFields/Calendar";
import { Icon } from "@iconify/react";
import Offcanvas from "react-bootstrap/Offcanvas";
import useWindowSize from "../../hooks/useWindowSize";
import Alert from "@mui/material/Alert";
import { useRef } from "react";
import { GET_SESSION_STROAGE } from "../../utils/clientStorage";
import TextBox from "../EngineFields/TextBox";

const FlgModEngine = ({ loading }) => {
  const [serachData, serachDataDispatch] = useReducer(reducer, initialState);
  const { inputField } = useSelector((state) => state.InputField);
  const router = useRouter();
  const dispatch = useDispatch();
  const [swapfl, setSwapfl] = useState("One-way");
  const [calPress, setCalpress] = useState(true);
  const [active, setActive] = useState("DEP");
  const data = GET_SESSION_STROAGE("serachData");
  const [showRef, setShowRef] = useState(false);
  const showMenu = useRef(null); 

  // static sidenav - header
  const [modifysort, setmodifysort] = useState(false);
  // sticky
  const [sticky, setSticky] = useState("");
  const size = useWindowSize();
  useEffect(() => {
    if (Object.keys(router.query).length >= 5) {
      const initialState = createInitialState(router.query);
      if (typeof initialState === "object") {
        serachDataDispatch({ type: "initialData", payload: initialState });
      } else {
        dispatch(SET_ERROR(initialState));
      }
    } else {
      serachDataDispatch({ type: "initialData", payload: serachData });
    }
  }, [router]);

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 300 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  const onInptFocus = showRef ? "focus" : "";
  const totalTravel = serachData.adult + serachData.infant + serachData.child;

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

  useEffect(() => {
    if (size.width < 1200) {
      try {
        if (modifysort) {
          document.body.classList.add("modal-open");
        } else {
          document.body.classList.remove("modal-open");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [modifysort]);

  return (
    <>
      {size.width < 1200 && (
        <>
          <div className={`modifysort-flighteng ${sticky}`}>
            <Container className="tpcontainer-1">

              <div
                className={`fade offcanvas-backdrop ${modifysort ? "show" : "d-none"
                  } fadeanim-offcanvas`}
                onClick={() => {
                  setmodifysort(!modifysort);
                }}
              />

              <div className="flighteng-mobile">
                <Row className="align-items-center">
                  <Col xs={10} sm={8} className="pe-0">
                    <div className="title d-inline-block">
                      {serachData.from.airportCode} <Icon icon="tdesign:swap" />{" "}
                      {serachData.to.airportCode}
                    </div>
                    <span className="title-2 d-inline-block">
                      {totalTravel} Traveller
                      {totalTravel > 1 ? "s" : ""}
                      <Icon icon="game-icons:person" />
                    </span>

                    <ul>
                      <li>
                        {moment(serachData.fromDate).format("DD MMM")}{" "}
                        {serachData.toDate !== ""
                          ? `- ${moment(serachData.toDate).format("DD MMM")}`
                          : ""}
                        <Icon icon="lucide:dot" className="mx-1" />
                        {findtravelClass(serachData.cabinClass).name}
                      </li>
                    </ul>
                  </Col>
                  <Col xs={2} sm={4} className="close text-right">
                    <button
                      type="button"
                      className="edit-icon"
                      onClick={() => {
                        setmodifysort(!modifysort);
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <span className="d-none d-sm-inline-block me-2 fw-semibold">
                        Modify Search
                      </span>
                      <Icon icon="mdi:pencil" />
                    </button>
                  </Col>
                </Row>
              </div>

            </Container>
          </div>
        </>
      )}

      {/*-------- offcanvas-top --------*/}
      <div className="modfflight-offcanvas wf-100">
        {sticky && <div className="wf-100 modfflight-empt"></div>}

        <div
          className={
            "offcanvas offcanvas-sidenav offcanvas-top  " +
            (modifysort ? "show" : "")
          }
        >
          {size.width < 1200 && (
            <Offcanvas.Header>
              <Container className="d-flex justify-content-between align-items-center">
                <Offcanvas.Title>Edit Search</Offcanvas.Title>
                <button
                  type="button"
                  className="btn-close text-white d-flex"
                  onClick={() => {
                    setmodifysort(!modifysort);
                  }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <Icon icon="ic:round-close" color="white" />
                </button>
              </Container>
            </Offcanvas.Header>
          )}
          <Offcanvas.Body className="p-0 d-flex flex-column">
            <div className="flgmodf-engine">
              <Container className="tpcontainer-2">
                <Row className="row-id-1 align-items-center">
                  <Col xs={12} md={5} lg={4} xl={3}>
                    <div className="engineexp-radio light">
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
                  </Col>

                  <Col xs={12} md={7} lg={8} xl={9}>
                    <div className="trvmodify travellers-class">
                      <DropMenus
                        icon="trav-class.png"
                        label="Traveller(s) & Class"
                        value={`${totalTravel} Traveller, ${findtravelClass(serachData.cabinClass)?.name
                          }`}
                        className=" menutrv"
                        menuclassName={"travelwclass"}
                      >
                        <div>
                          <Traveller
                            serachDataDispatch={serachDataDispatch}
                            serachData={serachData}
                          />
                        </div>
                      </DropMenus>
                    </div>
                  </Col>
                </Row>

                <div className="engineexp-fields">
                  <Row className="row-id-2  wroweng-mb-row">
                    <Col xs={12} lg={6} xl className="wroweng-mb">
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
                      {/* {serachData?.from?.airportCode ===
                        serachData?.to?.airportCode
                        ?
                        <Alert variant="filled" severity="error" className="both-fielderr">
                         From and To cannot be same
                        </Alert>
                        : ""} */}
                      <img
                        src="/images/fluent-arrow.png"
                        className={`swap-desg ${swapfl ? "active" : ""}`}
                        onClick={() =>
                          handleswapfl(serachDataDispatch, setSwapfl, swapfl)
                        }
                      />
                    </Col>
                    <Col xs={12} lg={6} xl className="wroweng-mb">
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
                        {serachData?.from?.airportCode ===
                          serachData?.to?.airportCode ? (
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
                    <Col xs={12} lg={8} xl ref={showMenu} className="wroweng-mb">
                      <div className="exp-menustv position-relative">
                        <DateRange
                          // className={`menutrv datearv ${onInptFocus}`}
                          className={`menutrv datearv`}
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

                    <Col
                      xs={12}
                      lg={4}
                      xl
                      className="engineexp-btn align-self-center searchmodf wroweng-mb"
                    >
                      <button
                        className="btn btn-site ripple-wv"
                        type="button"
                        disabled={loading}
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
              </Container>

              <div className={`engineexp-right pic-0`}>
                <img src={`/images/flight-rightlg-0.png`} />
              </div>
            </div>

            <div
              className="flgmodf-behind wf-100 h-100  flex-grow-1 d-xl-none"
              onClick={() => {
                setmodifysort(false);
              }}
            ></div>
          </Offcanvas.Body>
        </div>
      </div>
    </>
  );
};

export default FlgModEngine;
