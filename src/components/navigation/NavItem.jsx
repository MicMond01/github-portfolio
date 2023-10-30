import { Box, Typography } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";

const NavItem = ({ headTypo, bottomTypo, navIcon }) => {
  return (
    <Box
      className="flex justify-center items-center"
      sx={{
        "&:hover": {
          color: "rgb(37 99 235)", // Change the color to blue on hover
          transition: "color 0.3s ease", // Add a transition
        },
      }}
    >
      <IconButton
        sx={{
          marginRight: "0.5rem",
        }}
      >
        {navIcon}
      </IconButton>
      <Box>
        <Typography className="font-bold" sx={{ fontWeight: "bold" }}>
          {headTypo}
        </Typography>
        <Typography>{bottomTypo}</Typography>
      </Box>
    </Box>
  );
};

export default NavItem;
