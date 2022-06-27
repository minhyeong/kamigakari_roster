import * as React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default class Occupation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { occupation: "" };
  }

  render = () => {
    return (
      <>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="表の職業"
            multiline
            maxRows={4}
            value={this.state.occupation}
            onChange={(e) => this.setState({ occupation: e.target.value })}
          />
        </FormControl>
      </>
    );
  };
}
