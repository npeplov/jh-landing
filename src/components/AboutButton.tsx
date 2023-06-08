import { JHButton } from "./buttons/JHButton";

interface AboutButtonProps {
  onClick: () => void;
}



export const AboutButton: React.FC<AboutButtonProps> = ({
  onClick,
}) => {
  return (
    <JHButton
      sx={{
        fontSize: "24px",
        
      }}
      onClick={() => {
        onClick();
      }}
    >
      О проекте
    </JHButton>
  );
};
