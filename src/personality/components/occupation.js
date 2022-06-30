import * as React from "react";
import TextField from "@mui/material/TextField";

export default class Occupation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { occupation: "" };
  }

  render = () => {
    return (
      <>
        <TextField
          id="outlined-multiline-flexible"
          label="表の職業"
          multiline
          maxRows={4}
          value={this.state.occupation}
          onChange={(e) => this.setState({ occupation: e.target.value })}
          size="small"
        />
      </>
    );
  };
}
