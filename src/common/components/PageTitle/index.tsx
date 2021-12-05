import React from "react";
import { Grid, Typography } from "@mui/material";

interface ITitleProps {
  children: string;
}

export const PageTitle: React.FC<ITitleProps> = ({ children }) => {
  return (
    <Grid sx={{ mt: 2, mb: 2 }} container justifyContent="center">
      <Typography variant="h4">{children}</Typography>
    </Grid>
  );
};
