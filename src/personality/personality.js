import * as React from "react";
import Race from "./components/race";
import CharacterName from "./components/character-name";
import AbilityType from "./components/ability-type";
import PlayerName from "./components/player-name";
import MainTitle from "./components/title-main.js";
import SubTitle from "./components/title-sub";
import Occupation from "./components/occupation";
import Affiliation from "./components/affiliation";
import Grid from "@mui/material/Grid";

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
          <Race />
          <CharacterName />
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
        >
          <AbilityType />
          <PlayerName />
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
        >
          <MainTitle />
          <Occupation />
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
        >
          <SubTitle />
          <Affiliation />
        </Grid>
      </>
    );
  };
}
