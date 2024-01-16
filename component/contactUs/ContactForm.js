import React from "react";
import { useState } from "react";
import { useEffect } from "react";
 import Alert from "@mui/material/Alert";
import { contactApi } from "../../pages/api/contactApi";

const ContactForm = () => {
  const [contForm, setContForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comment: "",
    loading: false,
    respMessage: "",
    error: "",
  });

  const handleform = (e) => {
    const { value, name } = e.target;
    setContForm({ ...contForm, [name]: value });
  };

  const formSumbit = (e) => {
    setContForm({ ...contForm, loading: true });
    e.preventDefault();
    contactApi(setContForm, contForm);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setContForm({ ...contForm, respMessage: "", error: "" }),
      2000
    );
    return () => {
      clearTimeout(timeoutId);
    };
  }, [contForm.respMessage.length !== 0 || contForm.error.length !== 0]);

  return (
    <div className="contact-form mt-2 mt-lg-0">
      <form className="form-underline" onSubmit={formSumbit}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-6">
            <div className="field-input">
              <input
                type="text"
                name="firstname"
                placeholder="First Name*"
                className="form-control"
                required
                value={contForm.firstname}
                onChange={(e) => handleform(e)}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-lg-6">
            <div className="field-input">
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                className="form-control"
                required
                value={contForm.lastname}
                onChange={(e) => handleform(e)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-6">
            <div className="field-input">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="form-control"
                required
                value={contForm.email}
                onChange={(e) => handleform(e)}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-lg-6">
            <div className="field-input">
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="form-control"
                required
                value={contForm.phone}
                onChange={(e) => handleform(e)}
              />
            </div>
          </div>
        </div>

        <div className="field-textarea">
          <textarea
            name="comment"
            placeholder="Message*"
            className="form-control"
            required
            value={contForm.comment}
            onChange={(e) => handleform(e)}
          ></textarea>
        </div>

        {!contForm.loading ? (
          <div className="field-submit d-flex justify-content-center">
            <button
              type="submit"
              value="Entregar"
              className="btn btn-site ripple-wv"
              aria-label="Submit Now"
            >
              <span>Submit Now</span>
            </button>
          </div>
        ) : (
          <div className="field-submit d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {contForm.respMessage.length !== 0 && (
          <div className="field-submit mt-2">
            <Alert variant="filled" severity="success">
              Thank you! Your submission has been sent
            </Alert>
          </div>
        )}

        {contForm.error.length !== 0 && (
          <div className="field-submit mt-2">
            <Alert variant="filled" severity="error">
              Error sumbitting form, please try again
            </Alert>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
