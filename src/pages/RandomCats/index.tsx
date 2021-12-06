import React, { useCallback, useEffect } from "react";
import { Button, Grid, Card, CardMedia, CardActions } from "@mui/material";
import { observer } from "mobx-react";

import { PageTitle } from "common/components/PageTitle";
import { useStore } from "common/hooks/useStore";
import { MIME_TYPES } from "./RandomCatStore";

export const RandomCatsPage: React.FC = observer(() => {
  const { randomCatStore } = useStore();
  const getCat = useCallback(() => {
    randomCatStore.getRandomCat(MIME_TYPES.ANIMATED);
  }, [randomCatStore]);
  useEffect(() => {
    getCat();
  }, [getCat]);

  return (
    <Grid container direction="column" alignItems="center" sx={{height: "100%"}}>
      <PageTitle>Random cat</PageTitle>
      {randomCatStore.currentCat && (
        <Grid container alignItems="center" justifyContent="center">
          <Card sx={{ borderRadius: 4 }}>
            <CardMedia
              component="img"
              height={350}
              alt="random card"
              src={randomCatStore.currentCat.url}
              sx={{ objectFit: "contain" }}
            />
            <CardActions sx={{ pt: 2, pb: 2 }}>
              <Button variant="contained" color="primary" onClick={getCat}>
                ONE MORE CAT
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </Grid>
  );
});
