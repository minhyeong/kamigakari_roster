import * as React from "react";
import TextField from "@mui/material/TextField";

export default class CharacterName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render = () => {
    return (
      <>
        <TextField
          id="outlined-multiline-flexible"
          label="キャラクター名"
          multiline
          maxRows={4}
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </>
    );
  };
}
