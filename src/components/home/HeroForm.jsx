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
            borderRadius: "0.357rem 0 0 0.357rem",
          }}
          InputProps={{ disableUnderline: true }}
          size="2rem"
        />
      </Stack>
      <Button
        sx={{
          color: "white",
          borderRadius: "0 0.357rem  0.357rem 0",
        }}
        className="home-campaign-signup-button h-[3.5rem] py-4  mb-3 mb-md-0 rounded-md-left-0 btn-signup-mktg"
      >
        Sign up for Github
      </Button>
    </div>
  );
};

export default HeroForm;
