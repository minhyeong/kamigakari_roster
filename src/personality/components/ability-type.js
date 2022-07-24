import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const AbilityType = () => {
  let [type, setType] = React.useState("");
  return (
    <>
      <InputLabel id="demo-simple-select-label">能力値タイプ</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        label="能力値タイプ"
        onChange={(e) => setType((type = e.target.value))}
      >
        <MenuItem value={"戦士"}>戦士</MenuItem>
        <MenuItem value={"汎用"}>汎用</MenuItem>
        <MenuItem value={"魔法"}>魔法</MenuItem>
      </Select>
    </>
  );
};

export default AbilityType;
