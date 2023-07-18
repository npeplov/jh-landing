import { Box, BoxProps } from "@mui/material";

export const Container: React.FC<BoxProps> = ({ children }) => {
  return (
    // <Box
    //   className="container"
    //   sx={(theme) => ({
    //     bgcolor: "background.default",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "stretch",
    //     height: "100vh",
    //     overflow: "hidden",
    //     [theme.breakpoints.down("sm")]: {
    //       flexDirection: "column",
    //       alignItems: "stretch",
    //       justifyContent: "flex-start",
    //     },
    //   })}
    // >
    //   {children}
    // </Box>
    <div
      className="container"
    >
      {children}
    </div>
  );
};
