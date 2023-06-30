import { JHButton } from "./JHButton";

interface AboutButtonProps {
  onClick: () => void;
}

export const AboutButton: React.FC<AboutButtonProps> = ({ onClick }) => {
  return (
    <JHButton
      disableRipple={true}
      sx={{
        fontSize: "24px",
        color: "text.primary",
        ":hover": {
          background: "transparent",
        },
      }}
      onClick={() => {
        onClick();
      }}
    >
      О проекте
    </JHButton>
  );
};
