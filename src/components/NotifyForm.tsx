import { Alert, Box, Button, Collapse } from "@mui/material";

import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const CustomTextField = styled(TextField)(() => ({
  backgroundColor: "#C5D7E8",
  borderRadius: "50px",
  "& label": {
    color: "black",
    textAlign: "center",
    transform: "translate(-50%, 8px)", // Выравнивание по горизонтали
    left: "50%", // Позиционирование по горизонтали
    "&.Mui-focused": {
      color: "white",
      transform: "translate(-50%, -25px)",
    },
  },
  "& .MuiInput-root": {
    "& .MuiInputBase-input": {
      color: "black",
    },
    "&:focus": {
      "& .MuiInputBase-input": {
        color: "white",
      },
    },
    "&.MuiOutlinedInput": {
      // padding: 0,
    },
    "&.MuiInput-underline:before, &.MuiInput-underline:after": {
      display: "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none", // Добавляем стиль для отключения fieldset
  },
}));

export const NotifyForm = () => {
  const [isEmailSent, setEmailSent] = useState(false);
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    // 1 отправка
    if (open)
      // 2 если отправка ок
      setEmailSent(true);
  };
  return (
    <>
      {!isEmailSent && (
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <CustomTextField
            label="Введите емейл"
            sx={{
              width: "180px",
              height: "42px",
            }}
          />

          <Button
            onClick={() => handleClick()}
            sx={{
              borderRadius: "2rem",
              padding: "0.5rem 1.563rem",
              background: "#00A1E7",
              color: "#EAEAEA",
              cursor: "pointer",
              transition: "all .2s ease",
              width: "max-content",
              "&:hover": {
                background: "#82D9FF",
                color: "#101335",
              },
            }}
          >
            Отправить
          </Button>
        </Box>
      )}
      {isEmailSent && (
        <>
          <Collapse in={open}>
            <Alert
              onClose={() => {
                setOpen(false);
              }}
              sx={{
                fontSize: "14px",
                borderRadius: 30,
                background: "#5DCB4B",
                padding: "4px 10px",
              }}
              severity="success"
            >
              Email получен!
            </Alert>
          </Collapse>
        </>
      )}
    </>
  );
};
