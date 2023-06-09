import { Box, BoxProps } from "@mui/material";

export const Container: React.FC<BoxProps> = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};
