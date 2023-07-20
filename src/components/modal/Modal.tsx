import { Stack, TextField, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import CustomButton from "../../UI/CustomButton";
import { validateEmail } from "../../utils/validateEmail";
import JHAlert from "../jhalert/JHAlert";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ open, setOpen }: ModalProps) => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailSent, setEmailSent] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    if (validateEmail(email)) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("message", message);
      try {
        fetch("./mail.php", {
          method: "POST",
          body: formData,
        });
        setEmailError(false);
        setEmailSent(true);
      } catch (error) {
        console.log(error);
      }
    } else setEmailError(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          borderRadius: "20px",
          border: "2px solid #00A1E7",
          backgroundImage: "none",
          p: "20px",
        },
      }}
      onClose={handleClose}
    >
      <DialogContent sx={{ p: 0 }}>
        <Stack gap={2} width={320}>
          <TextField
            disabled={isEmailSent}
            autoComplete="off"
            color="primary"
            sx={(theme) => ({
              width: 220,
              marginInline: "auto",
              ".MuiFormControl-root .MuiTextField-root": {
                borderBottom: "10px solid #000 !important",
              },
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
          <TextField
            disabled={isEmailSent}
            variant="filled"
            multiline
            maxRows={2}
            minRows={2}
            value={message}
            label="Ваше сообщение"
            name="message"
            autoComplete="off"
            onChange={({ target }) => {
              setMessage(target.value);
            }}
            sx={{
              background: "#E6E1E5",
              borderRadius: "4px",
              border: "2px solid transparent",
              ":hover:not([disabled])": {
                border: "2px solid #00A1E7",
                background: "#E6E1E5",
              },
              ":disabled": {
                border: "2px solid transparent",
                background: "#E6E1E5",
              },
              ":focus-within": {
                border: "2px solid #00A1E7",
                background: "#E6E1E5",
              },
              ".MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottomColor: theme.palette.primary.main,
              },
              ".MuiFilledInput-root": {
                border: "2px solid transparent",
                borderRadius: "4px",
                background: "#E6E1E5",
                // "&:hover:enabled": {
                //   border: "2px solid #00A1E7",
                //   background: "#E6E1E5",
                // },
                // "&:hover:disabled": {
                //   border: "2px solid transparent",
                //   background: "#E6E1E5",
                // },

                ":disabled": {
                  border: "2px solid transparent",
                  background: "#E6E1E5",
                },
                "&:before": {
                  borderBottomColor: theme.palette.primary.main,
                  display: "none",
                },
                "&:after": {
                  borderBottomColor: theme.palette.primary.main,
                  display: "none",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: theme.palette.grey[800],
              },
            }}
            inputProps={{
              sx: {
                color: "#0B1F33",
                background: "#E6E1E5",
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#00A1E7",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#82D9FF",
                },
              },
            }}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        {!isEmailSent && (
          <CustomButton
            variant="contained"
            onClick={handleClick}
            sx={{ width: "fit-content", margin: "0 auto" }}
          >
            Отправить
          </CustomButton>
        )}
        {isEmailSent && (
          <JHAlert
            severity="success"
            variant="filled"
            sx={{
              margin: "0 auto",
            }}
          >
            Сообщение отправлено!
          </JHAlert>
        )}
      </DialogActions>
    </Dialog>
  );
};
