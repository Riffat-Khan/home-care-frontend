import * as React from "react";
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logoTrans from "../../assets/images/logo_trans.png";
import ResponsiveAppBar from "../../modals/MenuBar/MenuBar"

const drawerWidth = 240;

export default function PermanentDrawerLeft({ SideBarContent , TopiconArray , SecIconArray ,heading, screen }) {
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#314154",
          height: "70px",
        }}
      >
        <ResponsiveAppBar />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#314154",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img className="" src={logoTrans} alt="logo" />
        <Toolbar />
        <List sx={{ marginTop: "-50px", color: "white" }}>
          {SideBarContent.map(({ text, link }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={link}>
                <ListItemIcon sx={{ color: "white" }} key={index}>
                  {TopiconArray[index % TopiconArray.length]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: "white" }} />
        <List sx={{ color: "white" }}>
          {["Setting", "Signout"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }} key={index}>
                  {SecIconArray[index % SecIconArray.length]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          paddingLeft: "150px",
        }}
      >
        <Toolbar />
        <Typography
          sx={{ color: "#314154", fontSize: "35px", fontWeight: "bold" }}
        >
          {heading}
        </Typography>
        {screen}
      </Box>
    </Box>
  );
}
