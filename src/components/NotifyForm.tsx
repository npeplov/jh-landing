import {
  Box,
  TextField
} from "@mui/material";
import { useState } from "react";

import CustomButton from "../UI/CustomButton";
import { validateEmail } from "../utils/validateEmail";
import { NotifyButton } from "./buttons/NotifyButton";
import "./input/formInput.css";
import JHAlert from "./jhalert/JHAlert";

// const JHInput = () => {
//   const [error, setError] = useState(false);
//   return (
//     <TextField
//       variant="filled"
//       // label="Введите email"
//       error={error}
//       onChange={() => {
//         setError(true);
//       }}
//       onMouseLeave={() => {
//         setError(false);
//       }}
//       sx={{
//         ".MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
//           borderBottom: "none",
//         },
//         ".MuiFilledInput-root": {
//           "&::before": {
//             borderBottom: "none",
//           },
//           "&::after": {
//             borderBottom: "none",
//           },
//         },
//         ".MuiInputBase-colorPrimary": {
//           borderRadius: "0.9rem",
//           color: "#ddd",
//           background: "#E6E1E5",
//           "&:hover": {
//             color: "#cac4d0",
//           },
//         },
//       }}
//     />
//   );
// };

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
            InputProps={{}}
            InputLabelProps={
              {
                // focused: true,
                // color: "info",
              }
            }
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

      {/*
      
      --------------  JH ALERT  ------------ 
      
      1. пробросить онклоз
    
      
      */}

      {isEmailSent && (
        <div
          style={{
            maxHeight: "45px",
            overflow: "hidden",
          }}
        >
          {!open && <NotifyButton disabled onClick={() => null} />}
          {open && (
            // <Zoom in={open} timeout={500}>
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
              {/* <Alert
                onClose={() => {
                  setOpen((prev) => !prev);
                }}
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "10px",
                    padding: "0 16px 0 16px",
                    "&.MuiAlert-icon": {
                      padding: "0",
                      alignItems: "center",
                      fontSize: "10px",
                    },
                    "& .MuiAlert-action": {
                      padding: "0",
                      alignItems: "center",
                    },
                  },
                  [theme.breakpoints.up("md")]: {
                    fontSize: "14px",
                  },
                  color: "#fff",
                  borderRadius: 30,
                  background: "#5DCB4B",
                  "& svg": {
                    fill: "#fff",
                    width: "15px",
                    height: "15px",
                  },
                })}
                severity="success"
                variant="filled"
              >
              Ждем вас!
              </Alert> */}
              {/* </Zoom> */}
            </div>
          )}
        </div>
      )}
    </>
  );
};
