import { JHButton } from "./JHButton";

interface AboutButtonProps {
  onClick: () => void;
}

export const AboutButton: React.FC<AboutButtonProps> = ({ onClick }) => {
  return (
    <JHButton
      disableRipple={true}
      sx={{
        position: "fixed",
        top: "10%",
        left: "10%",
        fontSize: "24px",
        color: "text.primary",
        zIndex: 2,
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
