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
  #design = null;
  constructor(props) {
    super(props);
    this.#design = { m: 1, width: 225 };
  }
  render = () => {
    return (
      <Grid container>
        <Grid>
          <Grid>
            <FormControl size="small" sx={this.#design}>
              <Race />
            </FormControl>
            <FormControl sx={this.#design}>
              <CharacterName />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl size="small" sx={this.#design}>
              <AbilityType />
            </FormControl>

            <FormControl sx={this.#design}>
              <PlayerName />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl size="small" sx={this.#design}>
              <MainTitle />
            </FormControl>
            <FormControl sx={this.#design}>
              <Occupation />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl size="small" sx={this.#design}>
              <SubTitle />
            </FormControl>
            <FormControl sx={this.#design}>
              <Affiliation />
            </FormControl>
          </Grid>
        </Grid>
        <Grid>
          <FormControl size="small" sx={this.#design}>
            <UploadImg />
          </FormControl>
        </Grid>
      </Grid>
    );
  };
}
