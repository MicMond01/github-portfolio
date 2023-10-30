import { Button, Typography } from "@mui/material";
import { forItem, listItem, navigationItem } from ".";
import gitLogo from "../../assets/images/github.png";
import SearchInput from "../SearchInput";
import Dropdown from "./Dropdown";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Turn as Hamburger } from "hamburger-react";

const NavigationBarM = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      Hamburger(event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      //   role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ height: "10%" }}>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="NavigationBarM text-blue-50 items-center justify-between  flex-col lg:flex-row p-responsive h-full relative z-10">
      <div className="navLeft flex  items-center justify-between w-full h-full">
        <Button
          // aria-haspopup="true"
          variant="outlined"
          // onClick={handleToggle}
          // disableRipple
          className=" text-white w-15"
          sx={{ border: "1px solid white" }}
        >
          <Typography
            sx={{ fontSize: "10px" }}
            className="capitalize text-white "
          >
            Sign up
          </Typography>
        </Button>

        <img src={gitLogo} alt="" className="logo " />

        <div className="">
          <Button
            sx={{ padding: "0px", minWidth: "0px", width: "35px" }}
            onClick={toggleDrawer("right", true)}
          >
            <Hamburger size={20} color="#fff" />
          </Button>
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarM;
