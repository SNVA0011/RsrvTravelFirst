import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { email, gst } from "../../utils/constants";

const CheckOutInput = ({
  maxLength = 40,
  minLength = 0,
  spacing = false,
  type,
  name,
  label,
  typeError,
  ...props
}) => {
  // useEffect(() => {
  //   var field = document.querySelector(`[name=${name}]`);

  //   field.addEventListener("keypress", function (event) {
  //     var key = event.keyCode;

  //     if (spacing) {
  //       if (key === 32) {
  //         event.preventDefault();
  //       }
  //     } else {
  //       if (field.value.length === 0 && key === 32) {
  //         event.preventDefault();
  //       }
  //     }

  //     if (name === "email") {
  //       if (email.includes(key)) {
  //       } else {
  //         event.preventDefault();
  //       }
  //     }
  //     if (name === "gstnumber") {
  //       if (gst.includes(key)) {
  //       } else {
  //         event.preventDefault();
  //       }
  //     }

  //     if (name === "phonenumber") {
  //       if (field.value.length >= 12) {
  //         event.preventDefault();
  //       }
  //     }

  //     if (field.value.length > 40) {
  //       event.preventDefault();
  //     }
  //   });
  // }, []);

  return (
    <div className="mui-textfield">
      <TextField
        type={type}
        name={name}
        autoComplete="off"
        maxLength={maxLength}
        minLength={minLength}
        label={label}
        InputProps={{ sx: { height: 50 } }}
        fullWidth
        variant="outlined"
        onPaste={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
        {...props}
      />
      {typeError && (
        <div className="text-danger text-xsalert mt-1">{typeError}</div>
      )}
    </div>
  );
};

export default CheckOutInput;
