import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Icon } from "@iconify/react";

const CheckOutSelect = ({ options, name, label, typeError, ...props }) => {
  return (
    <div className="mui-textfield select">
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          name={name}
          IconComponent={(props) => (
            <Icon icon="ph:caret-down" className="mui-dwncaret" />
          )}
          onChange={(e) => setCustomerInfoValues(e)}
          {...props}
        >
          {options.map((item, index) => {
            return (
              <MenuItem value={`${item.value}`} key={index}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {typeError && (
        <div className="text-danger text-xsalert mt-1">{typeError}</div>
      )}
    </div>
  );
};

export default CheckOutSelect;
