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
      color={"primary"}
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      sx={{
        padding: "0.625rem 1.5rem",
        "&:hover": {
          color: "ButtonText",
        },
      }}
    >
      Сообщить о старте
    </Button>
  );
};
