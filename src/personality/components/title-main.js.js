import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";

import TitleData from "../../data/title.json";

export default class MainTitle extends React.Component {
  #titleMenu = [];
  constructor(props) {
    super(props);
    this.state = { title: "" };

    const titleData = Object.keys(TitleData[0]);

    for (let i = 0; i < titleData.length; ++i) {
      const title = titleData[i];
      if (TitleData[0][title] === "None") {
        this.#titleMenu.push(
          <ListSubheader key={title}>{title}</ListSubheader>
        );
      } else {
        this.#titleMenu.push(
          <MenuItem key={title} value={title}>
            {title}
          </MenuItem>
        );
      }
    }
  }

  render = () => {
    return (
      <>
        <InputLabel id="demo-simple-select-label">メイン称号</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.type}
          label="メイン称号"
          onChange={(e) => this.setState({ type: e.target.value })}
        >
          {this.#titleMenu}
        </Select>
      </>
    );
  };
}
