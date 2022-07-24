import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";

import TitleData from "../../data/title.json";

const MainTitle = (props) => {
  let [title, setTitle] = React.useState("");
  const titleData = Object.keys(TitleData[0]);
  let titleMenu = [];

  for (let i = 0; i < titleData.length; ++i) {
    const title = titleData[i];
    if (TitleData[0][title] === "None") {
      titleMenu.push(<ListSubheader key={title}>{title}</ListSubheader>);
    } else {
      titleMenu.push(
        <MenuItem key={title} value={title}>
          {title}
        </MenuItem>
      );
    }
  }

  const onChange = (e) => {
    setTitle((title = e.target.value));
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label">メイン称号</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={title}
        label="メイン称号"
        onChange={(e) => onChange(e)}
      >
        {titleMenu}
      </Select>
    </>
  );
};

export default MainTitle;
