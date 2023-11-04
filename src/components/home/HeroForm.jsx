import { Button, Stack, TextField } from "@mui/material";
import React from "react";

const HeroForm = () => {
  return (
    <div className="hero-form  ">
      <Stack
        component="form"
        sx={
          {
            // width: "25rem",
          }
        }
        className="w-[100%]"
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="hero-form-input "
          hiddenLabel
          id="filled-hidden-label-normal"
          variant="filled"
          placeholder="Email address"
          sx={{
            backgroundColor: "white",
          }}
          InputProps={{ disableUnderline: true }}
          size="2rem"
        />
      </Stack>
      <Button
        sx={{
          color: "white",
          margin: "1rem 0", // Default margin
          "@media (min-width: 868px)": {
            margin: "0", // Margin for screens with a minimum width of 868px or less
          },
        }}
        className="home-campaign-signup-button h-[3.5rem] py-4  btn-signup-mktg"
      >
        Sign up for Github
      </Button>
    </div>
  );
};

export default HeroForm;
