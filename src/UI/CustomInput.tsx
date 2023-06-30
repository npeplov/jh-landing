import { useMediaQuery } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import React, { forwardRef } from "react";

interface CustomTextFieldProps extends TextFieldProps {
  sx?: React.CSSProperties;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ sx, ...props }) => {
  const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
  const commonSx: React.CSSProperties = {
    padding: "0.625em 1.5em",
    fontSize: "clamp(0.875rem, 0.5207rem + 1.5748vw, 1rem)",
    transition: "all .2s ease",
    ...(isDesktop && {
      "&:hover": {
        backgroundColor: "primary.500",
        // boxShadow: "1px 1px 10px 0px #2196F3, -1px -1px 10px 0px #2196F3",
      },
      "&:active": {
        boxShadow: "none",
      },
    }),
    
    ...sx,
  };

  return <TextField sx={commonSx} {...props} />;
};

export const JHTextField = forwardRef<HTMLTextFieldElement, CustomTextFieldProps>(
  (props, ref) => {
    return <CustomTextField {...props} ref={ref} />;
  }
);

export default CustomTextField;
