import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

export default class PlayerName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render = () => {
    return (
      <>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="プレイヤー"
            multiline
            maxRows={4}
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </FormControl>
      </>
    );
  };
}
