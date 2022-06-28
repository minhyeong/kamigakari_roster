import * as React from "react";
import IconButton from "@mui/material/IconButton";

export default class UploadImg extends React.Component {
  #reader = null;
  constructor(props) {
    super(props);
    this.state = { myface: `${process.env.PUBLIC_URL}/img/myface.png` };
  }

  #onChangeInputFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        this.setState({ myface: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  render = () => {
    return (
      <>
        <label htmlFor="chara-img">
          <input
            accept="image/*"
            id="chara-img"
            type="file"
            onChange={this.#onChangeInputFile}
            hidden
          />
          <IconButton color="primary" component="span">
            <img src={this.state.myface} width="300" height="300" />
          </IconButton>
        </label>
      </>
    );
  };
}
