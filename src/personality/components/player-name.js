import * as React from "react";
import TextField from "@mui/material/TextField";

export default class PlayerName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render = () => {
    return (
      <>
        <TextField
          id="outlined-multiline-flexible"
          label="プレイヤー"
          multiline
          maxRows={4}
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          size="small"
        />
      </>
    );
  };
}
