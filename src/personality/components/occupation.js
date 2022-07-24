import * as React from "react";
import TextField from "@mui/material/TextField";

const Occupation = (props) => {
  let [occ, setOcc] = React.useState("");
  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label="表の職業"
        multiline
        maxRows={4}
        value={occ}
        onChange={(e) => setOcc((occ = e.target.value))}
        size="small"
      />
    </>
  );
};

export default Occupation;
