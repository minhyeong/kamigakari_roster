import * as React from "react";
import TextField from "@mui/material/TextField";

const Affiliation = (props) => {
  let [aff, setAff] = React.useState("");
  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label="所属"
        multiline
        maxRows={4}
        value={aff}
        onChange={(e) => setAff((aff = e.target.value))}
        size="small"
      />
    </>
  );
};

export default Affiliation;
