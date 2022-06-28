import * as React from "react";
import TextField from "@mui/material/TextField";

export default class Affiliation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { affiliation: "" };
  }

  render = () => {
    return (
      <>
        <TextField
          id="outlined-multiline-flexible"
          label="所属"
          multiline
          maxRows={4}
          value={this.state.affiliation}
          onChange={(e) => this.setState({ affiliation: e.target.value })}
        />
      </>
    );
  };
}
