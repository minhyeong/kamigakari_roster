import * as React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default class CharacterName extends React.Component {
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
            label="キャラクター名"
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
