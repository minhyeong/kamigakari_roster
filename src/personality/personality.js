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
import Grid from "@mui/material/Grid";
import UploadImg from "./components/upload-img";

export default class Personality extends React.Component {
  render = () => {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
        >
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <Race />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <CharacterName />
          </FormControl>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
        >
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <AbilityType />
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <PlayerName />
          </FormControl>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
        >
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <MainTitle />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <Occupation />
          </FormControl>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
        >
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <SubTitle />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <Affiliation />
          </FormControl>
        </Grid>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <UploadImg />
        </FormControl>
      </>
    );
  };
}
