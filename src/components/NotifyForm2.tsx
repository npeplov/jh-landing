import { Alert, Box, Button, Collapse, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
// import makeStyles from "@mui/styles"
import { useState } from "react";

// const useStyles = makeStyles({
//   field: {
//     marginTop: 10,
//   },
// });

export const NotifyForm2 = () => {
  const [isEmailSent, setEmailSent] = useState(false);
  const [open, setOpen] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const handleClick = () => {
    // 1 отправка
    if (email !== "") {
      // 2 если отправка ок
      setEmailSent(true);
      console.log(email);
    }
    setEmailError(true);
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
          autoComplete="off"
          noValidate
        >
          <FormControl
          >
            {/* <InputLabel 
            margin="dense"
             htmlFor="my-input">Введите email</InputLabel> */}
            <Input id="my-input" aria-describedby="my-helper-text" sx={{
              background: "#eee",
              // borderRadius: "30px",
              "&:before": {
                display: "none",
              },
              "&:after": {
                display: "none"
              }
            }} />
          </FormControl>
          {/* <TextField
            label="Note Title"
            variant="outlined"
            color="secondary"
            required
            error={emailError}
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            inputProps={{
              sx: {
                height: 42,
                background: "#eee",
                padding: 0
              },
            }}
          /> */}

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
