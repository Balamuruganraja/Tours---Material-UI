import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import { Badge, Box, IconButton, List } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@emotion/styled";
import LightModeIcon from '@mui/icons-material/LightMode';
import { Block, NotificationsActive } from "@mui/icons-material";
import {AirplanemodeActive, Accessibility, Explore, Info, ListOutlined, LocalActivity, Place } from '@mui/icons-material';
import ItemMenu from "./ItemMenu";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row"
});

export default function NavBar({theme, setTheme}) {

  const [isShowMenu, setisShowMenu] = useState(false)

  const themeChange = () =>{
    if(theme==="light"){
      setTheme("dark");
    }else{
      setTheme("light")
    }
  }

  const showMenu =() =>{
    setisShowMenu(!isShowMenu)
  }

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography>Tours</Typography>
        <Box sx={{display:"flex", alignItems:"center", gap:"20px"}}>
        <Box onClick={themeChange}>
            <LightModeIcon color="action" />
          </Box>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsActive color="action" />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display:{md:"block", lg:"none"} }}
            onClick={showMenu}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        
      </StyledToolBar>
      {isShowMenu &&  <Box>
       <List>
        <ItemMenu text={"Plan your Trip"} Icon={ <AirplanemodeActive />} />
        <ItemMenu text={"Things to do"} Icon={ <ListOutlined />} />
        <ItemMenu text={"Explore"} Icon={ <Explore />} />
        <ItemMenu text={"Facts"} Icon={ <Accessibility />} />
        <ItemMenu text={"Places"} Icon={ <Place />} />
        <ItemMenu text={"tickets"} Icon={ <LocalActivity />} />
        <ItemMenu text={"help"} Icon={ <Info />} />
      </List>
    </Box>}

    </AppBar>
  );
}
