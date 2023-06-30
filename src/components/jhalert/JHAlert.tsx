import Alert from "@mui/material/Alert";

const JHAlert = ({  ...props }) => {
  return (
    <Alert
      {...props}
      sx={(theme) => ({
        p: "0.8em 1.6em",

        [theme.breakpoints.up("mobile")]: {
          p: "0.5em 1.5em",
        },

        fontSize: "clamp(0.67rem, -0.2654rem + 4.1575vw, 1rem)",
        borderRadius: "30px",
        color: theme.palette.text.primary,
        borderColor: theme.palette.success.dark,
        gap: "8px",
        "& .MuiAlert-icon": {
          fontSize: "1.4em",
          mr: "initial",
          p: "initial",
          alignItems: "center",
        },
        "& .MuiAlert-message": {
          p: 0,
          display: "flex",
          alignItems: "center",
        },
        "& .MuiAlert-action": {
          alignItems: "center",
          m: "initial",
          p: "initial",
        },
        "& .MuiAlert-action .MuiIconButton-root": {
          fontSize: "1.4em",
          m: "initial",
          p: "initial",
          "& .MuiSvgIcon-root": {
            fontSize: "1.2em",
          }
        },
      })}
    />
  );
};

// MuiButtonBase-root 
// MuiIconButton-root 
// MuiIconButton-colorInherit 
// MuiIconButton-sizeSmall 
// css-2hllsz-MuiButtonBase-root-MuiIconButton-root

export default JHAlert;


