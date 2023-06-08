import { Button } from "@mui/material";

interface NotifyButtonProps {
  onClick: () => void;
}

export const NotifyButton: React.FC<NotifyButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} sx={{
      borderRadius: "2rem",
      padding: "0.625rem 1.5rem",
      background: "#00A1E7",
      color: "#EAEAEA",
      cursor: "pointer",
      transition: "all .2s ease",
      "&:hover": {
        background: "#82D9FF",
        color: "#101335",
      }
    }}>
      Сообщить о старте
    </Button>
  );
};
