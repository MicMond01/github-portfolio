import { Button, Typography } from "@mui/material";
import { forItem, listItem, navigationItem } from ".";
import gitLogo from "../../assets/images/github.png";
import SearchInput from "../SearchInput";
import Dropdown from "./Dropdown";

const NavigationBar = () => {
  return (
    <div className="NavigationBarD text-blue-50 flex items-center justify-between pt-4 mr-4">
      <div className="navLeft flex  items-center ">
        <img src={gitLogo} alt="" className="logo" />
        <ul className="flex">
          <li className="navItem ml-5">
            <Dropdown
              navItem="Product"
              navigationItem={navigationItem}
              listItem={listItem}
              itemHeading="Explore"
            />
          </li>
          <li className="navItem ml-5">
            <Dropdown
              navItem="Solutions"
              itemHeading="Resources"
              listItem={forItem}
            />
          </li>
          <li className="navItem ml-5">Open Source</li>
          <li className="navItem ml-5">Price</li>
        </ul>
      </div>

      <div
        className="navRight"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchInput />

        <Button
          aria-haspopup="true"
          // onClick={handleToggle}
          // disableRipple
          className=" text-white "
          sx={{ mx: 3 }}
        >
          <Typography className="capitalize text-white">Sign in</Typography>
        </Button>

        <Button
          // aria-haspopup="true"
          variant="outlined"
          // onClick={handleToggle}
          // disableRipple
          className=" text-white"
          sx={{ border: "1px solid white" }}
        >
          <Typography className="capitalize text-white">Sign up</Typography>
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;
