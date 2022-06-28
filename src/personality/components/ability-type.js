import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default class AbilityType extends React.Component {
  constructor(props) {
    super(props);

    this.state = { type: "" };
  }

  render = () => {
    return (
      <>
        <InputLabel id="demo-simple-select-label">能力値タイプ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.type}
          label="能力値タイプ"
          onChange={(e) => this.setState({ type: e.target.value })}
        >
          <MenuItem value={"戦士"}>戦士</MenuItem>
          <MenuItem value={"汎用"}>汎用</MenuItem>
          <MenuItem value={"魔法"}>魔法</MenuItem>
        </Select>
      </>
    );
  };
}
