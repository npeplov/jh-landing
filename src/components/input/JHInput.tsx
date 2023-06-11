import { InputBase } from "@mui/material";

interface JHInputProps {
  onChange: () => string;
  placeholder: string;
}

export const JHInput = ({ onChange, placeholder }: JHInputProps) => {
  return (
    <InputBase
      placeholder={placeholder}
      onChange={onChange}
      // onChange={{ target }=>target.value}
      autoFocus={false}
      error={false}
      name="email"
      onInvalid={() => null}
      required
      size="medium"
      type="text"
      endAdornment
      disabled={false}
      sx={{
        background: "#C5D7E8FC",
        borderRadius: "3rem",
        padding: "5px 20px",
        maxWidth: "191px",
        fontfamily: "Nunito",
        lineheight: "1rem",
        fontsize: "1rem",
        fontweight: "500",
        color: "#000",
      }}
    />
  );
};
