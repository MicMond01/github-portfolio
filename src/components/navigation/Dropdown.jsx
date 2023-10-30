import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Box, Divider, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Dropdown = ({
  navItem,
  itemHeading,
  listItemIcon,
  navigationItem,
  listItem,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      {" "}
      <Stack direction="row" spacing={2}>
        <div>
          <Button
            onMouseEnter={handleToggle}
            onMouseLeave={handleClose}
            aria-owns={open ? "mouse-over-popper" : undefined}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            // onClick={handleToggle}
            disableRipple
            className=" text-white"
          >
            <Typography className="capitalize text-white">{navItem}</Typography>
            <KeyboardArrowDownIcon
              style={{
                transform: open ? "translateY(3px)" : "translateY(0)", // Move up by 1 pixel when open
                transition: "transform 0.3s ease", // Add a transition
              }}
              className="text-zinc-400"
            />
          </Button>
          <Popper
            aria-owns={open ? "mouse-over-popper" : undefined}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            // className="dropdown-menu"
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper onMouseEnter={handleToggle} onMouseLeave={handleClose}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        padding: "1rem 0",
                        width: "fit-content",
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                      }}
                    >
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        {navigationItem?.map((item, i) => (
                          <MenuItem
                            sx={{
                              m: "1rem 0",
                            }}
                            key={i}
                          >
                            <NavItem
                              // navIcon={<DraftsIcon fontSize="small" />}
                              headTypo={item.headTypo}
                              bottomTypo={item.bottomTypo}
                            />
                          </MenuItem>
                        ))}
                      </MenuList>
                      <Divider orientation="vertical" flexItem />
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                        sx={{
                          padding: "1rem 0",
                          mr: "3rem",
                        }}
                      >
                        <Typography
                          sx={{ fontWeight: "bold", marginLeft: "1rem" }}
                        >
                          {itemHeading}
                        </Typography>
                        {listItem?.map((item, i) => (
                          <MenuItem key={i}>
                            <Typography
                              sx={{
                                display: "flex",
                              }}
                            >
                              {item}
                              <Typography
                                sx={{
                                  ml: "1rem",
                                }}
                              >
                                {open && (
                                  <FontAwesomeIcon
                                    icon={faUpRightFromSquare}
                                    beatFade
                                  />
                                )}
                              </Typography>
                            </Typography>
                          </MenuItem>
                        ))} 
                         <Divider flexItem />
                      </MenuList>
                    </Box>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </div>
  );
};

Dropdown.propTypes = {
  navItem: PropTypes.string,
  itemHeading: PropTypes.string,
  navigationItem: PropTypes.array,
  listItem: PropTypes.array,
};

export default Dropdown;
