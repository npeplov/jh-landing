import { Typography } from "@mui/material";

export const Title = () => {
  return (
    <Typography
      variant="h1"
      color="text.primary"
      sx={() => ({
        mt: "calc(23/2/312*100%)",
        fontSize: "clamp(1.5rem, 0.0827rem + 6.2992vw, 2rem)",
        lineHeight: "clamp(1.5rem, 0.0827rem + 6.2992vw, 2rem)",
      })}
    >
      JuniorHub
    </Typography>
  );
};
