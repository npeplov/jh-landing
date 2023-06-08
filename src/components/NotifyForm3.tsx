import { Alert, Button, Collapse } from "@mui/material";
import { useState } from "react";
import "./formInput.css"

export const NotifyForm3 = () => {
  const [isEmailSent, setEmailSent] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const handleClick = () => {
    // 1 отправка
    if (email !== "") {
      // 2 если отправка ок
      setEmailSent(true);
      console.log(email);
    }
    // setEmailError(true);
  };
  return (
    <>
      {!isEmailSent && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <input
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            placeholder="Введите email"
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
        </div>
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
