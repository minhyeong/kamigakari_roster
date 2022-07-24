import * as React from "react";
import TextField from "@mui/material/TextField";

const CharacterName = () => {
  let [name, setName] = React.useState("");
  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label="キャラクター名"
        multiline
        maxRows={4}
        value={name}
        onChange={(e) => setName((name = e.target.value))}
        size="small"
      />
    </>
  );
};

export default CharacterName;
