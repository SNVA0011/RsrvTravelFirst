import React from "react";
import { Col, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENCY } from "../../Redux/reducers/currency";
import {
  GET_SESSION_STROAGE,
  SET_SESSION_STROAGE,
} from "../../utils/clientStorage";
import { useEffect } from "react";
import { mostused } from "../../utils/staticCurrency";
import styles from './header.module.scss'


const HeaderCurrency = ({ allcurrency, setAllcurrency }) => {
  const currency = useSelector((state) => state.Currency);
  const data = GET_SESSION_STROAGE("currencyCode");
  const dispatch = useDispatch();
  useEffect(() => {
    if (data !== undefined) {
      dispatch(
        SET_CURRENCY({
          index: data.index,
          title: data.title,
          icon: data.icon,
          iso: data.iso,
          value: data.value,
        })
      );
    }
  }, []);

  const handleCurrency = (item, index) => {
    dispatch(
      SET_CURRENCY({
        index: index,
        title: item.title,
        icon: item.icon,
        iso: item.iso,
        value: item.value,
      })
    );
    SET_SESSION_STROAGE("currencyCode", {
      index: index,
      title: item.title,
      icon: item.icon,
      iso: item.iso,
      value: item.value,
    });
  };
 

  return (
    <>
      <Dropdown className={`${styles.headerCurrencyMenu}`}>
        <Dropdown.Toggle
          variant="light"
          className={`currency-name ${styles.borderFlgcurrency}`}
          aria-label={currency.title}
        >
          <div className={styles.currencyName}>
            {currency.currencyCode === "AED" ? (
              <span style={{ fontSize: "10px", padding: "5px" }}>AED</span>
            ) : (
              <Icon icon={currency.currencylogo} className={styles.currencylogoIk} />
            )}
            <span className="d-lg-none">{currency.currencyCode}</span>
            <Icon
              icon={`formkit:down`}
              className="type-down-ats d-lg-none"
              width={14}
              height={14}
            />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.dropdownMenu}>
        <div className={`w-100 ${styles.wFullw}`}>
            <h5>Most-Used Currencies</h5>
            <Row className={styles.FlexRowurrency}>
              {mostused.slice(0, 6).map((item, index) => {
                return (
                  <Col xs={12} lg={4} key={index} className={styles.MostUsCol}>
                    <Dropdown.Item
                      as={`button`}
                      onClick={() => handleCurrency(item, index)}
                      className={`${styles.rippleWv} ${styles.dropItem} ${
                        currency.index == index ? ` ${styles.rippleWvActive}` : ""
                      }`}
                     aria-label="Most-Used Currencies"
                    >
                      <span>
                        <Icon icon={item.icon} /> {item.title}
                      </span>
                    </Dropdown.Item>
                  </Col>
                );
              })}
            </Row>
          </div>

          <div className={`w-100 ${styles.wFullw}`}>
            <h5>All Currencies</h5>
            <Row className={styles.FlexRowurrency}>
              {mostused.map((item, index) => {
                return (
                  <Col xs={12} lg={4} key={index} className={styles.MostUsCol}>
                    <Dropdown.Item
                      as={`button`}
                      onClick={() => {
                        // setAllcurrency({ index: index, currency: item.icon });
                        handleCurrency(item, index);
                      }}
                      className={`${styles.rippleWv} ${styles.dropItem} ${
                        allcurrency.index == index ? ` ${styles.rippleWvActive}` : ""
                      }`}
                    >
                      <span>
                        {item.icon === "AED" ? (
                          <>
                            <span style={{ fontSize: "10px" }}>AED</span>{" "}
                            &nbsp;&nbsp;
                            {item.title}
                          </>
                        ) : (
                          <>
                            <Icon icon={item.icon} /> {item.title}
                          </>
                        )}
                      </span>
                    </Dropdown.Item>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default HeaderCurrency;
