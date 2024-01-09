import React, { useEffect, useState } from "react";
import moment from "moment";
import { currentMonths, nextMonths } from "../../utils/calendarUtils";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { SET_INPUT } from "../../Redux/reducers/InputClick";
import { Col, Row } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
const weekdayshort = moment.weekdaysMin();
const monthName = moment.months();

const Calendar = ({
  serachDataDispatch,
  tripType,
  startDate,
  endDate,
  pressButton,
  setActive,
  active,
  setCalpress,
}) => {
  const dispatch = useDispatch();
  const [states, setSatates] = useState(new Date());
  const [firstSelectDate, setFirstSelectDate] = useState(new Date(startDate));
  const [secondSelectDate, setSecondSelectDate] = useState(
    endDate === "" ? "" : new Date(endDate)
  );
  const [Range, setRanges] = useState([
    new Date(startDate),
    endDate !== "" && new Date(endDate),
  ]);
  const currentMonthrows = currentMonths(states);
  const nextMonthrows = nextMonths(states);

  let afterOneYearDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );

  const nextMonth = () => {
    setSatates(new Date(states.getFullYear(), states.getMonth() + 1, 1));
  };

  const prevMonths = () => {
    setSatates(new Date(states.getFullYear(), states.getMonth() - 1, 1));
  };

  const handleDates = (data) => {
    if (tripType === "1") {
      setFirstSelectDate(data);
      setSatates(new Date(data));
      setActive("DEP");
      serachDataDispatch({
        type: "fromDate",
        payload: data,
      });
      setRanges([]);
      dispatch(SET_INPUT(""));
    }
    if (tripType === "2" && pressButton === false) {
      let list = [...Range];
      if (list.length === 2) {
        list.splice(0, 1, data);
        const rangeDate = list.filter((item) => item === data);
        setRanges(rangeDate);
        setActive("ret");
        setFirstSelectDate(rangeDate[0]);
        setSecondSelectDate("");
        setCalpress(true);
        serachDataDispatch({
          type: "toDate",
          payload: {
            firstDate: rangeDate[0],
            second: "",
          },
        });
      } else {
        let selce = [...list, data];
        setRanges(selce);
        if (selce.length === 2) {
          serachDataDispatch({
            type: "toDate",
            payload: {
              firstDate: selce[0],
              second: selce[1],
            },
          });
          dispatch(SET_INPUT(""));
          setRanges([]);
          setSecondSelectDate("");
        }
      }
    } else if (tripType === "2") {
      let list = [...Range];
      list.splice(1, 1, data);
      setRanges(list);
      setActive("ret");
      setCalpress(true);
      setFirstSelectDate(list[0]);
      if (list.length === 2) {
        serachDataDispatch({
          type: "toDate",
          payload: { firstDate: list[0], second: list[1] },
        });
        dispatch(SET_INPUT(""));
        setRanges([]);
        setSecondSelectDate("");
      }
    }
  };

  const GetstartDate = moment(startDate).format("ll");
  const GetendDate = endDate && moment(endDate).format("ll");
  const size = useWindowSize();

  useEffect(() => {
    setSatates(new Date(startDate));
  }, []);

  useEffect(() => {
    if (size.width < 768) {
      try {
        document.body.classList.add("modal-open");
        return () => {
          document.body.classList.remove("modal-open");
        };
      } catch (e) {
        console.log(e);
      }
    }
  }, [size.width]);

  return (
    <div className="calender-mdr dropdown-menu show">
      <div className="mdrflex-vertical">
        <div className="calender-datechoose">
          <ul
            className={`d-flex align-items-center ${
              active === "DEP" ? "departure" : "return"
            }`}
          >
            <li className={`d-inline-flex`}>
              <div>
                <Icon
                  icon="formkit:date"
                  className="date"
                  style={active === "DEP" ? { color: "#dc391b" } : {}}
                />
              </div>
              <div className="flex-grow-1 ps-2">
                {GetstartDate}
                <label
                  className="form-label"
                  style={active === "DEP" ? { color: "#dc391b" } : {}}
                >
                  Departure Date
                </label>
              </div>
            </li>

            {tripType === "2" && (
              <>
                <li>
                  <Icon icon="ep:right" className="arw" />
                </li>

                <li className={`d-inline-flex return`}>
                  <div>
                    <Icon
                      icon="formkit:date"
                      className="date"
                      style={active === "ret" ? { color: "#dc391b" } : {}}
                    />
                  </div>
                  <div className="flex-grow-1 ps-2">
                    {GetendDate}
                    <label
                      className="form-label"
                      style={active === "ret" ? { color: "#dc391b" } : {}}
                    >
                      Return Date
                    </label>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="position-relative">
          <Row>
            <Col xs={12} md={6} className="first">
              <div className="d-flex align-items-center week">
                {new Date(new Date().getFullYear(), new Date().getMonth()) <
                new Date(states.getFullYear(), states.getMonth()) ? (
                  <div className="arrow prev" onClick={() => prevMonths()}>
                    <Icon icon="ph:caret-left" />
                  </div>
                ) : (
                  <div className="arrow empty"></div>
                )}

                <div className="flex-grow-1">
                  <span className="month-name">
                    {monthName[states.getMonth()]} {states.getFullYear()}
                  </span>
                </div>

                <div className="arrow empty"></div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    {weekdayshort.map((day) => {
                      return <th key={day}>{day}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {currentMonthrows.map((item, i) => (
                    <tr key={i}>
                      {item.map((it, index) => {
                        const datecal = moment(it).format("YYYY-MM-DD");
                        const currDate = moment().format("YYYY-MM-DD");
                        const selctedfirstDate =
                          moment(firstSelectDate).format("YYYY-MM-DD");
                        const selectedSecond =
                          secondSelectDate !== ""
                            ? moment(secondSelectDate).format("YYYY-MM-DD")
                            : "";
                        const result = moment(datecal).isSameOrAfter(currDate);
                        const smallerDate =
                          moment(selctedfirstDate).isSameOrAfter(datecal);
                        const style1 =
                          typeof it === "object" && result
                            ? { cursor: "pointer" }
                            : { pointerEvents: "none", color: "#e5e5e5" };
                        const style2 =
                          selctedfirstDate === datecal ||
                          selectedSecond === datecal
                            ? {
                                color: "white",
                                backgroundColor: "#dc391b",
                              }
                            : {};
                        const style3 =
                          pressButton === true && smallerDate
                            ? { pointerEvents: "none", color: "#e5e5e5" }
                            : {};

                        return (
                          <td
                            key={i}
                            onClick={() =>
                              typeof it === "object" && result
                                ? handleDates(it)
                                : null
                            }
                            style={{ ...style1, ...style2, ...style3 }}
                          >
                            {it === "" ? "" : it.getDate()}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
            <Col xs={12} md={6} className="second">
              <div className="d-flex align-items-center week">
                <div className="arrow empty d-none d-md-inline-block"></div>

                <div className="flex-grow-1">
                  <span className="month-name">
                    {states.getMonth() === 11
                      ? "January"
                      : monthName[states.getMonth() + 1]}{" "}
                    &nbsp;
                    {states.getMonth() === 11
                      ? states.getFullYear() + 1
                      : states.getFullYear()}
                  </span>
                </div>

                {afterOneYearDate > new Date(states) ? (
                  <div onClick={() => nextMonth()} className="arrow next">
                    <Icon icon="ph:caret-right" />
                  </div>
                ) : (
                  <div className="arrow empty"></div>
                )}
              </div>
              <table className="table">
                <thead>
                  <tr>
                    {weekdayshort.map((day) => {
                      return <th key={day}>{day}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {nextMonthrows.map((item, i) => (
                    <tr key={i}>
                      {item.map((items) => {
                        const datecal = moment(items).format("YYYY-MM-DD");
                        const selctedfirstDate =
                          moment(firstSelectDate).format("YYYY-MM-DD");
                        const selectedSecond =
                          secondSelectDate !== ""
                            ? moment(secondSelectDate).format("YYYY-MM-DD")
                            : "";

                        const smallerDate =
                          moment(selctedfirstDate).isSameOrAfter(datecal);
                        const style1 =
                          selctedfirstDate === datecal ||
                          selectedSecond === datecal
                            ? {
                                color: "white",
                                backgroundColor: "#dc391b",
                              }
                            : {};

                        const style2 =
                          items === "" ? { pointerEvents: "none" } : {};
                        const style3 =
                          pressButton === true && smallerDate
                            ? { pointerEvents: "none", color: "#e5e5e5" }
                            : {};
                        return (
                          <td
                            key={i}
                            onClick={() => items !== "" && handleDates(items)}
                            style={{ ...style1, ...style2, ...style3 }}
                          >
                            {items === "" ? "" : items.getDate()}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
