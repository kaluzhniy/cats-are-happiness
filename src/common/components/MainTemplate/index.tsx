import React, { useState } from "react";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";

import { IUser } from "common/Interfaces/User";
import { useDrawer } from "./useDrawer";
import { Drawer } from "./Drawer";

interface IMainTemplateProps {
  children: React.ReactElement;
}

export const MainTemplate: React.FC<IMainTemplateProps> = ({ children }) => {
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const { logout, user } = useAuth0<IUser>();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };
  const closeUserMenu = () => {
    setUserMenuAnchorEl(null);
  };

  return (
    <Grid container direction={"column"}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2 }}
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="body2" component="span" sx={{ flexGrow: 1 }}>
            CATS ARE HAPPINESS
          </Typography>
          <IconButton onClick={openUserMenu}>
            {user?.picture ? (
              <Avatar src={user.picture} />
            ) : (
              <Avatar>
                <AccountCircle />
              </Avatar>
            )}
          </IconButton>
          <Menu
            anchorEl={userMenuAnchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(userMenuAnchorEl)}
            onClose={closeUserMenu}
          >
            <MenuItem disabled>{user?.name || "User"}</MenuItem>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        isOpen={isOpen}
        closeDrawer={closeDrawer}
        openDrawer={openDrawer}
      />
      <Container>
        <main>{children}</main>
      </Container>
    </Grid>
  );
};
