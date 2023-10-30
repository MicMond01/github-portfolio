import { Button, Stack, TextField } from "@mui/material";
import React from "react";

const HeroForm = () => {
  return (
    <div className="flex md:block ">
      <Stack
        component="form"
        sx={
          {
            // width: "25rem",
          }
        }
        className="w-[60%] md:w-[100%]"
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          variant="filled"
          placeholder="Email address"
          sx={{
            backgroundColor: "white",
            borderRadius: "0.357rem 0 0 0.357rem",
            width: "100%",
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
        className="home-campaign-signup-button  py-4 md:w-full w-auto mb-3 mb-md-0 rounded-md-left-0 btn-signup-mktg"
      >
        Sign up for Githuub
      </Button>
    </div>
  );
};

export default HeroForm;
