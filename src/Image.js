import React, { useState } from "react";
import townImage from "./town.jpg";
import "./App.css";

const Image = () => {
  const [imageVisible, setImageVisible] = useState(true);
  const [imageWidth, setImageWidth] = useState(600);

  const addImage = () => {
    setImageVisible(true);
    setImageWidth(600);
  };

  const removeImage = () => {
    setImageVisible(false);
  };

  const increaseSize = () => {
    setImageWidth((prevWidth) => prevWidth + 50);
  };

  const decreaseSize = () => {
    setImageWidth((prevWidth) => (prevWidth > 50 ? prevWidth - 50 : prevWidth));
  };

  return (
    <div>
      <div id="imageContainer">
        {imageVisible && (
          <img
            id="lubnyImage"
            src={townImage}
            alt="фото міста Лубни"
            style={{
              width: `${imageWidth}px`,
              maxWidth: "100%",
              height: "auto",
              border: "2px solid #ddd",
            }}
          />
        )}
      </div>
      <div>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={removeImage}>Видалити зображення</button>
        <button onClick={addImage}>Додати зображення</button>
      </div>
    </div>
  );
};

export default Image;
