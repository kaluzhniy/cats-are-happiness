import React from "react";
import {
  SwipeableDrawer,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { RANDOM_CATS } from "router/path";

interface IDrawerProps {
  openDrawer: () => void;
  closeDrawer: () => void;
  isOpen: boolean;
}
const DRAWER_WIDTH = 200

export const Drawer: React.FC<IDrawerProps> = ({
  openDrawer,
  isOpen,
  closeDrawer,
}) => {
  const navigate = useNavigate();

  const goToPage = (path: string) => () => {
    navigate(path);
    closeDrawer();
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={closeDrawer}
      onOpen={openDrawer}
      PaperProps={{ sx: { width: DRAWER_WIDTH } }}
    >
      <List>
        <ListItemButton onClick={goToPage(RANDOM_CATS)}>
          <Typography variant="button">RANDOM CAT</Typography>
        </ListItemButton>
      </List>
    </SwipeableDrawer>
  );
};
