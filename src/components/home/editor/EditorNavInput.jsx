import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";
import { Box } from "@mui/material";

export default function EditorNavInput() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "2rem",
        backgroundColor: "#0d1117",
        border: "1px solid #30363d",
        color: "#8C959F",
        borderRadius: "6px",
        width: "100%",

        "@media (min-width: 868px)": {
          minWidth: "35rem", // Margin for screens with a minimum width of 868px or less
        },
      }}
      className="mx:w-full w-20px"
    >
      <IconButton color="#8C959F" sx={{ p: "10px" }} aria-label="directions">
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="octicon octicon-lock color-fg-subtle"
        >
          <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
        </svg>
      </IconButton>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: "#8C959F",
          ".css-yz9k0d-MuiInputBase-input": {
            textAlign: "center",
          },
        }}
        value="mona-github-github-g59jpq2w5w7.github.dev"
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="octicon octicon-sync color-fg-subtle"
        >
          <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
        </svg>
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
