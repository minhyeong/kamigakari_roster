import * as React from "react";
import FormControl from "@mui/material/FormControl";

import Race from "./components/race";
import CharacterName from "./components/character-name";
import AbilityType from "./components/ability-type";
import PlayerName from "./components/player-name";
import MainTitle from "./components/title-main.js";
import SubTitle from "./components/title-sub";
import Occupation from "./components/occupation";
import Affiliation from "./components/affiliation";
import UploadImg from "./components/upload-img";

// スタイル関連
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const design = { m: 1, width: 220 };
const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});

const Personality = (props) => {
  return (
    <Grid container>
      <ThemeProvider theme={theme}>
        <Grid>
          <Grid>
            <FormControl size="small" sx={design}>
              <Race />
            </FormControl>
            <FormControl sx={design}>
              <CharacterName />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl size="small" sx={design}>
              <AbilityType />
            </FormControl>

            <FormControl sx={design}>
              <PlayerName />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl size="small" sx={design}>
              <MainTitle />
            </FormControl>
            <FormControl sx={design}>
              <Occupation />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl size="small" sx={design}>
              <SubTitle />
            </FormControl>
            <FormControl sx={design}>
              <Affiliation />
            </FormControl>
          </Grid>
        </Grid>
        <Grid>
          <FormControl size="small" sx={design}>
            <UploadImg />
          </FormControl>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
};

export default Personality;
