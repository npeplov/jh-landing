import { Button, ButtonProps } from "@mui/material";
import { forwardRef } from "react";

export const JHButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <Button {...props} ref={ref} />;
  }
);
