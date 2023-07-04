import { InputBase } from "@mui/material";

interface JHInputProps {
  onChange: () => string;
  placeholder: string;
}

export const JHInput = ({ onChange, placeholder }: JHInputProps) => {
  return (
    <InputBase
      // onChange={{ target }=>target.value}
      placeholder={placeholder}
      onInvalid={() => null}
      onChange={onChange}
      autoFocus={false}
      error={false}
      name="email"
      type="text"
      required
      // endAdornment
      disabled={false}
      sx={{
        background: "#C5D7E8FC",
        fontfamily: "Nunito",
        lineheight: "1rem",
        fontweight: "500",
        borderRadius: 5,
        color: "#000",
        width: "89.75%",
        maxWidth: "192px",
        // 197.14
        "& input": {
          height: "auto",
          padding: "8px 16px",
          fontSize: "clamp(0.875rem, 0.5207rem + 1.5748vw, 1rem)",
          lineHeight: "19px",
        },
        borderWidth: 0,
        // в clamp
        // 192x42
        // кальк
        // в %
      }}
    />
  );
};
