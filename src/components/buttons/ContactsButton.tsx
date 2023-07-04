import React from "react";
import CustomButton from "../../UI/CustomButton";
import { ReactComponent as ContactsIcon } from "../../svg/contacts.svg";

interface ContactsButtonProps {
  onClick: () => void;
}

export const ContactsButton: React.FC<ContactsButtonProps> = ({ onClick }) => {
  return (
    <CustomButton
      onClick={onClick}
      sx={{
        display: "flex",
        gap: ".6rem",
        borderRadius: "2rem",
        padding: "0.625rem 2.5rem",
        background: "#00A1E7",
        color: "#EAEAEA",
        cursor: "pointer",
        transition: "all .2s ease",
        width: "fit-content",
        margin: "0 auto",
      }}
    >
      <ContactsIcon />
      Связаться с нами
    </CustomButton>
  );
};
