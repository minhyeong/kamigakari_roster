import * as React from "react";
import IconButton from "@mui/material/IconButton";

const UploadImg = () => {
  let [img, setImg] = React.useState(
    `${process.env.PUBLIC_URL}/img/myface.png`
  );

  const onChangeInputFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setImg((img = e.target.result));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <label htmlFor="chara-img">
        <input
          accept="image/*"
          id="chara-img"
          type="file"
          onChange={(e) => onChangeInputFile(e)}
          hidden
        />
        <IconButton color="primary" component="span">
          <img src={img} alt="" height="200" />
        </IconButton>
      </label>
    </>
  );
};

export default UploadImg;
