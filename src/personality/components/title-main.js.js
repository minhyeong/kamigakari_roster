import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ListSubheader from "@mui/material/ListSubheader";

export default class MainTitle extends React.Component {
  #title = {
    battle: "戦闘系",
    b_1: "アークスレイヤー",
    b_2: "ドラゴンキャリア",
    b_3: "ゴッドハンド",
    b_4: "レジオン",
    b_5: "ソウルイーター",
    general: "汎用系",
    g_1: "ダークハンター",
    g_2: "エレメンタルアデプト",
    g_3: "コントラクター",
    g_4: "レガシーユーザー",
    g_5: "マスタリィ",
    sorcery: "魔導系",
    s_1: "エルダーメイジ",
    s_2: "デジタルソーサラー",
    s_3: "ディバイントーカー",
    s_4: "タイムウィザード",
    s_5: "ラストクリエイター",
  };
  #type = ["battle", "general", "sorcery"];
  #titleMenu = [];

  constructor(props) {
    super(props);
    this.state = { title: "" };

    for (let i in this.#title) {
      if (this.#type.includes(i)) {
        this.#titleMenu.push(<ListSubheader>{this.#title[i]}</ListSubheader>);
      } else {
        this.#titleMenu.push(
          <MenuItem value={this.#title[i]}>{this.#title[i]}</MenuItem>
        );
      }
    }
  }

  render = () => {
    return (
      <>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
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
        </FormControl>
      </>
    );
  };
}
