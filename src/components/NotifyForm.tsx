import { Alert, Button, Zoom } from "@mui/material";
import { useState, useRef } from "react";

import "./input/formInput.css";
import { NotifyButton } from "./buttons/NotifyButton";
// import { JHInput } from "./input/JHInput";

const validateEmail = (email: string) => {
  return email.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const NotifyForm = () => {
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

  const refButton = useRef<HTMLButtonElement>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {!isEmailSent && (
        <>
          {/* <JHInput
            onChange={setEmail()}
            вернуть target.value
            отправить?
            onChange={()=>""}
            placeholder="Введите email"
          /> */}
          <input
            // при клике error_big,
            // меняется стейт при клике?
            className={emailError ? "error email" : "email"}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            placeholder="Введите email"
            onKeyUp={({ key }) => {
              console.log(key);
              key === "Enter" && handleClick();
            }}
          />
          <Button
            ref={refButton}
            onClick={() => handleClick()}
            sx={{
              color: "text.primary",
              borderRadius: "2rem",
              padding: "0.5rem 1.563rem",
              background: "#00A1E7",
              transition: "all .2s ease",
              width: "max-content",
              "&:active": {
                background: "#D6F3FF",
                color: "#101335",
              },
              "&:hover": {
                background: "#82D9FF",
                color: "#101335",
              },
            }}
          >
            Отправить
          </Button>
        </>
      )}
      {isEmailSent && (
        <div
          style={{
            maxHeight: "45px",
            overflow: "hidden",
          }}
        >
          {!open && <NotifyButton disabled onClick={() => null} />}
          {open && (
            <Zoom in={open} timeout={500}>
              <Alert
                onClose={() => {
                  setOpen((prev) => !prev);
                }}
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  borderRadius: 30,
                  background: "#5DCB4B",
                  padding: "4px 25px",
                  "& svg": {
                    fill: "#fff",
                  },
                }}
                severity="success"
              >
                Ждем вас!
              </Alert>
            </Zoom>
          )}
        </div>
      )}
    </div>
  );
};
