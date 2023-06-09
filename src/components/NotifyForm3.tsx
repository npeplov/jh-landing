import { Alert, Button, Collapse } from "@mui/material";
import { useState } from "react";
import "./formInput.css";

const validateEmail = (email: string) => {
  return email.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const NotifyForm3 = () => {
  const [isEmailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const handleClick = () => {
    if (validateEmail(email)) {
      const formData = new FormData();
      formData.append("email", email);
      fetch("./mail.php", {
        method: "POST",
        body: formData,
      });
      setEmailSent(true);
    }
    setEmailError(true);
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
            className={emailError ? "error email" : "email"}
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
