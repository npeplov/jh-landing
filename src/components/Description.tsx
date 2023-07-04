import { Typography } from "@mui/material";

export const Description = () => {
  return (
    <Typography
      variant="h2"
      // noWrap
      sx={() => ({
        // mt: "calc(6/312*100%)",
        width: "49%",
        textAlign: "center",
        fontSize: "14px",
        lineHeight: "21px",
        
        whiteSpace: "nowrap",
        wordBreak: "break-word",
        textWrap: "balance",
        // fontSize: "clamp(0.625rem, -0.0837rem + 3.1496vw, 0.875rem)",
        // lineHeight: "clamp(0.625rem, -0.0837rem + 3.1496vw, 0.875rem)",
      })}
      color="text.primary"
    >
      Агрегатор проектов <br/>для Junior IT-специалистов
    </Typography>
  );
};
