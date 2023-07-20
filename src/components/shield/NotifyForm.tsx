import { Box, TextField } from "@mui/material";
import { useState } from "react";

import CustomButton from "../../UI/CustomButton";
import { validateEmail } from "../../utils/validateEmail";
import { NotifyButton } from "../buttons/NotifyButton";
import JHAlert from "../jhalert/JHAlert";
import "../input/formInput.css";

export const NotifyForm = () => {
  const [isEmailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (validateEmail(email)) {
      const formData = new FormData();
      formData.append("email", email);
      try {
        fetch("./mail.php", {
          method: "POST",
          body: formData,
        });
        setEmailSent(true);
      } catch (error) {
        console.log(error);
      }
    }
    setEmailError(true);
  };

  return (
    <>
      {!isEmailSent && (
        <Box
          marginTop="-15px"
          display="grid"
          alignItems="start"
          height={1}
          gridTemplateRows="77px 42px"
          justifyItems={"center"}
        >
          <TextField
            autoComplete="off"
            color="primary"
            sx={(theme) => ({
              ".MuiInput-root": {
                "&::before": {
                  borderBottomColor: theme.palette.primary.main,
                },
                "&::after": {
                  borderBottomColor: theme.palette.primary.main,
                },
              },
              ".MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottomColor: theme.palette.primary.main,
              },
            })}
            error={emailError}
            variant="standard"
            label="Введите email"
            helperText={emailError && "Неверный формат почты"}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />

          <CustomButton
            sx={{
              backgroundColor: "primary.300",
            }}
            onClick={handleClick}
            variant="contained"
            color="primary"
          >
            Отправить
          </CustomButton>
        </Box>
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
            <div>
              <JHAlert
                severity="success"
                variant="filled"
                onClose={() => {
                  setOpen((prev) => !prev);
                }}
              >
                Ждем вас!
              </JHAlert>
            </div>
          )}
        </div>
      )}
    </>
  );
};
