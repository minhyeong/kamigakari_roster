import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import Select from "@mui/material/Select";

import RaceData from "../../data/race.json";

const Race = () => {
  let [race, setRace] = React.useState("");
  const raceData = Object.keys(RaceData[0]);
  let raceMenu = [];

  for (let i = 0; i < raceData.length; ++i) {
    const race = raceData[i];
    if (RaceData[0][race] === "None") {
      raceMenu.push(<ListSubheader key={race}>{race}</ListSubheader>);
    } else {
      raceMenu.push(
        <MenuItem key={race} value={race}>
          {race}
        </MenuItem>
      );
    }
  }

  const onChange = (e) => {
    setRace((race = e.target.value));
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label">種族</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={race}
        label="種族"
        onChange={(e) => onChange(e)}
      >
        {raceMenu}
      </Select>
    </>
  );
};

export default Race;
