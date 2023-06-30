import { Typography } from "@mui/material";

export const Description = () => {
  return (
    <Typography
      variant="h2"
      sx={() => ({
        mt: "calc(6/312*100%)",
        textAlign: "center",
        fontSize: "clamp(0.625rem, -0.0837rem + 3.1496vw, 0.875rem)",
        lineHeight: "clamp(0.625rem, -0.0837rem + 3.1496vw, 0.875rem)",
      })}
      color="text.primary"
    >
      Агрегатор проектов для Junior IT-специалистов
    </Typography>
  );
};
