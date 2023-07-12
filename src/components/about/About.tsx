import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { forwardRef, useState } from "react";
import CustomButton from "../../UI/CustomButton";
import { Input } from "../../UI/Input";
import { validateEmail } from "../../utils/validateEmail";
import { ContactsButton } from "../buttons/ContactsButton";
import JHAlert from "../jhalert/JHAlert";

export const About = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const [message, setMessage] = useState("");
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
        setEmailSent(true);
      } catch (error) {
        console.log(error);
      }
    }
    setEmailError(true);
  };

  return (
    <Box
      sx={() => ({
        background: "rgba(255, 255, 255, 0.05);",
        borderRadius: "10px",
        p: "30px",
        display: "flex",
        width: "496px",
        textAlign: "left",
        flexDirection: "column",
        gap: "36px",
        color: "text.primary",
        position: "absolute",
        left: -370,
        top: 150,
      })}
    >
      <Typography>
        Команда JuniorHub создает платформу, на которой начинающие разработчики
        смогут улучшить свои навыки и реализовать собственные идеи, а
        представители бизнеса – найти исполнителя на свой заказ или поддержать
        начинающих специалистов.
      </Typography>
      <Typography>
        Проект разрабатывается на стеке:
        <br />
        Backend - Java, WebFlux, Spring, PostgreSQL, Keycloak
        <br />
        Frontend - JavaScript, TypeScript, React, Redux, Material UI
      </Typography>

      {!isContactClicked && (
        <ContactsButton onClick={() => setIsContactClicked(true)} />
      )}

      {isContactClicked && !isEmailSent && (
        <Stack gap={2}>
          <Input
            value={email}
            label="Email, на который отправить ответ"
            name="email"
            autoComplete="off"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            error={emailError}
            helperText={emailError && "Неверный формат почты"}
          />
          <Input
            multiline
            maxRows={3}
            minRows={3}
            value={message}
            label="Ваше сообщение"
            name="message"
            autoComplete="off"
            onChange={({ target }) => {
              setMessage(target.value);
            }}
            inputProps={{
              sx: {
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
          <CustomButton
            variant="contained"
            onClick={handleClick}
            sx={{ width: "fit-content", margin: "0 auto" }}
          >
            Отправить
          </CustomButton>
        </Stack>
      )}
      {isEmailSent && (
        <JHAlert
          severity="success"
          variant="filled"
          sx={{
            margin: "0 auto",
          }}
        >
          Cообщение отправлено!
        </JHAlert>
      )}
    </Box>
  );
});
