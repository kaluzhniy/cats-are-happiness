import React from "react";
import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

interface IButtonWithProgressProps extends ButtonProps {
  loading: boolean;
}

export const ButtonWithProgress: React.FC<IButtonWithProgressProps> = ({
  loading,
  children,
  disabled,
  ...props
}) => {
  return (
    <Button disabled={disabled || loading} {...props}>
      {loading && (
        <Box
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          display="flex"
        >
          <CircularProgress color="inherit" size={22} thickness={4} />
        </Box>
      )}
      <Box sx={{ opacity: loading ? 0 : "initial" }}>{children}</Box>
    </Button>
  );
};
