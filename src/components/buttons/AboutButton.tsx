import { JHButton } from "./JHButton";

interface AboutButtonProps {
  onClick: () => void;
}

export const AboutButton: React.FC<AboutButtonProps> = ({ onClick }) => {
  return (
    <JHButton
      sx={{
        fontSize: "24px",
        color: "text.primary"
      }}
      onClick={() => {
        onClick();
      }}
    >
      О проекте
    </JHButton>
  );
};
