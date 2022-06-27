import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListSubheader from "@mui/material/ListSubheader";
import Select from "@mui/material/Select";

export default class Race extends React.Component {
  #race = {
    basis: "基本",
    b_1: "封神",
    b_2: "夜魔",
    b_3: "半妖",
    b_4: "魔術師",
    b_5: "人間",
    requiem: "神魂のレクイエム",
    r_1: "竜王",
    r_2: "神霊",
    r_3: "英魂",
    damocles: "ダモクレスの機神",
    d_1: "サイボーグ",
    d_2: "魔眼",
    d_3: "マレビト",
    guardians: "四神ガーディアンズ",
    g_1: "サキミタマ",
    exodus: "神機エクソダス",
    e_1: "アンドロイド",
    e_2: "ホムンクルス",
  };
  #book = ["basis", "requiem", "damocles", "damocles", "guardians", "exodus"];
  #raceMenu = [];

  constructor(props) {
    super(props);

    this.state = { race: "" };

    for (let i in this.#race) {
      if (this.#book.includes(i)) {
        this.#raceMenu.push(<ListSubheader>{this.#race[i]}</ListSubheader>);
      } else {
        this.#raceMenu.push(
          <MenuItem value={this.#race[i]}>{this.#race[i]}</MenuItem>
        );
      }
    }
  }

  render = () => {
    return (
      <>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
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
        </FormControl>
      </>
    );
  };
}
