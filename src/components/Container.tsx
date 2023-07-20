import { BoxProps } from "@mui/material";

export const Container: React.FC<BoxProps> = ({ children }) => {
  return (
    <div
      className="container"
    >
      {children}
    </div>
  );
};
