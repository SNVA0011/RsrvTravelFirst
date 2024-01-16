import React from "react";
import { Col, Row } from "react-bootstrap";
import CheckOutInput from "./CheckOutInput";
import { Icon } from "@iconify/react";
import CheckOutSelect from "./CheckOutSelect";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import moment from "moment";
import { useSelector } from "react-redux";
import { GET_SESSION_STROAGE } from "../../utils/clientStorage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const AdultTypes = [
  { label: "Mr.", value: "Mr" },
  { label: "Ms.", value: "Ms" },
  { label: "Mrs.", value: "Mrs" },
];
const gender = [
  { id: "0", name: "Male" },
  { id: "1", name: "Female" },
];

const TravellerForms = ({
  contactInfo,
  travelInfo,
  paymentInfo,
  customerInfo,
  setCustomerInfoValues,
  TravelerInfError,
  noOfAdult,
  noOfchild,
  noOfinfant,
  contactinformation,
  handleContact,
  handleAddTraveler,
  handleInfantValues,
  handlechildValues,
  childInfo,
  infantInfo,
  paymentInfomation,
  setPaymentInformation,
  childInfoError,
  customerInfoError,
  infantError,
}) => {
  const currency = useSelector((state) => state.Currency);
  const data = GET_SESSION_STROAGE("currencyCode");
  const IsoNumber = data === undefined ? currency : data;
  let AdultminDate = moment(new Date()).subtract(12, "years");
  let childminDate = moment(new Date()).subtract(12, "years");
  let infantminDate = moment(new Date()).subtract(2, "months");
  return (
    <div className="passenger-forms-chk">
      {contactInfo && (
        <div className="passenger-details-form pb-0 trv">
          <div className="passenger-stepnum">
            <span className="d-inline-flex justify-content-center align-items-center">
              01
            </span>
            Contact Information
          </div>
          <div className="psn-left">
            <div className="passenger-wrp">
              <Row className="chkform-row">
                <Col xs={12} md={6} className="field">
                  <CheckOutInput
                    type="email"
                    placeholder="Enter Your Email address"
                    label="Email address"
                    name="email"
                    maxLength={15}
                    minLength={15}
                    required={true}
                    defaultValue={contactinformation?.email}
                    value={contactinformation?.email}
                    onChange={(e) => handleContact("email", e.target.value)}
                    typeError={TravelerInfError.email}
                  />
                </Col>
                <Col xs={12} md={6} className="field phonetypeStyle cnvfull">
                  <PhoneInput
                    country={IsoNumber.iso.toLowerCase()}
                    specialLabel={"Enter Your Phone"}
                    value={contactinformation?.billingphone}
                    defaultValue={contactinformation?.billingphone}
                    name="billingphone"
                    placeholder="Enter Your Phone"
                    className="phnPadding"
                    onChange={(e) => {
                      handleContact("billingphone", e);
                    }}
                  />
                  {TravelerInfError.billingphone && (
                    <div className="text-danger text-xsalert mt-1">
                      {TravelerInfError.billingphone}
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
      {travelInfo && (
        <div className="passenger-details-form pb-0 trv">
          <div className="passenger-stepnum">
            <span className="d-inline-flex justify-content-center align-items-center">
              02
            </span>
            Traveler Information
          </div>
          <div className="psn-left">
            <div className="passenger-wrp">
              <Row className="chkform-row">
                {customerInfo.map((input, i) => (
                  <>
                    <Col xs={12}>
                      <div className="total-trvcount">
                        <Icon icon="ic:round-account-circle" />
                        Adult (12+ Years)
                      </div>
                    </Col>
                    <Col xs={12} md={7} className="field">
                      <div className="firstname-chk d-flex">
                        <span className="addon-inp">
                          <CheckOutSelect
                            options={AdultTypes}
                            label="Title"
                            name="Title"
                            required={true}
                            defaultValue={input.Title}
                            value={input.Title}
                            onChange={(e) =>
                              setCustomerInfoValues("Title", e.target.value, i)
                            }
                            typeError={customerInfoError[i]?.Title}
                          />
                        </span>
                        <div className="flex-grow-1">
                          <CheckOutInput
                            type="text"
                            placeholder="Enter Your First Name"
                            label="First Name"
                            name="First_Name"
                            maxLength={15}
                            minLength={15}
                            required={true}
                            defaultValue={input.First_Name}
                            value={input.First_Name}
                            onChange={(e) =>
                              setCustomerInfoValues(
                                "First_Name",
                                e.target.value,
                                i
                              )
                            }
                            typeError={customerInfoError[i]?.First_Name}
                          />
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} md={5} className="field">
                      <CheckOutInput
                        type="text"
                        placeholder="Enter Your Last Name"
                        label="Last Name"
                        name="Last_Name"
                        maxLength={15}
                        minLength={15}
                        required={true}
                        defaultValue={input.Last_Name}
                        value={input.Last_Name}
                        onChange={(e) =>
                          setCustomerInfoValues("Last_Name", e.target.value, i)
                        }
                        typeError={customerInfoError[i]?.Last_Name}
                      />
                    </Col>

                    <Col xs={12} md={7} className="field">
                      <div className="mui-textfield date">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileDatePicker
                            defaultValue={input.DOB}
                            label="D.O.B"
                            disableFuture={true}
                            closeOnSelect={true}
                            maxDate={dayjs(AdultminDate._d)}
                            slotProps={{ textField: { fullWidth: true } }}
                            name="DOB"
                            onChange={(e) =>
                              setCustomerInfoValues(
                                "DOB",
                                e.format("YYYY-MM-DD"),
                                i
                              )
                            }
                          />
                        </LocalizationProvider>
                      </div>
                      {customerInfoError[i]?.DOB && (
                        <div className="text-danger text-xsalert mt-1">
                          {customerInfoError[i]?.DOB}
                        </div>
                      )}
                    </Col>

                    <Col
                      xs={12}
                      md={5}
                      className="field chkfield-radio pt-3 s-3"
                    >
                      {gender.map((ele) => {
                        return (
                          <>
                            <label className="radio-custom-site">
                              <input
                                type="radio"
                                name={`Gender-${i}`}
                                id="gender-male"
                                className="hidden"
                                value={ele.id}
                                checked={
                                  Number(ele.id) === Number(input.Gender)
                                    ? true
                                    : false
                                }
                                onChange={(e) =>
                                  setCustomerInfoValues("Gender", ele.id, i)
                                }
                              />
                              <span className="label" />
                              <span className="radiocustom-text">
                                {ele.name}
                              </span>
                            </label>
                          </>
                        );
                      })}
                      {customerInfoError[i]?.Gender && (
                        <div className="text-danger text-xsalert mt-1">
                          {customerInfoError[i]?.Gender}
                        </div>
                      )}
                    </Col>
                  </>
                ))}
              </Row>
              <div className="text-end mt-3">
                {noOfAdult > customerInfo.length ? (
                  <div
                    className="showflg-travel btn"
                    onClick={() => handleAddTraveler("ADULT")}
                  >
                    {" "}
                    + ADD NEW ADULT
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {noOfchild > 0 && (
            <div className="psn-left mt-4">
              <div className="passenger-wrp">
                <Row className="chkform-row">
                  {childInfo.map((inp, i) => (
                    <>
                      <Col xs={12}>
                        <div className="total-trvcount">
                          <Icon icon="ic:round-account-circle" />
                          Child (2-12 Yrs)
                        </div>
                      </Col>
                      <Col xs={12} md={7} className="field">
                        <div className="firstname-chk d-flex">
                          <span className="addon-inp">
                            <CheckOutSelect
                              options={AdultTypes}
                              label="Title"
                              name="Title"
                              required={true}
                              defaultValue={inp.Title}
                              value={inp.Title}
                              onChange={(e) =>
                                handlechildValues("Title", e.target.value, i)
                              }
                              typeError={childInfoError[i]?.Title}
                            />
                          </span>
                          <div className="flex-grow-1">
                            <CheckOutInput
                              type="text"
                              placeholder="Enter Your First Name"
                              label="First Name"
                              name="First_Name"
                              maxLength={15}
                              minLength={15}
                              required={true}
                              defaultValue={inp.First_Name}
                              value={inp.First_Name}
                              onChange={(e) =>
                                handlechildValues(
                                  "First_Name",
                                  e.target.value,
                                  i
                                )
                              }
                              typeError={childInfoError[i]?.First_Name}
                            />
                          </div>
                        </div>
                      </Col>

                      <Col xs={12} md={5} className="field">
                        <CheckOutInput
                          type="text"
                          placeholder="Enter Your Last Name"
                          label="Last Name"
                          name="Last_Name"
                          maxLength={15}
                          minLength={15}
                          required={true}
                          defaultValue={inp.Last_Name}
                          value={inp.Last_Name}
                          onChange={(e) =>
                            handlechildValues("Last_Name", e.target.value, i)
                          }
                          typeError={childInfoError[i]?.Last_Name}
                        />
                      </Col>

                      <Col xs={12} md={7} className="field">
                        <div className="mui-textfield date">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              defaultValue={inp.DOB}
                              label="D.O.B"
                              disableFuture={true}
                              closeOnSelect={true}
                              maxDate={dayjs(childminDate._d)}
                              slotProps={{ textField: { fullWidth: true } }}
                              name="DOB"
                              onChange={(e) =>
                                handlechildValues(
                                  "DOB",
                                  e.format("YYYY-MM-DD"),
                                  i
                                )
                              }
                            />
                          </LocalizationProvider>
                        </div>
                        {childInfoError[i]?.DOB && (
                          <div className="text-danger text-xsalert mt-1">
                            {childInfoError[i]?.DOB}
                          </div>
                        )}
                      </Col>

                      <Col
                        xs={12}
                        md={5}
                        className="field chkfield-radio align-self-center s-2"
                      >
                        {gender.map((ele) => {
                          return (
                            <>
                              <label className="radio-custom-site">
                                <input
                                  type="radio"
                                  name={`gender-${i}`}
                                  id="gender-male"
                                  className="hidden"
                                  value={ele.id}
                                  checked={
                                    Number(ele.id) === Number(inp.Gender)
                                      ? true
                                      : false
                                  }
                                  onChange={(e) =>
                                    handlechildValues("Gender", ele.id, i)
                                  }
                                />
                                <span className="label" />
                                <span className="radiocustom-text">
                                  {ele.name}
                                </span>
                              </label>
                            </>
                          );
                        })}
                        {childInfoError[i]?.Gender && (
                          <div className="text-danger text-xsalert mt-1">
                            {childInfoError[i]?.Gender}
                          </div>
                        )}
                      </Col>
                    </>
                  ))}
                </Row>
                <div className="text-end mt-3">
                  {noOfchild > childInfo.length ? (
                    <div
                      className="showflg-travel btn"
                      onClick={() => handleAddTraveler("CHILD")}
                    >
                      {" "}
                      + ADD NEW CHILD
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          )}

          {noOfinfant > 0 && (
            <div className="psn-left mt-4">
              <div className="passenger-wrp">
                <Row className="chkform-row">
                  {infantInfo.map((inputs, i) => (
                    <>
                      <Col xs={12}>
                        <div className="total-trvcount">
                          <Icon icon="ic:round-account-circle" />
                          Infant (15 days - 2 Yrs)
                        </div>
                      </Col>
                      <Col xs={12} md={7} className="field">
                        <div className="firstname-chk d-flex">
                          <span className="addon-inp">
                            <CheckOutSelect
                              options={AdultTypes}
                              label="Title"
                              name="Title"
                              required={true}
                              defaultValue={inputs.Title}
                              value={inputs.Title}
                              onChange={(e) =>
                                handleInfantValues("Title", e.target.value, i)
                              }
                              typeError={infantError[i]?.Title}
                            />
                          </span>
                          <div className="flex-grow-1">
                            <CheckOutInput
                              type="text"
                              placeholder="Enter Your First Name"
                              label="First Name"
                              name="First_Name"
                              maxLength={15}
                              minLength={15}
                              required={true}
                              defaultValue={inputs.First_Name}
                              value={inputs.First_Name}
                              onChange={(e) =>
                                handleInfantValues(
                                  "First_Name",
                                  e.target.value,
                                  i
                                )
                              }
                              typeError={infantError[i]?.First_Name}
                            />
                          </div>
                        </div>
                      </Col>

                      <Col xs={12} md={5} className="field">
                        <CheckOutInput
                          type="text"
                          placeholder="Enter Your Last Name"
                          label="Last Name"
                          name="Last_Name"
                          maxLength={15}
                          minLength={15}
                          required={true}
                          defaultValue={inputs.Last_Name}
                          value={inputs.Last_Name}
                          onChange={(e) =>
                            handleInfantValues("Last_Name", e.target.value, i)
                          }
                          typeError={infantError[i]?.Last_Name}
                        />
                      </Col>

                      <Col xs={12} md={7} className="field">
                        <div className="mui-textfield date">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              defaultValue={inputs.DOB}
                              label="D.O.B"
                              disableFuture={true}
                              closeOnSelect={true}
                              maxDate={dayjs(infantminDate._d)}
                              slotProps={{ textField: { fullWidth: true } }}
                              name="DOB"
                              onChange={(e) =>
                                handleInfantValues(
                                  "DOB",
                                  e.format("YYYY-MM-DD"),
                                  i
                                )
                              }
                            />
                          </LocalizationProvider>
                        </div>
                        {infantError[i]?.DOB && (
                          <div className="text-danger text-xsalert mt-1">
                            {infantError[i]?.DOB}
                          </div>
                        )}
                      </Col>

                      <Col
                        xs={12}
                        md={5}
                        className="field chkfield-radio align-self-center s-1"
                      >
                        {gender.map((elem) => {
                          return (
                            <>
                              <label className="radio-custom-site">
                                <span className="radio-custom-site">
                                  <input
                                    type="radio"
                                    name={`Genders-${i}`}
                                    id="gender-male"
                                    className="hidden"
                                    value={elem.id}
                                    checked={
                                      Number(elem.id) === Number(inputs.Gender)
                                        ? true
                                        : false
                                    }
                                    onChange={(e) =>
                                      handleInfantValues("Gender", elem.id, i)
                                    }
                                  />
                                  <span className="label" />
                                  <span className="radiocustom-text">
                                    {elem.name}
                                  </span>
                                </span>
                              </label>
                            </>
                          );
                        })}
                        {infantError[i]?.Gender && (
                          <div className="text-danger text-xsalert mt-1">
                            {infantError[i]?.Gender}
                          </div>
                        )}
                      </Col>
                    </>
                  ))}
                </Row>
                <div className="text-end mt-3">
                  {noOfinfant > infantInfo.length ? (
                    <div
                      className="showflg-travel btn"
                      onClick={() => handleAddTraveler("Infant")}
                    >
                      {" "}
                      + ADD NEW Infant
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {paymentInfo && (
        <>
          <div className="passenger-details-form trv">
            <div className="passenger-stepnum">
              <span className="d-inline-flex justify-content-center align-items-center">
                03
              </span>
              Payment Information
            </div>
            <div className="psn-left">
              <div className="passenger-wrp py-4">
                <div className="total-trvcount pymode">Payment Mode</div>

                <div className="payment-modes">
                  <Row className="chkform-row">
                    <Col xs={12} md={6} className="field">
                      <label
                        htmlFor="payby-1"
                        className={`radio-custom-site d-flex align-items-center${
                          paymentInfomation === "card" ? " active" : ""
                        }`}
                      >
                        <div>
                          <input
                            type="radio"
                            name="payby"
                            value="card"
                            id="payby-1"
                            className="hidden"
                            checked={paymentInfomation === "card"}
                            onChange={(e) => setPaymentInformation("card")}
                          />
                          <span className="label" />
                          <span className="radiocustom-text">
                            <b>Pay With Debit/Credit card</b>
                          </span>
                        </div>
                      </label>
                    </Col>
                    <Col xs={12} md={6} className="field">
                      <label
                        htmlFor="payby-2"
                        className={`radio-custom-site d-flex align-items-center${
                          paymentInfomation === "UPI" ? " active" : ""
                        }`}
                      >
                        <div>
                          <input
                            type="radio"
                            name="payby"
                            value="UPI"
                            id="payby-2"
                            className="hidden"
                            checked={paymentInfomation === "UPI"}
                            onChange={(e) => setPaymentInformation("UPI")}
                          />
                          <span className="label" />
                          <span className="radiocustom-text">
                            <b>Pay With UPI</b>
                          </span>
                        </div>
                      </label>
                    </Col>
                    <Col xs={12} md={6} className="field">
                      <label
                        htmlFor="payby-3"
                        className={`radio-custom-site d-flex align-items-center${
                          paymentInfomation === "stripe" ? " active" : ""
                        }`}
                      >
                        <div>
                          <input
                            type="radio"
                            name="payby"
                            value="stripe"
                            id="payby-3"
                            className="hidden"
                            checked={paymentInfomation === "stripe"}
                            onChange={(e) => setPaymentInformation("stripe")}
                          />
                          <span className="label" />
                          <span className="radiocustom-text">
                            <b>Pay With Stripe</b>
                          </span>
                        </div>
                      </label>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TravellerForms;
