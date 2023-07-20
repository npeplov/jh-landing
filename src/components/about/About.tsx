import { Stack, Typography } from "@mui/material";
import { ContactsButton } from "../buttons/ContactsButton";

export const About = ({ setModalOpen }: { setModalOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => {
  return (
    <Stack
      sx={(theme) => ({
        background: "rgba(46, 49, 83, 0.70)",
        maxWidth: "450px",
        borderRadius: "20px",
        color: "text.primary",
        gap: "36px",
        p: "30px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "340px",
        },
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

      <ContactsButton onClick={() => setModalOpen(true)} />
    </Stack>
  );
};
