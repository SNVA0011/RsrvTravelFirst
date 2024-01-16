import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { mostused } from "../../../utils/staticCurrency";

const FlglistCheckbox = ({
  title,
  data,
  handlecheckbox,
  currency,
  checked,
}) => {
  const currencyLogo = mostused.find((item) => item.value === currency).icon;
  return (
    <div className="ptmy-20">
      <Row className="align-items-center heading-row">
        <Col xs={12}>
          <h4>{title}</h4>
          {data?.length > 0 && (
            <div className="ptm-checkbox">
              <div className="checkbox-custom-site">
                {data.map((item, index) => {
                  return (
                    <label className="checkbox d-flex" key={index}>
                      <div>
                        <input
                          type="checkbox"
                          value={item.value}
                          onChange={handlecheckbox}
                          id={item.value}
                          checked={checked.includes(item.value)}
                        />
                        <span className="checkbox-material">
                          <span className="check"></span>
                        </span>{" "}
                      </div>

                      <div className="flex-grow-1">
                        {item.title}&nbsp;
                        {item.count === undefined ? "" : <>({item.count})</>}
                      </div>
                      <div className="ps-2 text-nowrap">
                        {" "}
                        {item.price}{" "}
                        {currency === "AED" ? (
                          <span>AED </span>
                        ) : (
                          <Icon
                            icon={currencyLogo}
                            className="lsc-currency ms-0"
                          />
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default FlglistCheckbox;
