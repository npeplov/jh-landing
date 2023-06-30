import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "../UI/CustomButton";
import { Input } from "../UI/Input";
import { validateEmail } from "../utils/validateEmail";
import { ContactsButton } from "./buttons/ContactsButton";

export const About = () => {
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
        display: "flex",
        width: "466px",
        textAlign: "left",
        flexDirection: "column",
        gap: "36px",
        color: "text.primary",
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

      {isContactClicked && (
        <Stack gap={2}>
          <Input
            value={email}
            label="Email, на который отправить ответ"
            name="email"
            autoComplete="off"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
          <Input
          multiline
          maxRows={4}
          minRows={4}
            value={message}
            label="Ваше сообщение"
            name="message"
            autoComplete="off"
            onChange={({ target }) => {
              setMessage(target.value);
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
    </Box>
  );
};
