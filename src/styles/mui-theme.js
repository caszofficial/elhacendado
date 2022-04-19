import { createTheme } from "@mui/material";

const primary = "#FFFFFF";
const secondary = "#db5e5e";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});

export default theme;
