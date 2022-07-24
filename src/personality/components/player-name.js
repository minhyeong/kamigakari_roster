import * as React from "react";
import TextField from "@mui/material/TextField";

const PlayerName = (props) => {
  let [plname, setPlName] = React.useState("");
  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label="プレイヤー"
        multiline
        maxRows={4}
        value={plname}
        onChange={(e) => setPlName((plname = e.target.value))}
        size="small"
      />
    </>
  );
};

export default PlayerName;
