import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiLink: {
      root: {
        color: "#0d85c2",
        transition: "0.25s",
        "&:hover": { color: "#08608b" }
      }
    }
  }
});
