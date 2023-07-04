import CustomButton from "../../UI/CustomButton";

interface NotifyButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const NotifyButton: React.FC<NotifyButtonProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <>
    <CustomButton
      color={"primary"}
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      sx={{
        backgroundColor: "primary.300",
      }}
      
    >
      Сообщить о старте
    </CustomButton>
    </>
  );
};
