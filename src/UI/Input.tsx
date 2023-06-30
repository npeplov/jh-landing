import { TextField, TextFieldProps } from "@mui/material";
import React, { ChangeEvent } from "react";

interface InputProps extends Omit<TextFieldProps, "onChange"> {
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const { name, label, value, onChange, ...otherProps } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  );
};
