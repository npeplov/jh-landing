import { useMediaQuery } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import React, { forwardRef } from "react";

interface CustomButtonProps extends ButtonProps {
  sx?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({ sx, ...props }) => {
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

  return <Button sx={commonSx} {...props} />;
};

export const JHButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    return <CustomButton {...props} ref={ref} />;
  }
);

export default CustomButton;
