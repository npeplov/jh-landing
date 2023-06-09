import { Button } from "@mui/material";

interface NotifyButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const NotifyButton: React.FC<NotifyButtonProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      sx={{
        fontSize: "1rem",
        lineHeight: "135%",
        borderRadius: "2rem",
        padding: "0.625rem 1.5rem",
        background: "#00A1E7",
        color: "#EAEAEA",
        cursor: "pointer",
        transition: "all .2s ease",
        m: "0 auto",
        "&:hover": {
          background: "#82D9FF",
          color: "#101335",
        },
      }}
    >
      Сообщить о старте
    </Button>
  );
};
