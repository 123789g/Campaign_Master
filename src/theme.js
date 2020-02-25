// This file hold the style that will hopefully be applied to the whole site.
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    button: {
      display: "flex",
      maxWidth: "50px",
      maxHeight: "40px",
      background: "#ba6d61",
      color: "#ffffff",
      fontSize: "15px"
    }
  },
  palette: {
    type: "dark",
    background: {
      default: "#3b3b3b"
    },

    text: {
      primary: "#fff"
    }
  }
});
export default theme;
