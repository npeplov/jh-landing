import { Box, Typography } from "@mui/material";
import { ContactsButton } from "./ContactsButton";

export const About = () => {
  return (
    <Box
      sx={{
        width: "466px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "36px",
      }}
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
      <ContactsButton />
    </Box>
  );
};
