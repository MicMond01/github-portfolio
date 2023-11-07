import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";
import { Box } from "@mui/material";

export default function SearchInput() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 1px",
        display: "flex",
        alignItems: "center",
        width: 350,
        height: "2.5rem",
        backgroundColor: "rgba(46,55,74, 0.8)",
        border: "0.3px solid #979A9C",
        color: "#8C959F",
        borderRadius: "8px",
      }}
    >
      <IconButton color="#8C959F" sx={{ p: "10px" }} aria-label="directions">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#8C959F" }}
        placeholder="Search or jump to..."
        inputProps={{ "aria-label": "Search or jump to..." }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <Box
          sx={{
            p: 1,
            border: "1px solid #979A9C",
            borderRadius: "5px",
            height: "1.5rem",
            width: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#8C959F",
            fontSize: "10px",
          }}
        >
          /
        </Box>
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
