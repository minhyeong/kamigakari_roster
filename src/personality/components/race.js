import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import Select from "@mui/material/Select";

import RaceData from "../../data/race.json";
import MainStatus from "../../status/status-main";

export default class Race extends React.Component {
  #raceMenu = [];
  #ms = null;
  constructor(props) {
    super(props);
    this.state = { race: "" };

    this.#ms = new MainStatus();

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

  #onChange = (e) => {
    this.setState({ race: e.target.value });
    if (1) {
      // 能力値タイプが選ばれてる場合
      let status = RaceData[0][e.target.value]["戦士"];
      this.#ms.updateRaceData(status);
    } else {
    }
  };

  render = () => {
    return (
      <>
        <InputLabel id="demo-simple-select-label">種族</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.race}
          label="種族"
          onChange={this.#onChange}
        >
          {this.#raceMenu}
        </Select>
      </>
    );
  };
}
