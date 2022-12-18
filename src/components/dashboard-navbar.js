import * as React from "react";
import { AppBar, Box, Divider, IconButton, Toolbar } from "@mui/material";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import NextLink from "next/link";

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>
            <NextLink href="/" passHref>
              <Button color="inherit" style={{ textTransform: "none" }}>
                Dashboard
              </Button>
            </NextLink>
            <NextLink href="/therapists" passHref>
              <Button color="inherit" style={{ textTransform: "none" }}>
                Find a therapist
              </Button>
            </NextLink>
            <NextLink href="/products" passHref>
              <Button color="inherit" style={{ textTransform: "none" }}>
                Peace Pocket
              </Button>
            </NextLink>
            <NextLink href="/404" passHref>
              <Button color="inherit" style={{ textTransform: "none" }}>
                Blog
              </Button>
            </NextLink>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <NextLink href="/account" passHref>
                  <MenuItem onClick={handleClose}>My Account</MenuItem>
                </NextLink>
                <Divider />
                <NextLink href="/login" passHref>
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </NextLink>
                <Divider />
                <NextLink href="/register" passHref>
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                </NextLink>
                <Divider />
                <NextLink href="/therapists" passHref>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                </NextLink>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
