import React, { useCallback, useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardActions, Tab, Tabs } from "@mui/material";
import { observer } from "mobx-react";

import { PageTitle } from "common/components/PageTitle";
import { useStore } from "common/hooks/useStore";
import { MIME_TYPES } from "./RandomCatStore";
import { ButtonWithProgress } from "common/components/ButtonWithProgress";

export const RandomCatsPage: React.FC = observer(() => {
  const [loading, setLoading] = useState(false);
  const [mimeTabValue, setMimeTabValue] = useState(MIME_TYPES.ALL);
  const { randomCatStore } = useStore();
  const getCat = useCallback(async () => {
    setLoading(true);
    await randomCatStore.getRandomCat(mimeTabValue);
  }, [mimeTabValue, randomCatStore]);
  useEffect(() => {
    getCat();
  }, [getCat]);

  const handleMimeTabChange = (
    e: React.SyntheticEvent,
    newValue: MIME_TYPES
  ) => {
    setMimeTabValue(newValue);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <PageTitle>Random cat</PageTitle>
      <Tabs sx={{ pb: 1 }} onChange={handleMimeTabChange} value={mimeTabValue}>
        <Tab label="All" value={MIME_TYPES.ALL} />
        <Tab label="Static" value={MIME_TYPES.STATIC} />
        <Tab label="Animated" value={MIME_TYPES.ANIMATED} />
      </Tabs>
      {randomCatStore.currentCat && (
        <Grid container alignItems="center" justifyContent="center">
          <Card sx={{ borderRadius: 4 }}>
            <CardMedia
              component="img"
              height={350}
              alt="random card"
              src={randomCatStore.currentCat.url}
              sx={{ objectFit: "contain" }}
              onLoad={() => setLoading(false)}
            />
            <CardActions sx={{ pt: 2, pb: 2 }}>
              <Grid container justifyContent="center">
                <ButtonWithProgress
                  variant="outlined"
                  color="primary"
                  loading={loading}
                  onClick={getCat}
                >
                  One more cat
                </ButtonWithProgress>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      )}
    </Grid>
  );
});
