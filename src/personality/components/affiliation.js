import * as React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default class Affiliation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { affiliation: "" };
  }

  render = () => {
    return (
      <>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="所属"
            multiline
            maxRows={4}
            value={this.state.affiliation}
            onChange={(e) => this.setState({ affiliation: e.target.value })}
          />
        </FormControl>
      </>
    );
  };
}
