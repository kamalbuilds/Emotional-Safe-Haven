import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";


export default function ButtonAppBar() {
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
            <Button color="inherit" style={{ textTransform: "none" }}>
              Find a therapist{" "}
            </Button>
            <Button color="inherit" style={{ textTransform: "none" }}>
              Peace Pocket
            </Button>
            <Button color="inherit" style={{ textTransform: "none" }}>
              Blog
            </Button>
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
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

// import React from "react";
// //import "./Sidebar.css";
// import SidebarOption from "./SidebarOption";
// //import HomeIcon from "@material-ui/icons/Home";
// import IconButton from "@mui/material/IconButton";
// //import SearchIcon from "@material-ui/icons/Search";
// import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
// //import { LibraryMusic } from "@material-ui/icons";
// //import { useDataLayerValue } from "./DataLayer";

// function Sidebar() {
//   // const [{ playlists }, dispatch] = useDataLayerValue();

//   return (
//     <div className="sidebar">
//       <img
//         className="sidebar__logo"
//         src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
//         alt="Spotify logo"
//       />

//       <SidebarOption title="Home" Icon={IconButton} />
//       <SidebarOption title="Search" Icon={ChartBarIcon} />
//       <SidebarOption title="Your Library" Icon={ChartBarIcon} />
//       <br />
//       <strong className="sidebar__title">PLAYLISTS</strong>
//       <hr />
//       {/* {playlists?.items?.map((playlist) => (
//         <SidebarOption title={playlist.name} />
//       ))} */}

//       <style jsx>{`
//         . .sidebar {
//           height: 100vh;
//           color: white;
//           padding-left: 10px;
//           padding-right: 10px;
//           flex: 0.2;
//           min-width: 230px;
//           background-color: #040404;
//         }

//         .sidebar > hr {
//           border: 1px solid #282828;
//           width: 90%;
//           margin: 10px auto;
//         }

//         .sidebar__logo {
//           height: 100px;
//           width: auto;
//           padding: 10px;
//           margin: auto;
//         }

//         .sidebar__title {
//           margin-left: 5px;
//           padding: 5px;
//           font-size: 12px;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Sidebar;
