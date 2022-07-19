import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import Select from "@mui/material/Select";

import RaceData from "../../data/race.json";

export default class Race extends React.Component {
  #raceMenu = [];
  constructor(props) {
    super(props);
    this.state = { race: "" };

    const raceData = Object.keys(RaceData[0]);

    for (let i = 0; i < raceData.length; ++i) {
      const race = raceData[i];
      if (RaceData[0][race] === "None") {
        this.#raceMenu.push(<ListSubheader key={race}>{race}</ListSubheader>);
      } else {
        this.#raceMenu.push(
          <MenuItem key={race} value={race}>
            {race}
          </MenuItem>
        );
      }
    }
  }

  render = () => {
    return (
      <>
        <InputLabel id="demo-simple-select-label">種族</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.race}
          label="種族"
          onChange={(e) => this.setState({ race: e.target.value })}
        >
          {this.#raceMenu}
        </Select>
      </>
    );
  };
}
